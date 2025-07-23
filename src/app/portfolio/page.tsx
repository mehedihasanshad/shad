import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

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
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            My <span className="bg-gradient-to-r from-red-500 to-gray-900 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my creative journey through logo design, motion graphics, and educational content creation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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