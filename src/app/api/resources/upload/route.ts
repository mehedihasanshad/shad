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
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  const filename = `${Date.now()}-${file.name}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, filename);
  const arrayBuffer = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(arrayBuffer));
  const url = `/uploads/${filename}`;
  const resource = await prisma.resource.create({
    data: {
      type: 'file',
      url,
      filename: file.name,
      public: false,
      uploadedById: user.userId,
    },
  });
  return NextResponse.json({ success: true, resource, url });
} 