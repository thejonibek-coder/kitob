"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Star,
  Heart,
  BookOpen,
  Calendar,
  FileText,
  Globe,
  Hash,
  ArrowLeft,
} from "lucide-react";

import { getBookById, getRelatedBooks } from "@/data/books";
import BookCard from "@/components/BookCard";

export default function BookDetailPage() {
  const params = useParams();
  const book = getBookById(params.id);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((f) => f !== id)
      : [...favorites, id];

    setFavorites(newFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(newFavorites)
    );
  };

  if (!book) {
    return (
      <div className="max-w-7xl mx-auto section-padding py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Book not found
        </h1>

        <Link
          href="/books"
          className="text-primary-600 hover:underline"
        >
          Back to books
        </Link>
      </div>
    );
  }

  const related = getRelatedBooks(book.id, 4);

  return (
    <div className="max-w-7xl mx-auto section-padding py-12">

      {/* Back */}
      <Link
        href="/books"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Books
      </Link>

      <div className="grid lg:grid-cols-3 gap-12 mb-16">

        {/* Cover */}
        <div className="lg:col-span-1">
          <div className="relative w-full h-[600px]">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:col-span-2">

          {/* Category */}
          <span className="inline-block px-3 py-1 rounded-lg bg-primary-50 text-primary-700 text-sm font-medium mb-4">
            {book.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {book.title}
          </h1>

          {/* Author */}
          <p className="text-lg text-gray-500 mb-4">
            by {book.author}
          </p>

          {/* Rating / Price */}
          <div className="flex items-center gap-4 mb-6">

            <div className="flex items-center gap-1.5">
              <Star
                size={20}
                className="text-amber-400 fill-amber-400"
              />

              <span className="font-semibold text-gray-900 text-lg">
                {book.rating}
              </span>

              <span className="text-gray-500">
                ({(book.reviews ?? 0).toLocaleString()} reviews)
              </span>
            </div>

            {book.price === 0 ? (
              <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">
                Free
              </span>
            ) : (
              <span className="text-2xl font-bold text-gray-900">
                ${book.price}
              </span>
            )}

          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            {book.description}
          </p>

          {/* Book Information */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

            {/* Published */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Calendar
                size={18}
                className="text-gray-400 mb-2"
              />

              <p className="text-xs text-gray-500">
                Published
              </p>

              <p className="font-medium text-gray-900">
                {book.published}
              </p>
            </div>

            {/* Pages */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <FileText
                size={18}
                className="text-gray-400 mb-2"
              />

              <p className="text-xs text-gray-500">
                Pages
              </p>

              <p className="font-medium text-gray-900">
                {book.pages}
              </p>
            </div>

            {/* Language */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Globe
                size={18}
                className="text-gray-400 mb-2"
              />

              <p className="text-xs text-gray-500">
                Language
              </p>

              <p className="font-medium text-gray-900">
                {book.language}
              </p>
            </div>

            {/* ISBN */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <Hash
                size={18}
                className="text-gray-400 mb-2"
              />

              <p className="text-xs text-gray-500">
                ISBN
              </p>

              <p className="font-medium text-gray-900 text-sm">
                {book.isbn}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <Link
              href={`/read/${book.id}`}
              className="btn-primary inline-flex items-center gap-2"
            >
              <BookOpen size={18} />
              Read Now
            </Link>

            <button
              onClick={() => toggleFavorite(book.id)}
              className={`btn-secondary inline-flex items-center gap-2 ${
                favorites.includes(book.id)
                  ? "text-red-600"
                  : ""
              }`}
            >
              <Heart
                size={18}
                fill={
                  favorites.includes(book.id)
                    ? "currentColor"
                    : "none"
                }
              />

              {favorites.includes(book.id)
                ? "In Favorites"
                : "Add to Favorites"}
            </button>

          </div>

        </div>
      </div>

      {/* Related Books */}
      {related.length > 0 && (
        <div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Books
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {related.map((b) => (
              <BookCard
                key={b.id}
                book={b}
                isFavorite={favorites.includes(b.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}

          </div>

        </div>
      )}

    </div>
  );
}