"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Star } from "lucide-react";

export default function BookCard({ book }) {
  if (!book) return null;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-300
        hover:shadow-lg

        dark:border-gray-800
        dark:bg-gray-900
        dark:shadow-none
        dark:hover:border-blue-700
        dark:hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
      "
    >
      {/* KITOB RASMI */}

      <Link href={`/books/${book.id}`}>
        <div
          className="
            relative
            h-72
            w-full
            overflow-hidden
            bg-gray-100

            dark:bg-gray-800
          "
        >
          {book.image ? (
            <Image
              src={book.image}
              alt={book.title || "Kitob"}
              fill
              className="
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 50vw,
                25vw
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-gray-100
                text-gray-400

                dark:bg-gray-800
                dark:text-gray-600
              "
            >
              <BookOpen size={50} />
            </div>
          )}

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/50
              via-transparent
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* KATEGORIYA */}

          {book.category && (
            <div
              className="
                absolute
                left-3
                top-3
                rounded-lg
                bg-white/90
                px-3
                py-1
                text-xs
                font-semibold
                text-gray-800
                shadow-sm
                backdrop-blur

                dark:bg-gray-900/90
                dark:text-gray-200
              "
            >
              {book.category}
            </div>
          )}
        </div>
      </Link>

      {/* MA'LUMOT */}

      <div className="p-5">
        {/* TITLE */}

        <Link href={`/books/${book.id}`}>
          <h2
            className="
              line-clamp-2
              text-lg
              font-bold
              text-gray-900
              transition-colors
              hover:text-blue-600

              dark:text-white
              dark:hover:text-blue-400
            "
          >
            {book.title || "Nomsiz kitob"}
          </h2>
        </Link>

        {/* AUTHOR */}

        {book.author && (
          <p
            className="
              mt-2
              text-sm
              text-gray-500

              dark:text-gray-400
            "
          >
            {book.author}
          </p>
        )}

        {/* RATING */}

        {book.rating && (
          <div className="mt-3 flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span
              className="
                text-sm
                font-semibold
                text-gray-700

                dark:text-gray-300
              "
            >
              {book.rating}
            </span>
          </div>
        )}

        {/* DESCRIPTION */}

        {book.description && (
          <p
            className="
              mt-3
              line-clamp-2
              text-sm
              leading-6
              text-gray-600

              dark:text-gray-400
            "
          >
            {book.description}
          </p>
        )}

        {/* BUTTON */}

        <Link
          href={`/books/${book.id}`}
          className="
            mt-5
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300

            hover:bg-blue-700
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          <BookOpen size={17} />

          O‘qishni boshlash
        </Link>
      </div>
    </article>
  );
} 