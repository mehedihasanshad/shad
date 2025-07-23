"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageCircle } from "lucide-react";

const roles = ["Logo Designer", "Motion Graphics Expert", "Academic Tutor", "Visual Storyteller"];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-200 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-gradient-to-br from-blue-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Hero Content */}
          <div className="w-full flex flex-col items-center justify-center text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-600">
              <span className="animate-pulse mr-2">👋</span>
              Hello, I&apos;m available for new projects
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-900">
              <span className="block">Mehedi Hasan</span>
              <span className="block bg-gradient-to-r from-red-500 to-gray-900 bg-clip-text text-transparent">
                Shad
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-gray-700 mb-2">
              <span className="font-medium">I&apos;m a </span>
              <span className="font-bold text-red-600">{currentRole}</span>
            </div>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
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
            <div className="mt-12 space-y-6">
              {/* Find Me Here */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Find me here</h3>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a href="https://facebook.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-[#1877F2] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">f</span>
                    </div>
                  </a>
                  <a href="https://instagram.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#E4405F] via-[#F56040] to-[#FFDC80] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">ig</span>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">in</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* See My Work */}
              <div className="text-center lg:text-left">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">See my work</h3>
                <div className="flex justify-center lg:justify-start space-x-4">
                  <a href="https://behance.net/mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-[#1769FF] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">Be</span>
                    </div>
                  </a>
                  <a href="https://youtube.com/@mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">YT</span>
                    </div>
                  </a>
                  <a href="https://dribbble.com/mhsshad" target="_blank" rel="noopener noreferrer" className="group">
                    <div className="w-12 h-12 bg-[#EA4C89] rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <span className="text-white font-bold text-lg">Dr</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* 3D Box Container */}
              <div className="relative w-full h-full rounded-3xl shadow-2xl bg-gradient-to-br from-red-500 to-gray-500 p-1">
                <div className="w-full h-full rounded-3xl bg-white" />
              </div>

              {/* Photo Container - Head overflowing out of the box */}
              <div className="absolute inset-0 overflow-visible">
                <div className="w-full h-[120%] relative transform -translate-y-16">
                  <Image
                    src="/shadphoto.jpg"
                    alt="Mehedi Hasan Shad"
                    fill
                    className="object-cover object-top rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Skill Badges */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-bounce z-10">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">L</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Logo Design</span>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-4 animate-bounce z-10" style={{ animationDelay: "1s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Motion Graphics</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-bounce z-10" style={{ animationDelay: "2s" }}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700">Tutoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}