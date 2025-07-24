import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import type { JwtPayload } from 'jsonwebtoken';

type UserJwt = JwtPayload & { isAdmin?: boolean, userId?: number };

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

function getUserFromRequest(req: NextRequest): UserJwt | null {
  const auth = req.headers.get('authorization');
  if (!auth) return null;
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as UserJwt;
    return typeof decoded === 'object' ? decoded : null;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  const user = getUserFromRequest(req);

  // Check if public uploading is enabled
  const setting = await prisma.globalSetting.findUnique({ where: { key: 'public_uploading' } });
  const publicUploading = setting?.value === 'on';

  // If not admin, only allow if public uploading is enabled
  if (!user?.isAdmin && !publicUploading) {
    return NextResponse.json({ error: 'Public uploading is turned off.' }, { status: 403 });
  }

  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  // File type and size validation
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg',
    'image/jpg',
    'video/mp4',
    'application/zip',
  ];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: 'File type not allowed.' }, { status: 400 });
  }
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: 'File too large (max 10MB).' }, { status: 400 });
  }
  const filename = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, filename);
  const arrayBuffer = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(arrayBuffer));
  const url = `/uploads/${filename}`;

  // Determine uploaderType and flags
  let uploaderType = 'public';
  let uploadedById = null;
  let isPublic = true;
  let isActive = true;
  if (user?.isAdmin) {
    uploaderType = 'admin';
    uploadedById = user.userId;
    // Admin can set public/active flags via formData (optional)
    isPublic = formData.get('public') === 'true';
    isActive = formData.get('active') === 'true';
  }

  const title = formData.get('title') as string | null;
  const description = formData.get('description') as string | null;

  const resource = await prisma.resource.create({
    data: {
      type: 'file',
      url,
      filename: file.name,
      title: title || null,
      description: description || null,
      public: isPublic,
      active: isActive,
      uploadedById,
      uploaderType,
    },
  });
  return NextResponse.json({ success: true, resource, url });
} 