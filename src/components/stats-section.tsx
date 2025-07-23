"use client";

import { useState, useEffect, useRef } from "react";

const finalStats = {
  projects: 150,
  students: 200,
  experience: 5,
  satisfaction: 98,
};

export function StatsSection() {
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    students: 0,
    experience: 0,
    satisfaction: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedStats({
        projects: Math.floor(finalStats.projects * easeOut),
        students: Math.floor(finalStats.students * easeOut),
        experience: Math.floor(finalStats.experience * easeOut),
        satisfaction: Math.floor(finalStats.satisfaction * easeOut),
      });

      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              {animatedStats.projects}+
            </div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gray-600 mb-2">
              {animatedStats.students}+
            </div>
            <div className="text-gray-600 font-medium">Students Taught</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {animatedStats.experience}+
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
              {animatedStats.satisfaction}%
            </div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}