"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Heart,
  BookOpen,
  Sun,
  Moon,
  Home,
  Grid3X3,
  Info,
  Languages,
} from "lucide-react";

import { useTheme, useFavorites } from "@/app/providers";
import { useLanguage } from "@/app/LanguageContext";

const navLinks = [
  {
    href: "/",
    key: "home",
    icon: Home,
  },
  {
    href: "/books",
    key: "books",
    icon: BookOpen,
  },
  {
    href: "/categories",
    key: "categories",
    icon: Grid3X3,
  },
  {
    href: "/favorites",
    key: "favorites",
    icon: Heart,
  },
  {
    href: "/about",
    key: "about",
    icon: Info,
  },
];

const languages = [
  {
    code: "uz",
    name: "O'zbekcha",
    flag: "🇺🇿",
  },
  {
    code: "en",
    name: "English",
    flag: "🇬🇧",
  },
  {
    code: "ru",
    name: "Русский",
    flag: "🇷🇺",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { favorites } = useFavorites();
  const { language, changeLanguage, t } = useLanguage();

  const pathname = usePathname();

  const handleLanguageChange = (code) => {
    changeLanguage(code);
    setLanguageOpen(false);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className="
        sticky top-0 z-50
        border-b border-gray-200
        bg-white/80
        backdrop-blur-xl
        dark:border-gray-800
        dark:bg-gray-950/80
      "
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            MAIN NAVBAR
        ========================== */}

        <div className="flex h-16 items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-xl
                bg-gradient-to-br
                from-blue-500 to-indigo-600
                shadow-lg shadow-blue-500/25
                transition-all duration-300
                group-hover:scale-105
                group-hover:shadow-blue-500/40
              "
            >
              <BookOpen className="h-5 w-5 text-white" />
            </div>

            <span
              className="
                bg-gradient-to-r
                from-gray-900 to-gray-600
                bg-clip-text
                text-xl font-bold
                text-transparent
                dark:from-white
                dark:to-gray-300
              "
            >
              E.BOOKS
            </span>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div className="hidden items-center gap-1 md:flex">

            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4" />

                    {t(link.key)}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* =========================
              RIGHT ACTIONS
          ========================== */}

          <div className="flex items-center gap-1">

            {/* Search */}

            <Link
              href="/books"
              aria-label="Search"
              className="
                hidden rounded-lg p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                sm:flex
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-gray-200
              "
            >
              <Search className="h-5 w-5" />
            </Link>

            {/* Language */}

            <div className="relative">

              <button
                type="button"
                onClick={() =>
                  setLanguageOpen((value) => !value)
                }
                className="
                  flex items-center gap-1.5
                  rounded-lg p-2
                  text-gray-600
                  transition-colors
                  hover:bg-gray-100
                  hover:text-gray-900
                  dark:text-gray-400
                  dark:hover:bg-gray-800
                  dark:hover:text-gray-200
                "
                aria-label="Change language"
              >
                <Languages className="h-5 w-5" />

                <span className="hidden text-xs font-bold uppercase sm:block">
                  {language}
                </span>
              </button>

              {/* Language dropdown */}

              {languageOpen && (
                <div
                  className="
                    absolute right-0 mt-2
                    w-48 overflow-hidden
                    rounded-xl
                    border border-gray-200
                    bg-white
                    shadow-xl
                    dark:border-gray-800
                    dark:bg-gray-900
                  "
                >

                  <div className="px-4 py-3 text-xs font-semibold uppercase text-gray-400">
                    Language
                  </div>

                  {languages.map((lang) => {
                    const active = language === lang.code;

                    return (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(lang.code)
                        }
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                          active
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="text-lg">
                          {lang.flag}
                        </span>

                        <span>{lang.name}</span>

                        {active && (
                          <span className="ml-auto font-bold">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="
                rounded-lg p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-gray-200
              "
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Favorites */}

            <Link
              href="/favorites"
              aria-label="Favorites"
              className="
                relative hidden rounded-lg p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                hover:text-gray-900
                sm:flex
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-gray-200
              "
            >
              <Heart className="h-5 w-5" />

              {favorites.length > 0 && (
                <span
                  className="
                    absolute -right-1 -top-1
                    flex h-5 min-w-5
                    items-center justify-center
                    rounded-full
                    bg-red-500
                    px-1
                    text-xs font-bold
                    text-white
                  "
                >
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Mobile menu */}

            <button
              type="button"
              onClick={() =>
                setMobileOpen((value) => !value)
              }
              aria-label="Open menu"
              className="
                rounded-lg p-2
                text-gray-600
                transition-colors
                hover:bg-gray-100
                dark:text-gray-400
                dark:hover:bg-gray-800
                md:hidden
              "
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>

          </div>
        </div>
      </div>

      {/* =========================
          MOBILE DRAWER
      ========================== */}

      {mobileOpen && (
        <div
          className="
            border-t border-gray-200
            bg-white
            dark:border-gray-800
            dark:bg-gray-950
            md:hidden
          "
        >
          <div className="space-y-1 px-4 py-4">

            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                  }`}
                >
                  <Icon className="h-5 w-5" />

                  {t(link.key)}

                  {link.href === "/favorites" &&
                    favorites.length > 0 && (
                      <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
                        {favorites.length}
                      </span>
                    )}
                </Link>
              );
            })}

            {/* Mobile language */}

            <div className="mt-3 border-t border-gray-200 pt-4 dark:border-gray-800">

              <p className="mb-3 px-3 text-xs font-semibold uppercase text-gray-400">
                Language
              </p>

              <div className="grid grid-cols-3 gap-2">

                {languages.map((lang) => {
                  const active = language === lang.code;

                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() =>
                        handleLanguageChange(lang.code)
                      }
                      className={`rounded-xl py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
                      }`}
                    >
                      {lang.flag}{" "}
                      {lang.code.toUpperCase()}
                    </button>
                  );
                })}

              </div>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}