"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-12 h-6 lg:w-14 lg:h-7 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer transition-all duration-300">
        <div className="absolute top-0.5 left-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center">
          <Sun className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-yellow-500" />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-12 h-6 lg:w-14 lg:h-7 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 group"
      style={{
        background: theme === "light"
          ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
          : "linear-gradient(135deg, #1f2937 0%, #111827 100%)"
      }}
    >
      {/* Toggle Track */}
      <div className="absolute inset-0 rounded-full shadow-inner">
        {/* Stars for dark mode */}
        {theme === "dark" && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1.5 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        )}

        {/* Clouds for light mode */}
        {theme === "light" && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <div className="absolute top-1 left-1 w-2 h-1 bg-white/30 rounded-full"></div>
            <div className="absolute top-1.5 right-2 w-1.5 h-0.5 bg-white/30 rounded-full"></div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div
        className={`absolute top-0.5 w-5 h-5 lg:w-6 lg:h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center group-hover:shadow-xl ${
          theme === "light" ? "left-0.5" : "right-0.5"
        }`}
      >
        {theme === "light" ? (
          <Sun className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Moon className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-slate-700 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        theme === "light"
          ? "shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          : "shadow-[0_0_20px_rgba(31,41,55,0.5)]"
      }`}></div>

      <span className="sr-only">Toggle theme</span>
    </div>
  );
}