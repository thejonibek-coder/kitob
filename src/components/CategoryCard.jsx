"use client";

import Link from "next/link";
import {
  BookOpen,
  Code,
  Briefcase,
  FlaskConical,
  GraduationCap,
  Landmark,
  TrendingUp,
  Monitor,
} from "lucide-react";

const iconMap = {
  Roman: BookOpen,
  Fantastika: BookOpen,
  Biznes: Briefcase,
  "O'zbek adabiyoti": Landmark,
  Klassika: Landmark,
  Rivojlanish: TrendingUp,
  Detektiv: BookOpen,
  Sarguzasht: BookOpen,
  Bolalar: GraduationCap,
  Hikoya: BookOpen,
  Satira: BookOpen,
  Technology: Monitor,
  Science: FlaskConical,
  Education: GraduationCap,
  Programming: Code,
};

export default function CategoryCard({ category }) {
  const Icon = iconMap[category.name] || BookOpen;

  return (
    <Link
      href={`/books?category=${encodeURIComponent(category.name)}`}
      className="
        group relative block overflow-hidden rounded-2xl
        border border-gray-200 bg-white p-6
        transition-all duration-300
        hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl
        dark:border-gray-800 dark:bg-gray-900
        dark:hover:border-gray-700
      "
    >
      {/* Icon */}

      <div
        className="
          mb-5 flex h-14 w-14 items-center justify-center
          rounded-xl bg-gray-100
          transition-all duration-300
          group-hover:bg-gray-900
          dark:bg-gray-800
          dark:group-hover:bg-white
        "
      >
        <Icon
          size={28}
          strokeWidth={2}
          className="
            text-gray-700
            transition-colors duration-300
            group-hover:text-white
            dark:text-gray-300
            dark:group-hover:text-gray-900
          "
        />
      </div>

      {/* Category name */}

      <h2
        className="
          text-xl font-bold
          text-gray-900
          transition-colors
          dark:text-white
        "
      >
        {category.name}
      </h2>

      {/* Description */}

      <p
        className="
          mt-2 line-clamp-2
          text-sm leading-6
          text-gray-500
          dark:text-gray-400
        "
      >
        {category.description}
      </p>

      {/* Bottom */}

      <div className="mt-5 flex items-center justify-between">
        <span
          className="
            text-sm font-medium
            text-gray-500
            transition-colors
            group-hover:text-gray-900
            dark:text-gray-400
            dark:group-hover:text-white
          "
        >
          Kitoblarni ko'rish
        </span>

        <span
          className="
            text-lg
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>

      {/* Hover decoration */}

      <div
        className="
          absolute -right-10 -top-10
          h-24 w-24 rounded-full
          bg-gray-100 opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          dark:bg-gray-800
        "
      />
    </Link>
  );
}