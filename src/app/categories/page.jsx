"use client";

import Link from "next/link";
import { categories } from "@/data/books";
import CategoryCard from "@/components/CategoryCard";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Kategoriyalar
          </h1>

          <p className="mt-3 text-slate-600">
            O'zingizga yoqqan kategoriya orqali kitoblarni toping
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
            >
              <CategoryCard category={cat} />
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}