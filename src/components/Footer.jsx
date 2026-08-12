import Link from "next/link";
import { BookOpen, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "Books", href: "/books" },
    { label: "Categories", href: "/categories" },
    { label: "Favorites", href: "/favorites" },
  ],
  Categories: [
    { label: "Fiction", href: "/books?category=Fiction" },
    { label: "Programming", href: "/books?category=Programming" },
    { label: "Business", href: "/books?category=Business" },
    { label: "Science", href: "/books?category=Science" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/about" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">E.BOOKS</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
              Elektron kitoblar uchun eng yaxshi manzilingiz. 10 000 dan ortiq nomdagi kitoblar to'plamimiz bilan kashf eting, o'qing va rivojlaning.
            </p>
            <div className="flex items-center gap-3">
              {[Twitter, Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
           © 2026 E.BOOKS. Barcha huquqlar himoyalangan.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Hamma joyda o'quvchilar uchun ishtiyoq bilan yaratilgan.
          </p>
        </div>
      </div>
    </footer>
  );
}