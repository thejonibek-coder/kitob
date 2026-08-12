import { BookOpen, Users, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto section-padding py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About E.BOOKS</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Empowering readers worldwide with access to knowledge, stories, and ideas.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            We believe that knowledge should be accessible to everyone. E.BOOKS was founded with a simple
            yet powerful mission: to democratize reading by providing a modern, intuitive platform where
            anyone can discover and read electronic books from anywhere in the world.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you're a student, professional, or lifelong learner, our platform is designed to
            grow with you and adapt to your reading preferences.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-center">
            <BookOpen size={32} className="text-primary-600 dark:text-primary-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">10K+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Books</p>
          </div>
          <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-center">
            <Users size={32} className="text-purple-600 dark:text-purple-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">5K+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Readers</p>
          </div>
          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-center">
            <Globe size={32} className="text-amber-600 dark:text-amber-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">120+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Countries</p>
          </div>
          <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 text-center">
            <Award size={32} className="text-green-600 dark:text-green-400 mx-auto mb-3" />
            <p className="text-2xl font-bold text-gray-900 dark:text-white">50+</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Categories</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Why We Exist</h2>
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
              className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary-600 to-purple-700 dark:from-primary-800 dark:to-purple-900">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your Reading Journey</h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Join thousands of readers who have already discovered their next favorite book on E.BOOKS.
        </p>
        <Link
          href="/books"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-gray-100 transition-colors shadow-lg"
        >
          Explore Books
        </Link>
      </div>
    </div>
  );
}