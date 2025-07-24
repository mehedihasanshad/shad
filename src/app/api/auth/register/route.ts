import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password required' }, { status: 400 });
  }
  // Only allow registration if no admin exists
  const existingAdmin = await prisma.user.findFirst({ where: { isAdmin: true } });
  if (existingAdmin) {
    return NextResponse.json({ error: 'Admin already exists' }, { status: 403 });
  }
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { username, passwordHash, isAdmin: true },
  });
  return NextResponse.json({ success: true, user: { id: user.id, username: user.username } });
} 