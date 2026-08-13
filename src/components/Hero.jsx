"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Users,
  Layers,
  Star,
} from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "10,000+",
    label: "Books",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Readers",
  },
  {
    icon: Layers,
    value: "50+",
    label: "Categories",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 lg:pb-32 lg:pt-24">

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute left-1/2 top-0
            h-[700px] w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-400/10
            blur-3xl
            dark:bg-blue-500/10
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            h-[500px] w-[500px]
            rounded-full
            bg-indigo-400/10
            blur-3xl
            dark:bg-indigo-500/10
          "
        />

      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div className="space-y-8">

            {/* Badge */}

            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-blue-100
                bg-blue-50
                px-4 py-2
                text-sm font-medium
                text-blue-600
                dark:border-blue-900/40
                dark:bg-blue-900/20
                dark:text-blue-400
              "
            >
              <Star className="h-4 w-4 fill-current" />

              <span>Premium Ebook Platform</span>
            </div>

            {/* Heading */}

            <h1
              className="
                text-5xl font-bold
                tracking-tight
                text-gray-900
                sm:text-6xl
                lg:text-7xl
                dark:text-white
              "
            >
              O'qing.{" "}

              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                O'rganing.
              </span>{" "}

              O'sing.
            </h1>

            {/* Description */}

            <p
              className="
                max-w-xl
                text-lg leading-relaxed
                text-gray-600
                dark:text-gray-300
              "
            >
              Har bir janrdagi minglab elektron kitoblarni
              kashf eting. Istalgan joyda, istalgan vaqtda
              o'qing. Shaxsiy kutubxonangiz bir marta bosish
              masofasida.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">

              <Link
                href="/books"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  bg-blue-600
                  px-6 py-3
                  font-semibold text-white
                  shadow-lg shadow-blue-500/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-700
                  hover:shadow-xl
                "
              >
                <BookOpen className="h-5 w-5" />

                Kitoblarni o'rganing
              </Link>

              <Link
                href="/books"
                className="
                  inline-flex items-center gap-2
                  rounded-xl
                  bg-gray-100
                  px-6 py-3
                  font-semibold
                  text-gray-900
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-gray-200
                  dark:bg-gray-800
                  dark:text-white
                  dark:hover:bg-gray-700
                "
              >
                O'qishni boshlang

                <ArrowRight
                  className="
                    h-5 w-5
                    transition-transform duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

            </div>

            {/* =========================
                STATS
            ========================== */}

            <div className="flex flex-wrap gap-8 pt-4">

              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3"
                  >

                    <div
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-lg
                        bg-blue-50
                        dark:bg-blue-900/20
                      "
                    >
                      <Icon
                        className="
                          h-5 w-5
                          text-blue-600
                          dark:text-blue-400
                        "
                      />
                    </div>

                    <div>
                      <div
                        className="
                          text-xl font-bold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {stat.value}
                      </div>

                      <div
                        className="
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {stat.label}
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* =========================
              HERO IMAGE
          ========================== */}

          <div className="relative hidden lg:block">

            {/* Glow */}

            <div
              className="
                absolute -inset-4
                rounded-[32px]
                bg-blue-500/10
                blur-2xl
              "
            />

            <div
              className="
                group relative
                overflow-hidden
                rounded-[28px]
                border border-gray-200
                bg-gray-100
                shadow-2xl
                shadow-blue-500/10
                dark:border-gray-800
                dark:bg-gray-900
              "
            >

              <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&h=900&fit=crop"
                alt="Ebook library"
                className="
                  h-auto w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Gradient */}

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent
                "
              />

              {/* Bottom card */}

              <div className="absolute bottom-6 left-6 right-6">

                <div
                  className="
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    p-4
                    shadow-xl
                    backdrop-blur-xl
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex h-12 w-12
                        shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-white/20
                      "
                    >
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>

                    <div className="min-w-0">

                      <div className="truncate font-semibold text-white">
                        Sizning Keyingi Ajoyib O'qishingiz
                      </div>

                      <div className="text-sm text-white/70">
                        Hozir bizning kutubxonamizda mavjud
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}