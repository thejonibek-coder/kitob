import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div
          className="
            rounded-3xl
            border
            border-gray-200
            bg-gray-50
            p-10

            dark:border-gray-800
            dark:bg-gray-900
          "
        >
          <p
            className="
              mb-3
              text-sm
              font-semibold
              text-blue-600
              dark:text-blue-400
            "
          >
            E.BOOKS
          </p>

          <h1
            className="
              text-4xl
              font-black
              text-gray-900

              dark:text-white
            "
          >
            Elektron kitoblar olami
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-gray-600

              dark:text-gray-400
            "
          >
            Sevimli kitoblaringizni toping,
            o‘qing va yangi bilimlar kashf qiling.
          </p>

          <div className="mt-7">
            <button
              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-bold
                text-white
                hover:bg-blue-700
              "
            >
              Kitoblarni ko‘rish
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}