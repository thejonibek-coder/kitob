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
  "Rivojlanish": TrendingUp,
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
      className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-white">
        <Icon
          size={28}
          className="text-gray-700 group-hover:text-white dark:text-gray-300 dark:group-hover:text-gray-900"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        {category.name}
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
        {category.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Kitoblarni ko'rish
        </span>

        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

