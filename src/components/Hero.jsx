"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, Layers, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Ebook Platform</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              O'qing.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                O'rganing.
              </span>{" "}
              O'sing.
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              Har bir janrdagi minglab elektron kitoblarni kashf eting. Istalgan joyda, istalgan vaqtda o'qing. Shaxsiy kutubxonangiz bir marta bosish masofasida.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                <BookOpen className="w-5 h-5" />
                Kitoblarni o'rganing
              </Link>
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold transition-all"
              >
                O'qishni boshlang
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              {[
                { icon: BookOpen, value: "10,000+", label: "Books" },
                { icon: Users, value: "5,000+", label: "Readers" },
                { icon: Layers, value: "50+", label: "Categories" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-gray-200 dark:border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop"
                alt="Ebook library"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Sizning Keyingi Ajoyib O'qish</div>
                      <div className="text-white/70 text-sm">Hozir bizning kutubxonamizda mavjud</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}