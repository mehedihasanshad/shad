import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { unlink } from 'fs/promises';
import path from 'path';
import type { JwtPayload } from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

type UserJwt = JwtPayload & { isAdmin?: boolean, userId?: number };

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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = getUserFromRequest(req);
  if (!user?.isAdmin) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id);
  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid resource ID' }, { status: 400 });
  }

  try {
    // Get the resource first to check if it's a file that needs to be deleted from filesystem
    const resource = await prisma.resource.findUnique({
      where: { id }
    });

    if (!resource) {
      return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
    }

    // If it's a file, delete from filesystem
    if (resource.type === 'file' && resource.url) {
      try {
        const filePath = path.join(process.cwd(), 'public', resource.url);
        await unlink(filePath);
      } catch (error) {
        // File might not exist, continue with database deletion
        console.warn('Could not delete file:', error);
      }
    }

    // Delete from database
    await prisma.resource.delete({
      where: { id }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failed to delete resource' }, { status: 500 });
  }
}