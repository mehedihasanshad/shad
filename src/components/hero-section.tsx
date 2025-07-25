"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, MessageCircle, Globe } from "lucide-react";
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
              <Link href="/portfolio">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="group">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span>Get In Touch</span>
                </Button>
              </Link>
            </div>

            {/* Social Media Section */}
            <div className="mt-12">
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-foreground mb-6">Connect with me</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 max-w-md">
                  <a href="https://facebook.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group" aria-label="Facebook">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1877F2] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://instagram.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group" aria-label="Instagram">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323C10.897 16.498 9.746 16.988 8.449 16.988zM15.017 16.988c-1.297 0-2.448-.49-3.323-1.297c-.875-.926-1.365-2.077-1.365-3.374s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.926 1.365 2.077 1.365 3.374s-.49 2.448-1.365 3.323C17.465 16.498 16.314 16.988 15.017 16.988z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/" target="_blank" rel="noopener noreferrer" className="group" aria-label="LinkedIn">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.behance.net/mobasherhossain143" target="_blank" rel="noopener noreferrer" className="group" aria-label="Behance">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1769FF] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.25.24-1.89.24H0V4.51h6.938v-.007zM3.495 8.876h2.563c.62 0 1.11-.89 1.11-.89s.48-.64.48-1.23c0-.75-.19-1.28-.58-1.61-.39-.33-.94-.49-1.65-.49H3.495v4.22zm0 7.176h3.04c.7 0 1.266-.19 1.695-.57.43-.38.65-.98.65-1.8 0-.83-.23-1.41-.69-1.73-.46-.32-1.08-.48-1.86-.48H3.495v4.58zm19.77-8.11h-4.939v-1.28h4.939v1.28zm-1.307 3.626c0-.563-.09-1.02-.27-1.39-.18-.37-.43-.67-.74-.9-.31-.23-.68-.39-1.11-.49-.43-.1-.9-.15-1.41-.15-.51 0-.98.05-1.41.15-.43.1-.8.26-1.11.49-.31.23-.56.53-.74.9-.18.37-.27.827-.27 1.39v4.046c0 .563.09 1.02.27 1.39.18.37.43.67.74.9.31.23.68.39 1.11.49.43.1.9.15 1.41.15.51 0 .98-.05 1.41-.15.43-.1.8-.26 1.11-.49.31-.23.56-.53.74-.9.18-.37.27-.827.27-1.39v-4.046zm-2.405 4.006c0 .563-.227.842-.68.842-.454 0-.681-.279-.681-.842v-3.966c0-.563.227-.842.681-.842.453 0 .68.279.68.842v3.966z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@ShadsVisualGfx" target="_blank" rel="noopener noreferrer" className="group" aria-label="YouTube">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FF0000] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </div>
                  </a>
                  <a href="https://sites.google.com/view/mhs-shad-portfolio" target="_blank" rel="noopener noreferrer" className="group" aria-label="Personal Website">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#4285F4] rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-end justify-center overflow-visible">
              {/* Red background exactly matches image size */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500 via-red-400 to-pink-500 z-0" />
              <div className="absolute left-4 right-4 bottom-0 flex justify-center overflow-visible" style={{ height: '120%' }}>
                <Image
                  src="/shadphoto.jpg"
                  alt="Mehedi Hasan Shad portrait"
                  width={384}
                  height={460}
                  className="object-cover object-center rounded-3xl shadow-2xl"
                  priority
                  style={{ maxHeight: 'none' }}
                />
              </div>
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