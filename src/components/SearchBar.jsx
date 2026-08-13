"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  onSearch = () => {},
  placeholder = "Search books...",
}) {
  const [query, setQuery] = useState("");

  const handleChange = (value) => {
    setQuery(value);
    onSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-xl"
    >
      <div className="relative">

        {/* Search icon */}

        <Search
          className="
            absolute left-4 top-1/2
            h-5 w-5
            -translate-y-1/2
            text-gray-400
          "
        />

        {/* Input */}

        <input
          type="search"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="
            w-full
            rounded-xl
            border border-gray-200
            bg-white
            py-3 pl-12 pr-11
            text-gray-900
            placeholder:text-gray-400
            outline-none
            transition-all duration-200

            hover:border-gray-300

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20

            dark:border-gray-800
            dark:bg-gray-900
            dark:text-white
            dark:placeholder:text-gray-500
            dark:hover:border-gray-700
          "
        />

        {/* Clear button */}

        {query && (
          <button
            type="button"
            onClick={clearSearch}
            aria-label="Clear search"
            className="
              absolute right-3 top-1/2
              flex h-7 w-7
              -translate-y-1/2
              items-center justify-center
              rounded-lg
              text-gray-400
              transition-colors

              hover:bg-gray-100
              hover:text-gray-700

              dark:hover:bg-gray-800
              dark:hover:text-gray-200
            "
          >
            <X className="h-4 w-4" />
          </button>
        )}

      </div>
    </form>
  );
}