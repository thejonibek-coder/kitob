"use client";

import Hero from "@/components/Hero";
import BookGrid from "@/components/BookGrid";
import CategoryCard from "@/components/CategoryCard";
import FeaturedBook from "@/components/FeaturedBook";
import TodoList from "@/components/TodoList";
import { books } from "@/data/books";

import {
  BookOpen,
  Smartphone,
  Search,
  Heart,
  Gift,
  Mail,
  ArrowRight
} from "lucide-react";

import Link from "next/link";

const categories = [
  "Fiction",
  "Technology",
  "Business",
  "Science",
  "Education",
  "History",
  "Self Development",
  "Programming"
];

const features = [
  {
    icon: BookOpen,
    title: "Thousands of Books",
    description: "Access over 10,000 titles across every genre imaginable.",
  },
  {
    icon: Smartphone,
    title: "Read Anywhere",
    description: "Your library syncs across all your devices instantly.",
  },
  {
    icon: Search,
    title: "Easy Search",
    description: "Find exactly what you're looking for in seconds.",
  },
  {
    icon: Heart,
    title: "Save Favorites",
    description: "Build your personal collection of must-read books.",
  },
  {
    icon: Gift,
    title: "Free Books",
    description: "Enjoy hundreds of titles completely free of charge.",
  },
];

export default function Home() {
  const popularBooks = books.filter((b) => b.popular).slice(0, 8);
  const featuredBook = books.find((b) => b.featured) || books[0];

  const categoryCounts = categories.map((category) => ({
    name: category,
    count: books.filter(
      (book) => book.category === category
    ).length,
  }));

  return (
    <div>
      <Hero />

      {/* Popular Books */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Popular Books
              </h2>

              <p className="mt-2 text-gray-500">
                Most loved by our readers
              </p>
            </div>

            <Link
              href="/books"
              className="hidden sm:inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <BookGrid books={popularBooks} />

        </div>
      </section>

      {/* Reading Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              📊 E.BOOKS Statistics
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Bizning kutubxonamiz
            </h2>

            <p className="mt-3 text-gray-500">
              Har kuni minglab kitobxonlar E.BOOKS'dan foydalanishadi
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Books */}
            <div className="group p-7 rounded-3xl bg-blue-50 border border-blue-100 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-4xl mb-5">📚</div>

              <div className="text-3xl font-bold text-gray-900">
                {books.length}+
              </div>

              <p className="mt-2 text-gray-500">
                Mavjud kitoblar
              </p>
            </div>

            {/* Readers */}
            <div className="group p-7 rounded-3xl bg-purple-50 border border-purple-100 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-4xl mb-5">👥</div>

              <div className="text-3xl font-bold text-gray-900">
                1,200+
              </div>

              <p className="mt-2 text-gray-500">
                Faol kitobxonlar
              </p>
            </div>

            {/* Rating */}
            <div className="group p-7 rounded-3xl bg-yellow-50 border border-yellow-100 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-4xl mb-5">⭐</div>

              <div className="text-3xl font-bold text-gray-900">
                4.8/5
              </div>

              <p className="mt-2 text-gray-500">
                O‘rtacha reyting
              </p>
            </div>

            {/* New Books */}
            <div className="group p-7 rounded-3xl bg-green-50 border border-green-100 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="text-4xl mb-5">🆕</div>

              <div className="text-3xl font-bold text-gray-900">
                10+
              </div>

              <p className="mt-2 text-gray-500">
                Yangi kitoblar
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Book */}
      <FeaturedBook book={featuredBook} />

      {/* Why E.BOOKS */}
      <section className="py-16 lg:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-900">
              Nima uchun E.BOOKS?
            </h2>

            <p className="mt-2 text-gray-500">
              Sizga kerakli barcha narsa bir platformada
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Todo List / Fikrlar */}
      <TodoList />

      {/* Newsletter */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 lg:p-16 text-center">

            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

            <div className="relative space-y-6 max-w-2xl mx-auto">

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Loopda Qolish
              </h2>

              <p className="text-blue-100 text-lg">
                Bizning xabarlar pochtamizga obuna bo'ling va eng so'nggi
                kitob chiqaruvlar, o'qish tavsiyalari, va eksklyuziv
                takliflar xabarlaringizga yetkaziladi.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                  e.target.reset();
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >

                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 backdrop-blur-sm"
                />

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Obuna bo'ling
                </button>

              </form>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}