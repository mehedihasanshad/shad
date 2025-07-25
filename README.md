# Mehedi Hasan Shad - Portfolio & Tutoring Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS, showcasing design work and tutoring services.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Type Safe**: Full TypeScript support
- **Accessible**: Built with accessibility in mind
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # App Router pages
│   │   ├── contact/         # Contact page
│   │   ├── portfolio/       # Portfolio page
│   │   ├── tuition/         # Tutoring page
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── ...
│   └── lib/                 # Utilities
├── public/                  # Static assets
├── vue-backup/              # Original Vue.js project backup
└── ...
```

## 🎨 Services Offered

### Design Services
- **Logo Design**: Brand identity development and logo creation
- **Motion Graphics**: Animated content and visual storytelling
- **Brand Identity**: Complete branding packages

### Educational Services
- **Mathematics Tutoring**: Algebra, Geometry, Calculus, Statistics
- **Physics Tutoring**: Mechanics, Thermodynamics, Electromagnetism
- **Personalized Learning**: One-on-one sessions tailored to student needs

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DATABASE_URL="your_database_url_here"
   
   # JWT Secret for Authentication
   JWT_SECRET="your_jwt_secret_here"
   
   # Cloudinary Configuration for File Management
   CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ☁️ Cloudinary Integration

This project uses Cloudinary for file storage and image optimization:

### Features:
- **File Upload**: Automatic upload to Cloudinary cloud storage
- **Image Optimization**: Automatic format conversion and compression
- **Thumbnail Generation**: Auto-generated thumbnails for images
- **CDN Delivery**: Fast global content delivery
- **File Management**: Easy file deletion and management

### Setup:
1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. Get your credentials from the dashboard
3. Add them to your `.env` file as shown above
4. Test the connection: `GET /api/cloudinary/test`

### Usage:
- Files uploaded through the admin panel are automatically stored in Cloudinary
- Images get optimized thumbnails for better performance
- All files are served through Cloudinary's CDN for faster loading

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. **Push to GitHub**: The repository is already connected to GitHub
2. **Connect to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
3. **Deploy**: Zero configuration needed - Vercel handles everything automatically

### Important Notes:
- The `vue-backup/` folder is excluded from deployment via `.vercelignore`
- The build process automatically optimizes for production
- Environment variables can be added in Vercel dashboard if needed

## 📧 Contact

- **Email**: mehedi@example.com
- **LinkedIn**: [linkedin.com/in/mhsshad](https://linkedin.com/in/mhsshad)
- **Behance**: [behance.net/mhsshad](https://behance.net/mhsshad)
- **Instagram**: [instagram.com/mhsshad](https://instagram.com/mhsshad)

## 📄 License

This project is licensed under the MIT License.

---

## 🔄 Migration from Vue.js

This project was migrated from Vue.js to Next.js. The original Vue.js project is preserved in the `vue-backup/` directory for reference.

### Key Improvements in Next.js Version:
- Better SEO with App Router
- Improved performance with React Server Components
- Enhanced TypeScript integration
- Better build optimization
- Simplified deployment process