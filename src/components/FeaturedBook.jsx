"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, Star } from "lucide-react";

export default function FeaturedBook({ book }) {
  if (!book) return null;

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 min-h-[460px]">
          
          {/* Background */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,#2563eb,transparent_35%)]" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[460px]">
            
            {/* BOOK IMAGE */}
            <div className="relative flex items-center justify-center p-10 lg:p-14">
              <div className="relative w-[220px] h-[320px] sm:w-[250px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="relative flex flex-col justify-center px-8 py-12 lg:px-12">
              
              {/* Badge */}
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-600/20 border border-blue-400/20 px-4 py-2 text-sm text-blue-300 mb-6">
                ⭐ Featured Book of the Week
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
                {book.title}
              </h2>

              {/* Author */}
              <p className="text-lg text-gray-300 mb-6">
                by {book.author}
              </p>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed max-w-xl mb-7">
                {book.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1">
                  <Star
                    size={21}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-bold text-white">
                    {book.rating ?? 0}
                  </span>
                </div>

                <span className="text-gray-400">
                  ({(book.reviews ?? 0).toLocaleString()} reviews)
                </span>

                <span className="rounded-full bg-gray-700 px-4 py-1.5 text-sm text-gray-200">
                  {book.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                
                <Link
                  href={`/read/${book.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white hover:bg-blue-700 transition-all hover:-translate-y-0.5"
                >
                  <BookOpen size={20} />
                  Read Now
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-700 px-7 py-4 font-semibold text-white hover:bg-gray-600 transition-all hover:-translate-y-0.5"
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