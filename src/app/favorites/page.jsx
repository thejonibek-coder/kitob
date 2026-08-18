"use client";

import { useState, useEffect } from "react";
import { books } from "@/data/books";
import BookGrid from "@/components/BookGrid";
import EmptyState from "@/components/EmptyState";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  const favoriteBooks = books.filter((book) =>
    favorites.includes(book.id)
  );

  if (!mounted) return null;

  return (
    <div className="max-w-7xl mx-auto section-padding py-12">

      <div className="flex items-center gap-3 mb-8">
        <Heart
          size={28}
          className="text-red-500 fill-red-500"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your Favorites
        </h1>
      </div>
    
      {favoriteBooks.length === 0 ? (
        <EmptyState type="favorites" />
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-6">
            {favoriteBooks.length}{" "}
            {favoriteBooks.length === 1
              ? "book"
              : "books"}{" "}
            saved
          </p>

          <BookGrid
            books={favoriteBooks}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        </>
      )}
    </div>
  );
}