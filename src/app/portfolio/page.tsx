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

      {/* Video Portfolio Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Video <span className="bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Watch my motion graphics, logo animations, and video editing work in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* YouTube Channel Showcase */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-red-600 rounded-full p-1 shadow-lg">
                    <div className="w-full h-full bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">YouTube Channel</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  Subscribe to my channel for motion graphics tutorials, logo design process videos, and creative insights.
                </p>

                <a
                  href="https://www.youtube.com/@ShadsVisualGfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:scale-105 transition-all duration-300">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Visit YouTube Channel
                  </Button>
                </a>
              </div>
            </div>

            {/* Demo Reel */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 group">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-1 shadow-lg">
                    <div className="w-full h-full bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5 3a9 9 0 110-18 9 9 0 010 18z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Demo Reel</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                  A curated showcase of my best motion graphics, logo animations, and video editing projects.
                </p>

                <Button variant="outline" className="w-full dark:border-gray-600 dark:text-gray-300 group-hover:scale-105 transition-all duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5 3a9 9 0 110-18 9 9 0 010 18z" />
                  </svg>
                  Watch Demo Reel
                </Button>
              </div>
            </div>
          </div>

          {/* Video Categories */}
          <div className="mt-12">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Video Categories
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore different types of video content I create
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Logo Animations", icon: "🎨", count: "25+" },
                { title: "Motion Graphics", icon: "🎬", count: "40+" },
                { title: "Promotional Videos", icon: "📺", count: "30+" },
                { title: "Educational Content", icon: "📚", count: "20+" }
              ].map((category, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{category.title}</h4>
                  <p className="text-red-600 dark:text-red-400 text-xs font-bold mt-1">{category.count}</p>
                </div>
              ))}
            </div>
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
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey that shaped my professional expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* BBA-General - Featured at top */}
            <div className="lg:col-span-3 bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 rounded-3xl shadow-xl p-8 border border-blue-200/50 dark:border-blue-700/30 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1 shadow-lg">
                      <Image src="/Education/bup.png" alt="Bangladesh University of Professionals" width={88} height={88} className="w-full h-full rounded-full object-contain bg-white p-2" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">🎓</span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Current
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Bachelor&apos;s Degree
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">BBA - General</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">Bangladesh University of Professionals</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Currently pursuing Bachelor of Business Administration with focus on strategic management, digital marketing, and entrepreneurship.
                    This program enhances my business acumen and complements my creative skills.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* HSC */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full p-1 shadow-lg">
                    <Image src="/Education/ADAMJEE.png" alt="Adamjee Cantonment College" width={76} height={76} className="w-full h-full rounded-full object-contain bg-white p-2" />
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 mb-2">
                  Higher Secondary
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">HSC</h3>
                <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4">Adamjee Cantonment College</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Completed Higher Secondary Certificate in Science, building strong foundation in mathematics and physics that supports my tutoring expertise.
                </p>

                <Link href="/portfolio" className="w-full">
                  <Button variant="outline" className="w-full border-orange-200 hover:bg-orange-50 dark:border-orange-700 dark:hover:bg-orange-900/20 group-hover:scale-105 transition-transform duration-300">
                    See Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            {/* SSC */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 group">
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 rounded-full p-1 shadow-lg">
                    <Image src="/Education/Akij.png" alt="Akij Ideal School & College" width={76} height={76} className="w-full h-full rounded-full object-contain bg-white p-2" />
                  </div>
                </div>

                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 mb-2">
                  Secondary School
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">SSC</h3>
                <p className="text-green-600 dark:text-green-400 font-semibold mb-4">Akij Ideal School & College</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  Completed Secondary School Certificate with excellent grades, establishing the academic foundation that led to my passion for teaching and design.
                </p>

                <Link href="/tuition" className="w-full">
                  <Button variant="outline" className="w-full border-green-200 hover:bg-green-50 dark:border-green-700 dark:hover:bg-green-900/20 group-hover:scale-105 transition-transform duration-300">
                    See Tuition
                  </Button>
                </Link>
              </div>
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
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}