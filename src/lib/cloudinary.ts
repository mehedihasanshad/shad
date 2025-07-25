import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// Helper function to upload file to Cloudinary
export async function uploadToCloudinary(
  file: Buffer,
  filename: string,
  folder: string = 'resources'
): Promise<{ url: string; public_id: string }> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto', // Automatically detect file type
        folder: folder,
        public_id: `${Date.now()}-${filename.replace(/\.[^/.]+$/, '')}`, // Remove extension, Cloudinary will add it
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else if (result) {
          resolve({
            url: result.secure_url,
            public_id: result.public_id,
          });
        } else {
          reject(new Error('Upload failed'));
        }
      }
    ).end(file);
  });
}

// Helper function to delete file from Cloudinary
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
}

// Helper function to generate optimized image URLs
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: string;
    format?: string;
  } = {}
): string {
  const { width, height, quality = 'auto', format = 'auto' } = options;
  
  let transformation = `q_${quality},f_${format}`;
  
  if (width) transformation += `,w_${width}`;
  if (height) transformation += `,h_${height}`;
  
  return cloudinary.url(publicId, {
    transformation: transformation,
    secure: true,
  });
}