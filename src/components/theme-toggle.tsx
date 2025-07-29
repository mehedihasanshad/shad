"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800 h-14 w-14 lg:h-16 lg:w-16">
        <Sun className="h-4 w-4 lg:h-5 lg:w-5" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 h-14 w-14 lg:h-16 lg:w-16"
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4 lg:h-5 lg:w-5" />
      ) : (
        <Sun className="h-4 w-4 lg:h-5 lg:w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}