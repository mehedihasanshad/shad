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

export async function PUT(req: NextRequest) {
  const idStr = req.nextUrl.pathname.split('/')[3]; // /api/resources/[id]/edit
  const id = idStr ? parseInt(idStr) : NaN;
  const user = getUserFromRequest(req);
  
  if (!user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid resource ID' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { title, description, thumbnail, url } = body;

    // Get the existing resource
    const existingResource = await prisma.resource.findUnique({
      where: { id },
    });

    if (!existingResource) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
    }

    // Update the resource
    const updatedResource = await prisma.resource.update({
      where: { id },
      data: {
        title: title || null,
        description: description || null,
        thumbnail: thumbnail || null,
        // Only update URL for links, not files
        ...(existingResource.type === 'link' && url ? { url } : {}),
      },
      include: { uploadedBy: true },
    });

    return NextResponse.json({ success: true, resource: updatedResource });
  } catch (error) {
    console.error('Edit error:', error);
    return NextResponse.json({ error: 'Failed to update resource' }, { status: 500 });
  }
}