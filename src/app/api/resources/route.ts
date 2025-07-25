import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

// TEMPORARY TEST ENDPOINT FOR DEBUGGING
export async function GET_TEST(req: NextRequest) {
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
  } catch (e) {
    dbStatus = e.message || 'db error';
  }
  try {
    // Test Cloudinary config
    await new Promise((resolve, reject) => {
      cloudinary.api.ping((err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  } catch (e) {
    cloudinaryStatus = e.message || 'cloudinary error';
  }
  return NextResponse.json({ envStatus, dbStatus, cloudinaryStatus });
}

export async function POST(req: NextRequest) {
  try {
    // Accept both JSON and multipart/form-data for link uploads
    const contentType = req.headers.get('content-type') || '';
    let type, url, filename, title, description, thumbnail, isPublic, isActive, imageFile;
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      type = formData.get('type');
      url = formData.get('url');
      title = formData.get('title');
      description = formData.get('description');
      isPublic = formData.get('public');
      isActive = formData.get('active');
      imageFile = formData.get('thumbnail');
      filename = null;
    } else {
      let body;
      try {
        body = await req.json();
      } catch (e) {
        return NextResponse.json({ error: 'Invalid or missing JSON body.' }, { status: 400 });
      }
      type = body.type;
      url = body.url;
      filename = body.filename;
      title = body.title;
      description = body.description;
      thumbnail = body.thumbnail;
      isPublic = body.public;
      isActive = body.active;
      imageFile = null;
    }
    const user = getUserFromRequest(req);
    const setting = await prisma.globalSetting.findUnique({ where: { key: 'public_uploading' } });
    const publicUploading = setting?.value === 'on';
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
    let thumbnailUrl = null;
    if (type === 'link' && imageFile && typeof imageFile === 'object' && 'arrayBuffer' in imageFile) {
      // Upload image to Cloudinary
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const stream = Readable.from(buffer);
      const uploadResult: UploadApiResponse = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({ folder: 'resource-thumbnails' }, (err, result) => {
          if (err || !result) reject(err);
          else resolve(result);
        });
        stream.pipe(uploadStream);
      });
      thumbnailUrl = uploadResult.secure_url;
    } else if (type === 'link' && thumbnail) {
      thumbnailUrl = thumbnail;
    }
    const resource = await prisma.resource.create({
      data: {
        type,
        url,
        filename,
        title: title || null,
        description: description || null,
        thumbnail: thumbnailUrl || null,
        public: _isPublic,
        active: _isActive,
        uploadedById,
        uploaderType,
      },
    });
    return NextResponse.json({ success: true, resource });
  } catch (error) {
    console.error('POST /api/resources error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
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
  // Always return the public_uploading setting for all users
  const user = getUserFromRequest(req);
  const publicSetting = await prisma.globalSetting.findUnique({ where: { key: 'public_uploading' } });
  if (user?.isAdmin) {
    const settings = await prisma.globalSetting.findMany();
    return NextResponse.json({ settings });
  } else {
    return NextResponse.json({ settings: publicSetting ? [publicSetting] : [] });
  }
} 