import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, color palette, and brand guidelines for a tech startup.",
    image: "/project1.jpg",
    tags: ["Logo Design", "Brand Identity", "Adobe Illustrator"],
    link: "#",
    github: "#",
  },
  {
    title: "Motion Graphics Reel",
    description: "Animated logo reveals and promotional videos for various clients showcasing motion design skills.",
    image: "/project2.jpg",
    tags: ["Motion Graphics", "After Effects", "Animation"],
    link: "#",
    github: "#",
  },
  {
    title: "Educational Content",
    description: "Interactive learning materials and visual aids for mathematics and physics education.",
    image: "/project3.jpg",
    tags: ["Education", "Infographics", "Teaching"],
    link: "#",
    github: "#",
  },
];

export default function Portfolio() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            My <span className="bg-gradient-to-r from-red-500 to-gray-900 dark:from-red-400 dark:to-gray-100 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Explore my creative journey through logo design, motion graphics, and educational content creation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white flex-1 text-xs sm:text-sm">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My CV</h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">Download or view my latest CV (PDF format).</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Download CV
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                View in Google Drive
              </Button>
            </a>
          </div>
          <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900" style={{ minHeight: 400 }}>
            <iframe
              src="https://drive.google.com/file/d/1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-/preview"
              width="100%"
              height="400"
              allow="autoplay"
              className="w-full h-[400px] border-0"
              title="Mehedi Hasan Shad CV"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Education & Achievements Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* SSC */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Image src="/Education/Akij.png" alt="Akij Ideal School & College" width={80} height={80} className="mb-4 rounded-full object-contain" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">SSC</h3>
              <p className="text-sm text-blue-700 dark:text-blue-200 font-semibold mb-2">Akij Ideal School & College</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <Link href="/tuition" className="w-full" passHref legacyBehavior>
                <Button size="sm" variant="outline" className="w-full dark:border-gray-700" asChild>
                  <span>See Tuition</span>
                </Button>
              </Link>
            </div>
            {/* HSC */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
              <Image src="/Education/ADAMJEE.png" alt="Adamjee Cantonment College" width={80} height={80} className="mb-4 rounded-full object-contain" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">HSC</h3>
              <p className="text-sm text-blue-700 dark:text-blue-200 font-semibold mb-2">Adamjee Cantonment College</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <Link href="/portfolio" className="w-full" passHref legacyBehavior>
                <Button size="sm" variant="outline" className="w-full dark:border-gray-700" asChild>
                  <span>See Portfolio</span>
                </Button>
              </Link>
            </div>
            {/* BBA-General */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 flex flex-col items-center text-center sm:col-span-2">
              <Image src="/Education/bup.png" alt="Bangladesh University of Professionals" width={80} height={80} className="mb-4 rounded-full object-contain" />
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">BBA - General</h3>
              <p className="text-sm text-blue-700 dark:text-blue-200 font-semibold mb-2">Bangladesh University of Professionals</p>
              <p className="text-gray-600 dark:text-gray-300 text-xs mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
              <Link href="/contact" className="w-full" passHref legacyBehavior>
                <Button size="sm" variant="outline" className="w-full dark:border-gray-700" asChild>
                  <span>Contact Me</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 px-4">
            Like What You See?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 px-4">
            Let&apos;s work together to bring your vision to life with exceptional design and creativity.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
}