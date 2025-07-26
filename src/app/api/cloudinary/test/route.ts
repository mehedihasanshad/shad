import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  try {
    // Test Cloudinary connection by getting account details
    const result = await cloudinary.api.ping();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cloudinary connection successful',
      status: result.status,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME 
    });
  } catch (error) {
    console.error('Cloudinary connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Cloudinary connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}