"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, Star, ArrowRight } from "lucide-react";

export default function FeaturedBook({ book }) {
  if (!book) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="relative min-h-[460px] overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-2xl">

          {/* Background effects */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(37,99,235,0.25),transparent_35%)]" />

          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

          {/* Content grid */}

          <div className="relative grid min-h-[460px] grid-cols-1 lg:grid-cols-2">

            {/* =====================
                BOOK IMAGE
            ====================== */}

            <div className="relative flex items-center justify-center p-8 sm:p-10 lg:p-14">

              <div className="group relative">

                {/* Glow */}

                <div className="absolute inset-0 scale-90 rounded-3xl bg-blue-600/20 blur-3xl transition-transform duration-500 group-hover:scale-110" />

                {/* Book */}

                <div className="relative h-[300px] w-[205px] overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 sm:h-[360px] sm:w-[250px]">

                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 205px, 250px"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                </div>
              </div>
            </div>

            {/* =====================
                CONTENT
            ====================== */}

            <div className="relative flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-12">

              {/* Badge */}

              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
                <span>⭐</span>
                Featured Book of the Week
              </div>

              {/* Title */}

              <h2 className="mb-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                {book.title}
              </h2>

              {/* Author */}

              <p className="mb-6 text-lg text-gray-300">
                by{" "}
                <span className="font-medium text-white">
                  {book.author}
                </span>
              </p>

              {/* Description */}

              <p className="mb-7 max-w-xl leading-7 text-gray-400">
                {book.description}
              </p>

              {/* Rating */}

              <div className="mb-8 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1.5">
                  <Star
                    size={21}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-bold text-white">
                    {book.rating ?? 0}
                  </span>
                </div>

                <span className="text-gray-500">•</span>

                <span className="text-gray-400">
                  {(book.reviews ?? 0).toLocaleString()} reviews
                </span>

                {book.category && (
                  <>
                    <span className="text-gray-500">•</span>

                    <span className="rounded-full border border-gray-700 bg-gray-800/80 px-4 py-1.5 text-sm text-gray-200">
                      {book.category}
                    </span>
                  </>
                )}
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-3">

                {/* Read */}

                <Link
                  href={`/read/${book.id}`}
                  className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  <BookOpen size={20} />

                  Read Now

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                {/* Favorite */}

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-800/80 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-600 hover:bg-gray-700"
                >
                  <Heart size={20} />

                  Add to Favorites
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}