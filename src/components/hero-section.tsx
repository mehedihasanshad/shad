"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, MessageCircle, Download, Play } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { SocialIcon } from 'react-social-icons';

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

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "5+", label: "Years Experience" },
  { number: "100+", label: "Students Tutored" },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Modern Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated Background Elements - Enhanced for Desktop */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-red-200 to-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-gray-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-br from-blue-200 to-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse [animation-delay:4s]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center min-h-screen py-20">
          
          {/* Enhanced Hero Content - Left Side */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            {/* Status Badge */}
            <Badge variant="secondary" className="mx-auto lg:mx-0 px-6 py-3 bg-background/80 backdrop-blur-sm text-muted-foreground border-2 border-red-200 dark:border-red-800 w-fit animate-scale-in">
              <span className="animate-pulse mr-3 text-lg">👋</span>
              <span className="font-medium">Hello, I&apos;m available for new projects</span>
            </Badge>

            {/* Main Heading - Enhanced Typography */}
            <div className="space-y-4 animate-slide-in-up [animation-delay:0.2s]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-foreground">Mehedi Hasan</span>
                <span className="block bg-gradient-to-r from-red-500 via-red-600 to-gray-900 dark:from-red-400 dark:via-red-500 dark:to-gray-100 bg-clip-text text-transparent">
                  Shad
                </span>
              </h1>
              
              {/* Dynamic Role with Enhanced Styling */}
              <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-foreground">
                <span className="font-medium">I&apos;m a </span>
                <span className="font-bold text-red-600 dark:text-red-400 inline-block min-w-0 transition-all duration-500 ease-in-out">
                  {currentRole}
                </span>
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-up [animation-delay:0.4s]">
              Crafting exceptional visual experiences through innovative logo design and captivating
              motion graphics, while empowering the next generation through personalized mathematics
              and physics education.
            </p>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-up [animation-delay:0.6s]">
              <Link href="/portfolio">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white group px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="group px-8 py-4 text-lg font-semibold rounded-xl border-2 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span>Get In Touch</span>
                </Button>
              </Link>
              <Button variant="ghost" size="lg" className="group px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                <span>Resume</span>
              </Button>
            </div>

            {/* Achievement Stats - New Addition */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700 animate-slide-in-up [animation-delay:0.8s]">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className={`text-center lg:text-left animate-float ${
                    index === 0 ? '[animation-delay:0s]' :
                    index === 1 ? '[animation-delay:0.5s]' :
                    index === 2 ? '[animation-delay:1s]' : '[animation-delay:1.5s]'
                  }`}
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-red-600 dark:text-red-400">
                    {achievement.number}
                  </div>
                  <div className="text-sm lg:text-base text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Social Media Section */}
            <div className="pt-8 animate-slide-in-up [animation-delay:1s]">
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-6 text-center lg:text-left">
                Connect with me
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <SocialIcon url="https://facebook.com/mhsshad" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
                <SocialIcon url="https://instagram.com/mhsshad" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
                <SocialIcon url="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
                <SocialIcon url="https://www.behance.net/mobasherhossain143" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
                <SocialIcon url="https://www.youtube.com/@ShadsVisualGfx" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
                <SocialIcon url="https://sites.google.com/view/mhs-shad-portfolio" network="website" target="_blank" style={{ height: 56, width: 56 }} className="hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced Hero Visual - Right Side */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 animate-slide-in-right">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] flex items-end justify-center animate-float">
              {/* Enhanced Background with Multiple Layers */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500 via-red-400 to-pink-500 shadow-2xl" />
              <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-red-400 via-red-300 to-pink-400 opacity-80" />
              
              {/* Main Image Container */}
              <div className="absolute left-4 right-4 bottom-0 flex justify-center overflow-visible h-[120%]">
                <Image
                  src="/shadphoto.jpg"
                  alt="Mehedi Hasan Shad portrait"
                  width={500}
                  height={600}
                  className="object-cover object-center rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Enhanced Floating Skill Badges */}
              <div className="absolute -top-6 -left-6 lg:-top-8 lg:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-bounce z-10 border-2 border-red-100 dark:border-red-900">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">L</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Logo Design</span>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-bounce z-10 border-2 border-red-100 dark:border-red-900 [animation-delay:1s]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Motion Graphics</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 lg:-bottom-6 lg:-left-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-bounce z-10 border-2 border-red-100 dark:border-red-900 [animation-delay:2s]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">T</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Tutoring</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-6 lg:-bottom-6 lg:-right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 animate-bounce z-10 border-2 border-red-100 dark:border-red-900 [animation-delay:3s]">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">D</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 hidden sm:block">Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Skills Section */}
        <div className="mt-20 w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Creative & Technical Skills
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proficient in industry-leading tools and technologies for creating exceptional visual experiences
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {skills.map((skill, i) => (
              <AnimatedSkillBar key={skill.name} skill={skill} delay={i * 0.1} />
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
    <div ref={inViewRef} className="w-full group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-base lg:text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-sm lg:text-base font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full min-w-[60px] text-center">
          {width}%
        </span>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-4 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-pink-500 dark:from-red-400 dark:via-red-500 dark:to-pink-400 transition-all duration-1000 ease-out shadow-md relative overflow-hidden`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}