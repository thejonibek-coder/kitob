"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function SearchBar() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Email kiriting!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Obuna bo'ldingiz!");
        setEmail("");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <Mail
          className="
            absolute left-4 top-1/2
            h-5 w-5
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email manzilingiz"
          disabled={loading}
          className="
            h-14 w-full
            rounded-xl
            border border-gray-200
            bg-white
            pl-12 pr-4
            text-gray-900
            outline-none
            transition

            hover:border-gray-300
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20

            dark:border-gray-800
            dark:bg-gray-900
            dark:text-white
            dark:placeholder:text-gray-500
          "
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          flex h-14
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-7
          font-semibold
          text-white
          transition-all

          hover:bg-blue-700
          active:scale-95

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? (
          "Yuborilmoqda..."
        ) : (
          <>
            Obuna bo'lish
            <Send className="h-5 w-5" />
          </>
        )}
      </button>

      {message && (
        <p className="absolute mt-16 text-sm">
          {message}
        </p>
      )}
    </form>
  );
}