"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Home, BookOpen, FolderOpen, Mail, Shield, FileText } from "lucide-react";

const menuItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tuition", label: "Tuition", icon: BookOpen },
  { href: "/portfolio", label: "Portfolio", icon: FolderOpen },
  { href: "/resources", label: "Resources", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Name */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              {/* Logo Image - Using actual logo from public folder */}
              <div className="relative w-10 h-10 lg:w-12 lg:h-12">
                <Image
                  src="/logo/logo.png"
                  alt="Shad Logo"
                  fill
                  className="object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-red-500 to-gray-900 bg-clip-text text-transparent">
                  Mehedi Hasan Shad
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Designer & Educator</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-foreground hover:text-red-600 transition-colors duration-300 font-medium group ${
                    pathname === item.href ? "text-red-600" : ""
                  }`}
                >
                  <Icon className="inline-block w-4 h-4 mr-2" />
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-gray-900 transform transition-transform duration-300 ${
                      pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA Button, Theme Toggle, Admin & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Link href="/contact" className="hidden lg:block">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Started
              </Button>
            </Link>
            <ThemeToggle />
            <Link href="/admin">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100 dark:hover:bg-gray-800"
                title="Admin Login"
              >
                <Shield className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 text-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-200 font-medium ${
                      pathname === item.href ? "text-red-600 bg-red-50 dark:bg-red-950/20" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-border space-y-2">
                <Link 
                  href="/admin" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center px-4 py-3 text-foreground hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-200 font-medium"
                >
                  <Shield className="w-5 h-5 mr-3" />
                  Admin Login
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}