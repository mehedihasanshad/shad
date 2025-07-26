import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';

const prisma = new PrismaClient();

export async function GET() {
  let dbStatus = 'ok';
  let cloudinaryStatus = 'ok';
  let envStatus = {};
  try {
    envStatus = {
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME ? 'set' : 'missing',
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'set' : 'missing',
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'set' : 'missing',
      DATABASE_URL: process.env.DATABASE_URL ? 'set' : 'missing',
      JWT_SECRET: process.env.JWT_SECRET ? 'set' : 'missing',
    };
    // Test DB connection
    await prisma.globalSetting.findFirst();
  } catch (e: unknown) {
    dbStatus = (e as Error).message || 'db error';
  }
  try {
    // Test Cloudinary config
    await new Promise((resolve, reject) => {
      cloudinary.api.ping((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  } catch (e: unknown) {
    cloudinaryStatus = (e as Error).message || 'cloudinary error';
  }
  return NextResponse.json({ envStatus, dbStatus, cloudinaryStatus });
} 