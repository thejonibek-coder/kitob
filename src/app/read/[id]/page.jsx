
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Type,
  Sun,
  Moon,
  Maximize,
  Minimize,
  ArrowLeft,
  BookOpen,
} from "lucide-react";

import { getBookById } from "@/data/books";

export default function ReaderPage() {
  const params = useParams();

  const [book, setBook] = useState(null);
  const [chapter, setChapter] = useState(0);
  const [fontSize, setFontSize] = useState(18);
  const [readerTheme, setReaderTheme] = useState("light");
  const [fullscreen, setFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);

  /*
    Kitobni ID orqali topamiz
  */
  useEffect(() => {
    if (!params?.id) return;

    const foundBook = getBookById(params.id);

    setBook(foundBook || null);
  }, [params?.id]);

  /*
    Saqlangan o'qish progressini yuklash
  */
  useEffect(() => {
    if (!params?.id) return;

    try {
      const saved = localStorage.getItem(
        `progress-${params.id}`
      );

      if (saved) {
        const data = JSON.parse(saved);

        setChapter(
          typeof data.chapter === "number"
            ? data.chapter
            : 0
        );

        setProgress(
          typeof data.progress === "number"
            ? data.progress
            : 0
        );
      }
    } catch (error) {
      console.error(
        "Progressni yuklashda xatolik:",
        error
      );
    }
  }, [params?.id]);

  /*
    Progressni localStorage'ga saqlash
  */
  useEffect(() => {
    if (!params?.id) return;

    try {
      localStorage.setItem(
        `progress-${params.id}`,
        JSON.stringify({
          chapter,
          progress,
        })
      );
    } catch (error) {
      console.error(
        "Progressni saqlashda xatolik:",
        error
      );
    }
  }, [chapter, progress, params?.id]);

  /*
    Sahifa scroll progressini hisoblash
  */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight;

      const windowHeight =
        window.innerHeight;

      const scrollableHeight =
        documentHeight - windowHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        return;
      }

      const scrollPercent =
        (scrollTop / scrollableHeight) * 100;

      setProgress(
        Math.min(100, Math.max(0, scrollPercent))
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /*
    Fullscreen
  */
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setFullscreen(true);
      } else {
        await document.exitFullscreen();
        setFullscreen(false);
      }
    } catch (error) {
      console.error(
        "Fullscreen xatosi:",
        error
      );
    }
  };

  /*
    Kitob topilmagan bo'lsa
  */
  if (book === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <BookOpen
              size={36}
              className="text-gray-400"
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Book not found
          </h1>

          <p className="text-gray-500 mb-6">
            Ushbu kitob topilmadi.
          </p>

          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-white transition hover:bg-gray-800"
          >
            <ArrowLeft size={18} />
            Back to books
          </Link>
        </div>
      </div>
    );
  }

  /*
    Agar chapters mavjud bo'lmasa,
    vaqtinchalik bitta chapter ishlatamiz.
  */
  const chapters =
    Array.isArray(book.chapters) &&
    book.chapters.length > 0
      ? book.chapters
      : [
          {
            id: 1,
            title: "Kirish",
            content: `${book.title}

Ushbu kitob haqida ma'lumot hozircha mavjud emas.

Muallif: ${book.author || "Noma'lum"}
Kategoriya: ${book.category || "Noma'lum"}

Kitobni o'qishni davom ettiring.`,
          },
        ];

  /*
    Chapter index chegarasidan chiqib ketmasligi uchun
  */
  const safeChapter = Math.min(
    Math.max(chapter, 0),
    chapters.length - 1
  );

  const currentChapter =
    chapters[safeChapter];

  const totalChapters =
    chapters.length;

  /*
    Keyingi chapter
  */
  const nextChapter = () => {
    if (safeChapter < totalChapters - 1) {
      setChapter(safeChapter + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /*
    Oldingi chapter
  */
  const previousChapter = () => {
    if (safeChapter > 0) {
      setChapter(safeChapter - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  /*
    Progress bar
  */
  const chapterProgress =
    totalChapters > 0
      ? ((safeChapter + progress / 100) /
          totalChapters) *
        100
      : 0;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        readerTheme === "dark"
          ? "bg-gray-950 text-gray-200"
          : readerTheme === "sepia"
          ? "bg-[#f4ecd8] text-[#5b4636]"
          : "bg-white text-gray-900"
      }`}
    >
      {/* =========================
          PROGRESS BAR
      ========================== */}

      <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-gray-200/50">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{
            width: `${Math.min(
              100,
              Math.max(0, chapterProgress)
            )}%`,
          }}
        />
      </div>

      {/* =========================
          TOOLBAR
      ========================== */}

      <div
        className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
          readerTheme === "dark"
            ? "bg-gray-900/90 border-gray-800"
            : readerTheme === "sepia"
            ? "bg-[#f4ecd8]/90 border-[#e8dfc8]"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          {/* LEFT */}

          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={`/books/${book.id}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition hover:bg-gray-100 dark:hover:bg-gray-800"
              title="Back"
            >
              <ArrowLeft size={20} />
            </Link>

            <div className="hidden min-w-0 sm:block">
              <h2 className="max-w-[300px] truncate text-sm font-semibold">
                {book.title}
              </h2>

              <p className="max-w-[300px] truncate text-xs opacity-60">
                {currentChapter.title}
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-1">
            {/* Font minus */}

            <button
              type="button"
              onClick={() =>
                setFontSize((size) =>
                  Math.max(14, size - 2)
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100 "
              title="Decrease font size"
            >
              <Type size={16} />
            </button>

            {/* Font plus */}

            <button
              type="button"
              onClick={() =>
                setFontSize((size) =>
                  Math.min(28, size + 2)
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100 "
              title="Increase font size"
            >
              <Type size={20} />
            </button>

            {/* Theme */}

            <button
              type="button"
              onClick={() =>
                setReaderTheme(
                  readerTheme === "light"
                    ? "dark"
                    : readerTheme === "dark"
                    ? "sepia"
                    : "light"
                )
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100 "
              title="Reading theme"
            >
              {readerTheme === "light" ? (
                <Moon size={18} />
              ) : readerTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <BookOpen size={18} />
              )}
            </button>

            {/* Fullscreen */}

            <button
              type="button"
              onClick={toggleFullscreen}
              className="flex h-10 w-10 items-center justify-center rounded-xl transition hover:bg-gray-100 "
              title="Fullscreen"
            >
              {fullscreen ? (
                <Minimize size={18} />
              ) : (
                <Maximize size={18} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE BOOK TITLE
      ========================== */}

      <div className="border-b border-gray-200 px-4 py-3 sm:hidden ">
        <h2 className="truncate text-sm font-semibold">
          {book.title}
        </h2>

        <p className="truncate text-xs opacity-60">
          {currentChapter.title}
        </p>
      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <main className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <article
          style={{
            fontSize: `${fontSize}px`,
          }}
          className="reader-content"
        >
          {/* Chapter title */}

          <h1 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl">
            {currentChapter.title}
          </h1>

          {/* Book info */}

          <div className="mb-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-base opacity-60">
            <span>{book.title}</span>

            <span>•</span>

            <span>
              {book.author || "Unknown author"}
            </span>
          </div>

          {/* Chapter content */}

          <div
            className="whitespace-pre-line leading-[1.9]"
            style={{
              fontSize: `${fontSize}px`,
            }}
          >
            {book.content}
          </div>
        </article>

        {/* =========================
            CHAPTER NAVIGATION
        ========================== */}

        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Previous */}

            <button
              type="button"
              onClick={previousChapter}
              disabled={safeChapter === 0}
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              <ChevronLeft size={18} />
              Previous
            </button>

            {/* Chapter number */}

            <div className="order-first text-center text-sm opacity-60 sm:order-none">
              Chapter{" "}
              <span className="font-semibold">
                {safeChapter + 1}
              </span>{" "}
              of{" "}
              <span className="font-semibold">
                {totalChapters}
              </span>
            </div>

            {/* Next */}

            <button
              type="button"
              onClick={nextChapter}
              disabled={
                safeChapter ===
                totalChapters - 1
              }
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-800 dark:hover:bg-gray-900"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* =========================
            BOOK INFO
        ========================== */}

        <div className="mt-12 rounded-2xl border border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
              <BookOpen size={22} />
            </div>

            <div>
              <h3 className="font-semibold">
                {book.title}
              </h3>

              <p className="mt-1 text-sm opacity-60">
                {book.author || "Unknown author"}
              </p>

              {book.category && (
                <p className="mt-2 text-xs opacity-50">
                  {book.category}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

