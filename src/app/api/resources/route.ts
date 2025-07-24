import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

type UserJwt = JwtPayload & { isAdmin?: boolean, userId?: number };
function getUserFromRequest(req: NextRequest): UserJwt | null {
  const auth = req.headers.get('authorization');
  if (!auth) return null;
  const token = auth.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    return typeof decoded === 'object' ? decoded : null;
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  // List all resources (admin: all, public: only active+public)
  const user = getUserFromRequest(req);
  const isAdmin = user?.isAdmin ?? false;
  const where = isAdmin ? {} : { active: true, public: true };
  const resources = await prisma.resource.findMany({
    where,
    orderBy: { createdAt: 'desc' },
    include: { uploadedBy: true },
  });
  return NextResponse.json({ resources });
}

export async function POST(req: NextRequest) {
  // Allow admin or public (if enabled) to upload links
  const user = getUserFromRequest(req);
  const setting = await prisma.globalSetting.findUnique({ where: { key: 'public_uploading' } });
  const publicUploading = setting?.value === 'on';
  const { type, url, filename, public: isPublic, active: isActive } = await req.json();
  if (type !== 'file' && type !== 'link') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }
  let uploaderType = 'public';
  let uploadedById = null;
  let _isPublic = true;
  let _isActive = true;
  if (user?.isAdmin) {
    uploaderType = 'admin';
    uploadedById = user.userId;
    _isPublic = !!isPublic;
    _isActive = !!isActive;
  } else if (!publicUploading) {
    return NextResponse.json({ error: 'Public uploading is turned off.' }, { status: 403 });
  }
  const resource = await prisma.resource.create({
    data: {
      type,
      url,
      filename,
      public: _isPublic,
      active: _isActive,
      uploadedById,
      uploaderType,
    },
  });
  return NextResponse.json({ success: true, resource });
}

export async function PATCH(req: NextRequest) {
  // Only admin can update
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, active, public: isPublic } = await req.json();
  const resource = await prisma.resource.update({
    where: { id },
    data: { active, public: isPublic },
  });
  return NextResponse.json({ success: true, resource });
}

// Global settings endpoints
export async function PUT(req: NextRequest) {
  // Only admin can set global settings
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { key, value } = await req.json();
  const setting = await prisma.globalSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
  return NextResponse.json({ success: true, setting });
}

export async function OPTIONS(req: NextRequest) {
  // Get global settings (admin only)
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const settings = await prisma.globalSetting.findMany();
  return NextResponse.json({ settings });
} 