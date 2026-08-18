"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  BookOpen,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Bosh sahifa",
      href: "/",
    },
    {
      name: "Kitoblar",
      href: "/books",
    },
    {
      name: "Kategoriyalar",
      href: "/categories",
    },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-gray-200
        bg-white/90
        backdrop-blur-xl

        dark:border-gray-800
        dark:bg-[#0a0a0a]/90
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2
            text-xl
            font-black
            text-gray-900

            dark:text-white
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-blue-600
              text-white
            "
          >
            <BookOpen size={19} />
          </div>

          <span>
            E<span className="text-blue-600">.</span>BOOKS
          </span>
        </Link>

        {/* DESKTOP MENU */}

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-sm
                font-medium
                text-gray-600
                transition
                hover:text-blue-600

                dark:text-gray-300
                dark:hover:text-blue-400
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT */}

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/search"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-600
              hover:border-blue-500
              hover:text-blue-600

              dark:border-gray-700
              dark:bg-gray-900
              dark:text-gray-300
              dark:hover:border-blue-500
              dark:hover:text-blue-400
            "
          >
            <Search size={18} />
          </Link>

          <ThemeToggle />

          <Link
            href="/subscribe"
            className="
              rounded-xl
              bg-blue-600
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Obuna bo‘lish
          </Link>
        </div>

        {/* MOBILE BUTTON */}

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-gray-200
              bg-white
              text-gray-700

              dark:border-gray-700
              dark:bg-gray-900
              dark:text-white
            "
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}

      {open && (
        <div
          className="
            border-t
            border-gray-200
            bg-white
            px-4
            py-4

            dark:border-gray-800
            dark:bg-[#0a0a0a]
          "
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  text-gray-700
                  hover:bg-gray-100
                  hover:text-blue-600

                  dark:text-gray-300
                  dark:hover:bg-gray-900
                  dark:hover:text-blue-400
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className="
                mt-2
                rounded-xl
                bg-blue-600
                px-4
                py-3
                text-center
                text-sm
                font-bold
                text-white
                hover:bg-blue-700
              "
            >
              Obuna bo‘lish
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}