  "use client";

  import { useState, useEffect, Suspense } from "react";
  import { useSearchParams } from "next/navigation";
  import SearchBar from "@/components/SearchBar";
  import BookGrid from "@/components/BookGrid";
  import { books as allBooks } from "@/data/books";

  function BooksContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "";

    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(initialCategory);
    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");
    const [sort, setSort] = useState("popular");
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
      const saved = localStorage.getItem("favorites");
      if (saved) setFavorites(JSON.parse(saved));
    }, []);

    const toggleFavorite = (id) => {
      const newFavorites = favorites.includes(id)
        ? favorites.filter((f) => f !== id)
        : [...favorites, id];
      setFavorites(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    let filtered = allBooks.filter((book) => {
      const matchesSearch =
        !query ||
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || book.category === category;
      const matchesRating = !rating || book.rating >= parseFloat(rating);
      const matchesPrice =
        !price ||
        (price === "free" ? book.price === 0 : price === "paid" ? book.price > 0 : true);
      return matchesSearch && matchesCategory && matchesRating && matchesPrice;
    });

    if (sort === "newest") {
      filtered.sort((a, b) => new Date(b.published) - new Date(a.published));
    } else if (sort === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "az") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    const categories = [...new Set(allBooks.map((b) => b.category))];

    return (
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">All Books</h1>
          <SearchBar onSearch={setQuery} />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">All Categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="">Any Price</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest Rated</option>
            <option value="az">A-Z</option>
          </select>

          {(category || rating || price || query) && (
            <button
              onClick={() => {
                setCategory("");
                setRating("");
                setPrice("");
                setQuery("");
              }}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Showing {filtered.length} {filtered.length === 1 ? "book" : "books"}
        </p>

        <BookGrid books={filtered} favorites={favorites} onToggleFavorite={toggleFavorite} />
      </div>
    );
  }

  export default function BooksPage() {
    return (
      <Suspense fallback={<div className="py-20 text-center text-gray-500">Loading...</div>}>
        <BooksContent />
      </Suspense>
    );
  }