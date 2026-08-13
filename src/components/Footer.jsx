import Link from "next/link";
import {
  BookOpen,
  Github,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Categories", href: "/categories" },
    { label: "Favorites", href: "/favorites" },
  ],

  Categories: [
    {
      label: "Fiction",
      href: "/books?category=Fiction",
    },
    {
      label: "Programming",
      href: "/books?category=Programming",
    },
    {
      label: "Business",
      href: "/books?category=Business",
    },
    {
      label: "Science",
      href: "/books?category=Science",
    },
  ],

  Company: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/about",
    },
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Terms",
      href: "/terms",
    },
  ],
};

const socialLinks = [
  {
    icon: Twitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: Github,
    href: "#",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:hello@ebooks.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* =========================
            MAIN FOOTER
        ========================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}

          <div className="space-y-5 lg:col-span-2">

            <Link
              href="/"
              className="group flex w-fit items-center gap-3"
            >
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-xl
                  bg-gradient-to-br from-blue-500 to-indigo-600
                  shadow-lg shadow-blue-500/20
                  transition-transform duration-300
                  group-hover:scale-105
                "
              >
                <BookOpen className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-bold text-gray-900 dark:text-white">
                E.BOOKS
              </span>
            </Link>

            <p className="max-w-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Elektron kitoblar uchun eng yaxshi manzilingiz.
              10 000 dan ortiq nomdagi kitoblar to'plamimiz bilan
              kashf eting, o'qing va rivojlaning.
            </p>

            {/* SOCIAL */}

            <div className="flex items-center gap-3">

              {socialLinks.map(
                ({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl
                      bg-gray-100
                      text-gray-500
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-blue-50
                      hover:text-blue-600
                      dark:bg-gray-900
                      dark:text-gray-400
                      dark:hover:bg-blue-900/20
                      dark:hover:text-blue-400
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              )}

            </div>
          </div>

          {/* LINKS */}

          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>

                <h3 className="mb-5 font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>

                <ul className="space-y-3">

                  {links.map((link) => (
                    <li key={link.label}>

                      <Link
                        href={link.href}
                        className="
                          text-sm text-gray-500
                          transition-colors
                          hover:text-blue-600
                          dark:text-gray-400
                          dark:hover:text-blue-400
                        "
                      >
                        {link.label}
                      </Link>

                    </li>
                  ))}

                </ul>

              </div>
            )
          )}
        </div>

        {/* =========================
            BOTTOM
        ========================== */}

        <div
          className="
            mt-12 flex flex-col items-center
            justify-between gap-4
            border-t border-gray-200
            pt-8
            sm:flex-row
            dark:border-gray-800
          "
        >

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2026 E.BOOKS. Barcha huquqlar himoyalangan.
          </p>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right">
            Hamma joyda o'quvchilar uchun ishtiyoq bilan yaratilgan.
          </p>

        </div>

      </div>
    </footer>
  );
}