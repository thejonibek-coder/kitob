import { BookOpen, Users, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto section-padding py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           E.BOOKS Haqida
        </h1>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Dunyo bo'ylab o'quvchilarni bilim, hikoyalar va g'oyalarga kirish imkoniyati bilan ta'minlash.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Bizning Vazifamiz
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Biz bilimlarning har bir odam uchun kirish imkoniyatiga ega bo'lishi kerakligini hisoblaymiz. E.BOOKS
            oddiy, lekin kuchli vazifasi bilan asoslangan: o'qishni demokratik qilish
            dunyoning istalgan nuqtasidan elektron kitoblarni topishi va o'qishi mumkin bo'lgan zamonaviy, intuitiv platformani taqdim etish orqali o'qish.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Siz talaba, professional yoki umrbod o'rganuvchi bo'lishingizdan qat'i nazar, bizning platformamiz siz bilan birga o'sish va o'qish afzalliklaringizga moslashish uchun mo'ljallangan.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Books */}
          <div className="p-6 rounded-2xl bg-primary-50 text-center">
            <BookOpen
              size={32}
              className="text-primary-600 mx-auto mb-3"
            />

            <p className="text-2xl font-bold text-gray-900">
              10K+
            </p>

            <p className="text-sm text-gray-500">
              Kitoblar
            </p>
          </div>

          {/* Readers */}
          <div className="p-6 rounded-2xl bg-purple-50 text-center">
            <Users
              size={32}
              className="text-purple-600 mx-auto mb-3"
            />

            <p className="text-2xl font-bold text-gray-900">
              5K+
            </p>

            <p className="text-sm text-gray-500">
              O'quvchilar
            </p>
          </div>

          {/* Countries */}
          <div className="p-6 rounded-2xl bg-amber-50 text-center">
            <Globe
              size={32}
              className="text-amber-600 mx-auto mb-3"
            />

            <p className="text-2xl font-bold text-gray-900">
              120+
            </p>

            <p className="text-sm text-gray-500">
              Mamlakatlar
            </p>
          </div>

          {/* Categories */}
          <div className="p-6 rounded-2xl bg-green-50 text-center">
            <Award
              size={32}
              className="text-green-600 mx-auto mb-3"
            />

            <p className="text-2xl font-bold text-gray-900">
              50+
            </p>

            <p className="text-sm text-gray-500">
              Kategoriyalar
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Nima Uchun Mavjud?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Accessibility First",
              desc: "Reading should have no barriers. We optimize for all devices and provide features that make reading comfortable for everyone.",
            },
            {
              title: "Curated Quality",
              desc: "Every book in our collection is carefully selected to ensure you spend time on content that matters and enriches your life.",
            },
            {
              title: "Community Driven",
              desc: "We listen to our readers. Features, recommendations, and improvements are shaped by the community that uses them.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary-600 to-purple-700">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          O'qish Sayohatingizni Boshlang
        </h2>

        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          E.BOOKS da allaqachon keyingi sevimli kitobingizni topgan o'quvchilarga qo'shiling.
        </p>

        <Link
          href="/books"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Kitoblarni Ko'rish  
        </Link>
      </div>
    </div>
  );
}