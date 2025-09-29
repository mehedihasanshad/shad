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
  { number: "150+", label: "Projects Completed" },
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setCurrentRole(roles[(roleIndex + 1) % roles.length]);
    }, 4000); // 4 seconds between role changes

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-12 2xl:gap-16 items-center justify-center min-h-[85vh] py-8 lg:py-12">

          {/* Enhanced Hero Content - Left Side - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4 lg:space-y-6 text-center lg:text-left order-2 lg:order-1 animate-slide-in-left">
            {/* Status Badge - Enhanced interactive design */}
            <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 backdrop-blur-sm border-2 border-green-200 dark:border-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
              <span className="relative flex items-center">
                <span className="animate-pulse mr-2 lg:mr-3 text-sm lg:text-lg group-hover:scale-110 transition-transform duration-300">👋</span>
                <span className="relative">
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="font-medium text-xs lg:text-base text-green-700 dark:text-green-300 group-hover:text-green-800 dark:group-hover:text-green-200 transition-colors duration-300">
                    Hello, I&apos;m available for new projects
                  </span>
                </span>
              </span>
            </Badge>

            {/* Main Heading - Desktop: single line, Mobile: stacked */}
            <div className="space-y-2 lg:space-y-4 animate-slide-in-up [animation-delay:0.2s]">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[0.9] tracking-tight">
                {/* Mobile: Stacked layout */}
                <span className="block lg:hidden">
                  <span className="block text-foreground">
                    <AnimatedName text="Mehedi Hasan" delay={0} />
                  </span>
                  <span className="block">
                    <AnimatedName 
                      text="Shad" 
                      delay={600} 
                      className="text-red-600 dark:text-red-400 font-bold text-shadow-sm" 
                    />
                  </span>
                </span>
                {/* Desktop: Single line */}
                <span className="hidden lg:block text-foreground">
                  <AnimatedName text="Mehedi Hasan" delay={0} />{" "}
                  <AnimatedName 
                    text="Shad" 
                    delay={600} 
                    className="text-red-600 dark:text-red-400 font-bold text-shadow-sm" 
                  />
                </span>
              </h1>
              
              {/* Dynamic Role with Enhanced Styling and Typing Animation */}
              <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-foreground">
                <span className="font-medium">I&apos;m {currentRole.startsWith('Academic') ? 'an' : 'a'} </span>
                <span className="font-bold text-red-600 dark:text-red-400 inline-block min-w-0">
                  <TypingAnimation text={currentRole} key={currentRole} />
                </span>
              </div>
            </div>

            {/* Enhanced Description - More compact */}
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-4xl mx-auto lg:mx-0 leading-relaxed animate-slide-in-up [animation-delay:0.4s]">
              Crafting exceptional visual experiences through innovative logo design and captivating
              motion graphics, while empowering the next generation through personalized mathematics
              and physics education.
            </p>
          </div>

          {/* Enhanced Hero Visual - Center Column - Takes 1 column - Mobile: Order 1 */}
          <div className="lg:col-span-1 relative flex justify-center items-center order-1 lg:order-2 animate-slide-in-up w-full">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] flex items-center justify-center animate-float mx-auto lg:mx-0">
              {/* Enhanced Background matching black photo background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-80" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 opacity-60" />

              {/* Subtle Golden Ring Effect for elegance */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 opacity-40 blur-2xl animate-pulse" />

              {/* Main Image Container - Centered and enhanced */}
              <div className="absolute inset-6 flex justify-center items-center overflow-hidden rounded-full">
                <div className="relative w-full h-full">
                  <Image
                    src="/shadphoto.jpg"
                    alt="Mehedi Hasan Shad - Professional Portrait"
                    width={450}
                    height={450}
                    className="w-full h-full object-cover rounded-full shadow-2xl hover:scale-110 transition-all duration-700 hero-image-container border-4 border-white/20"
                    style={{
                      filter: 'saturate(1.1) contrast(1.15) brightness(1.1)',
                      mixBlendMode: 'normal',
                      objectPosition: 'center center'
                    }}
                    priority
                  />
                  {/* Enhanced overlay for black background harmony */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/5 via-transparent to-yellow-500/5 mix-blend-overlay pointer-events-none" />
                  {/* Enhanced inner glow for depth */}
                  <div className="absolute inset-0 rounded-full shadow-inner shadow-black/30" />
                </div>
              </div>

              {/* Enhanced Floating Skill Badges - Updated to match new color scheme */}
              <div className="absolute -top-2 -left-2 lg:-top-3 lg:-left-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-1.5 lg:p-2 animate-bounce z-10 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">🎨</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:block xl:hidden">Brand</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden xl:block">Brand Identity</span>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-1.5 lg:p-2 animate-bounce z-10 border border-slate-200 dark:border-slate-600 [animation-delay:1s]">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-md flex items-center justify-center shadow-lg">
                    <Play className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:block xl:hidden">Motion</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden xl:block">Motion Graphics</span>
                </div>
              </div>

              <div className="absolute bottom-1 -left-2 lg:bottom-0 lg:-left-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-1.5 lg:p-2 animate-bounce z-10 border border-slate-200 dark:border-slate-600 [animation-delay:2s]">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-md flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">📚</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:block xl:hidden">Tutor</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden xl:block">Academic Tutor</span>
                </div>
              </div>

              <div className="absolute bottom-1 -right-2 lg:bottom-0 lg:-right-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-1.5 lg:p-2 animate-bounce z-10 border border-slate-200 dark:border-slate-600 [animation-delay:3s]">
                <div className="flex items-center space-x-1">
                  <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-md flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">📱</span>
                  </div>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden sm:block xl:hidden">Digital</span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 hidden xl:block">Digital Marketing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Content - Right Side - Takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-4 lg:space-y-6 text-center lg:text-right order-3 lg:order-3 animate-slide-in-right">

            {/* Project Achievement Highlight */}
            <div className="mb-4 lg:mb-6">
              <div className="text-center lg:text-right p-4 lg:p-6 bg-gradient-to-br from-amber-50/80 to-yellow-50/80 dark:from-amber-900/20 dark:to-yellow-900/20 backdrop-blur-sm rounded-2xl border border-amber-200/50 dark:border-amber-700/30 shadow-lg animate-float">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm lg:text-base text-amber-700 dark:text-amber-300 font-semibold mt-1">
                  Projects Completed
                </div>
                <div className="text-xs text-amber-600/80 dark:text-amber-400/80 mt-1">
                  Successfully delivered
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-right">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-3">
                Ready to bring your vision to life?
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground mb-4 max-w-md mx-auto lg:mx-0 lg:ml-auto">
                Let&apos;s collaborate on your next project and create something extraordinary together.
              </p>
            </div>
          </div>

          {/* Bottom section for mobile, full width for desktop - Order 4 */}
          <div className="lg:col-span-5 flex flex-col space-y-4 lg:space-y-6 text-center order-4 lg:order-4 animate-slide-in-up [animation-delay:0.6s]">
            
            {/* Action Buttons and Social Media Row */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-6 mb-4 lg:mb-6">
              
              {/* Action Buttons - Mobile: 2+1 layout, Desktop: horizontal */}
              <div className="flex flex-col gap-2 lg:gap-0">
                {/* Mobile: First row with 2 buttons side by side */}
                <div className="flex gap-2 justify-center lg:justify-start lg:hidden">
                  <Link href="/portfolio" className="flex-1">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white group px-4 py-2 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                      <span>View My Work</span>
                      <ArrowRight className="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" size="sm" className="group px-4 py-2 text-sm font-semibold rounded-lg border-2 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-300 hover:scale-105 w-full">
                      <MessageCircle className="w-3 h-3 mr-1.5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Get In Touch</span>
                    </Button>
                  </Link>
                </div>
                
                {/* Mobile: Second row with Resume button centered */}
                <div className="flex justify-center lg:hidden">
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" className="group px-4 py-2 text-sm font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                      <Download className="w-3 h-3 mr-1.5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Resume</span>
                    </Button>
                  </a>
                </div>
                
                {/* Desktop: All three buttons in one line */}
                <div className="hidden lg:flex gap-3">
                  <Link href="/portfolio">
                    <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white group px-6 py-3 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <span>View My Work</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="sm" className="group px-6 py-3 text-base font-semibold rounded-lg border-2 hover:bg-red-50 dark:hover:bg-red-950 transition-all duration-300 hover:scale-105">
                      <MessageCircle className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Get In Touch</span>
                    </Button>
                  </Link>
                  <a
                    href="https://drive.google.com/uc?export=download&id=1ilGXR9sLXUQNHbOGN_I4rGCfrwgjlLP-"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" className="group px-6 py-3 text-base font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
                      <Download className="w-4 h-4 mr-1.5 group-hover:scale-110 transition-transform duration-200" />
                      <span>Resume</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Social Media Section - Desktop: same row, Mobile: separate */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 mt-4 lg:mt-0">
                <h3 className="text-sm lg:text-base font-semibold text-foreground text-center lg:text-left">
                  Connect with me
                </h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  <SocialIcon url="https://facebook.com/mhsshad" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                  <SocialIcon url="https://instagram.com/mhsshad" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                  <SocialIcon url="https://www.linkedin.com/in/mehedi-hasan-shad-b3463b254/" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                  <SocialIcon url="https://www.behance.net/mobasherhossain143" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                  <SocialIcon url="https://www.youtube.com/@ShadsVisualGfx" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                  <SocialIcon url="https://sites.google.com/view/mhs-shad-portfolio" target="_blank" style={{ height: 40, width: 40 }} className="hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Professional Skills Preview */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 lg:pt-6">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-4">
                Professional Skills & Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
                {skills.slice(0, 6).map((skill, index) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 dark:border-blue-700/30 rounded-full text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-300 animate-fade-in-up`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Animated Skills Section - Horizontal and compact */}
        <div className="mt-6 lg:mt-8 w-full mx-auto pb-8">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              My Creative & Technical Skills
            </h3>
            <p className="text-sm lg:text-base text-muted-foreground max-w-3xl mx-auto">
              Proficient in industry-leading tools and technologies for creating exceptional visual experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
            {skills.map((skill, i) => (
              <AnimatedSkillBar key={skill.name} skill={skill} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// TypingAnimation component for cool typing effect with cursor
function TypingAnimation({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset animation
    setDisplayedText('');
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // 80ms delay between each character

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <span className="relative">
      {displayedText}
      <span className={`typing-cursor ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}

// AnimatedName component for letter-by-letter animation
function AnimatedName({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    // Reset animation on every render/refresh
    setVisibleLetters(0);
    
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleLetters((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50); // Faster animation - 50ms delay between each letter (was 100ms)

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]); // Re-run when text or delay changes

  return (
    <span className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`inline-block letter-animate transform transition-all duration-300 ${
            index < visibleLetters ? 'letter-visible opacity-100 translate-y-0' : 'letter-hidden opacity-0 translate-y-2'
          }`}
          style={{ '--letter-delay': `${index * 25}ms` } as React.CSSProperties}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
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
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs lg:text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-300 truncate">
          {skill.name}
        </span>
        <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded-full min-w-[45px] text-center ml-2">
          {width}%
        </span>
      </div>
      <div className="w-full h-2 lg:h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-2 lg:h-3 rounded-full bg-gradient-to-r from-red-500 via-red-400 to-pink-500 dark:from-red-400 dark:via-red-500 dark:to-pink-400 skill-bar-progress shadow-md relative overflow-hidden`}
          style={{ '--skill-width': `${width}%` } as React.CSSProperties}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}