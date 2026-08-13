"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/providers";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        theme === "dark"
          ? "Light mode"
          : "Dark mode"
      }
      className="
        group
        flex h-10 w-10
        items-center justify-center
        rounded-xl

        text-gray-600
        transition-all duration-200

        hover:bg-gray-100
        hover:text-gray-900

        dark:text-gray-400
        dark:hover:bg-gray-800
        dark:hover:text-white

        active:scale-95
      "
    >
      {theme === "dark" ? (
        <Sun
          className="
            h-5 w-5
            transition-transform duration-300
            group-hover:rotate-45
          "
        />
      ) : (
        <Moon
          className="
            h-5 w-5
            transition-transform duration-300
            group-hover:-rotate-12
          "
        />
      )}
    </button>
  );
}