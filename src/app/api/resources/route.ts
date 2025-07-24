import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

function getUserFromRequest(req: NextRequest) {
  const auth = req.headers.get('authorization');
  if (!auth) return null;
  const token = auth.replace('Bearer ', '');
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  // List all resources (admin: all, public: only active+public)
  const isAdmin = getUserFromRequest(req)?.isAdmin;
  const where = isAdmin ? {} : { active: true, public: true };
  const resources = await prisma.resource.findMany({ where, orderBy: { createdAt: 'desc' } });
  return NextResponse.json({ resources });
}

export async function POST(req: NextRequest) {
  // Only admin can upload
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { type, url, filename, public: isPublic } = await req.json();
  if (type !== 'file' && type !== 'link') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  }
  const resource = await prisma.resource.create({
    data: {
      type,
      url,
      filename,
      public: !!isPublic,
      uploadedById: user.userId,
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