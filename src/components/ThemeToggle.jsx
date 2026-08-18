"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Mavzuni almashtirish"
      className="
        relative flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-gray-200
        bg-white
        text-gray-700
        transition-all duration-300
        hover:scale-105
        dark:border-gray-700
        dark:bg-gray-900
        dark:text-yellow-400
      "
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}