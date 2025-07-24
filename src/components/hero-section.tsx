"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle, Facebook, Instagram, Linkedin, Youtube, Globe } from "lucide-react";
import { useInView } from "react-intersection-observer";

const roles = ["Logo Designer", "Motion Graphics Expert", "Academic Tutor", "Digital Media Marketer"];

const skills = [
  { name: "Adobe Photoshop", percent: 95 },
  { name: "Premiere Pro", percent: 90 },
  { name: "Canva", percent: 92 },
  { name: "Adobe Illustrator", percent: 88 },
  { name: "Cinema 4D", percent: 80 },
  { name: "Figma", percent: 85 },
  { name: "Element 3D & Shaper 3D", percent: 75 },
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCurrentRole(roles[(roleIndex + 1) % roles.length]);
    }, 3000);

    return () => clearInterval(interval);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
          {/* Hero Content */}
          <div className="w-full flex flex-col items-center justify-center text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-background/80 backdrop-blur-sm text-muted-foreground border">
              <span className="animate-pulse mr-2">👋</span>
              Hello, I&apos;m available for new projects
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 text-foreground">
              <span className="block">Mehedi Hasan</span>
              <span className="block bg-gradient-to-r from-red-500 to-gray-900 dark:from-red-400 dark:to-gray-100 bg-clip-text text-transparent">
                Shad
              </span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl text-foreground mb-2">
              <span className="font-medium">I&apos;m a </span>
              <span className="font-bold text-red-600 dark:text-red-400">{currentRole}</span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Crafting exceptional visual experiences through innovative logo design and captivating
              motion graphics, while empowering the next generation through personalized mathematics
              and physics education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>Get In Touch</span>
              </Button>
            </div>

            {/* Social Media Section */}
            <div className="mt-12">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-6">Connect with me</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-md">
                  <a href="https://facebook.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group" aria-label="Facebook">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/facebook.svg" alt="Facebook" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                  <a href="https://instagram.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group" aria-label="Instagram">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/instagram.svg" alt="Instagram" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/" target="_blank" rel="noopener noreferrer" className="group" aria-label="LinkedIn">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/linkedin.svg" alt="LinkedIn" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                  <a href="https://www.behance.net/mobasherhossain143" target="_blank" rel="noopener noreferrer" className="group" aria-label="Behance">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1769FF] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/behance.svg" alt="Behance" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@ShadsVisualGfx" target="_blank" rel="noopener noreferrer" className="group" aria-label="YouTube">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/youtube.svg" alt="YouTube" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                  <a href="https://sites.google.com/view/mhs-shad-portfolio" target="_blank" rel="noopener noreferrer" className="group" aria-label="Personal Website">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4285F4] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Image src="/social/google.svg" alt="Personal Website" width={32} height={32} className="w-8 h-8" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500 via-red-400 to-pink-500 z-0" />
              <Image
                src="/shadphoto.jpg"
                alt="Mehedi Hasan Shad portrait"
                fill
                className="relative z-10 object-cover object-top rounded-3xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating Skill Badges */}
            <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 sm:p-4 animate-bounce z-10">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Logo Design</span>
              </div>
            </div>

            <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 sm:p-4 animate-bounce z-10" style={{ animationDelay: "1s" }}>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Motion Graphics</span>
              </div>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-4 -left-4 sm:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 sm:p-4 animate-bounce z-10" style={{ animationDelay: "2s" }}>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">T</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Tutoring</span>
              </div>
            </div>

            <div className="absolute -bottom-2 sm:-bottom-4 -right-4 sm:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-2 sm:p-4 animate-bounce z-10" style={{ animationDelay: "3s" }}>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">D</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Digital Marketing</span>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Skills Section */}
        <div className="mt-12 w-full max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">My Creative & Technical Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, i) => (
              <AnimatedSkillBar key={skill.name} skill={skill} delay={i * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// AnimatedSkillBar component
function AnimatedSkillBar({ skill, delay }: { skill: { name: string; percent: number }; delay: number }) {
  const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      setTimeout(() => setWidth(skill.percent), delay * 1000);
    }
  }, [inView, skill.percent, delay]);
  return (
    <div ref={inViewRef} className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        <span className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-300">{width}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 dark:from-blue-400 dark:via-cyan-500 dark:to-green-500 transition-all duration-700"
          style={{ width: `${width}%`, minWidth: width > 0 ? 8 : 0 }}
        ></div>
      </div>
    </div>
  );
}