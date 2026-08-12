"use client";


import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export default function BookCard({ book }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      
      {/* Book Image */}
      <Link href={`/books/${book.id}`}>
        <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
  src={book.image}
  alt={book.title}
  className="h-full w-full object-contain"
  onError={(e) => {
    e.currentTarget.style.display = "none";
  }}
/>  

          {/* Favorite */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setFavorite(!favorite);
            }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition hover:scale-110 dark:bg-gray-900/90"
          >
            <Heart
              size={18}
              className={
                favorite
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600 dark:text-gray-300"
              }
            />
          </button>
        </div>
      </Link>

      {/* Content */}
      <Link href={`/books/${book.id}`} className="block p-4">
        <h3 className="line-clamp-1 font-semibold text-gray-900 dark:text-white">
          {book.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {book.author}
        </p>

        <div className="mt-2 inline-block rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">
          {book.category}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm">
            <Star
              size={15}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {book.rating ?? 0}
            </span>

            <span className="text-gray-400">
              ({(book.reviews ?? 0).toLocaleString()})
            </span>
          </div>

          <span className="font-bold text-blue-600 dark:text-blue-400">
            {book.price === 0 ? "Free" : `$${book.price}`}
          </span>
        </div>
      </Link>
    </div>
  );
} 