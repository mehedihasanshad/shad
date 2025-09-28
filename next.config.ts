import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.youtube.com',
      'res.cloudinary.com',
      // add other domains as needed
    ],
  },
};

export default nextConfig;
