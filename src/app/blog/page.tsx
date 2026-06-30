"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiTag, FiArrowRight } from "react-icons/fi";

const blogPosts = [
  {
    title: "Getting Started with Next.js 14",
    excerpt: "Panduan lengkap memulai project dengan Next.js 14 App Router, TypeScript, dan Tailwind CSS untuk pemula.",
    date: "2025-06-20",
    readTime: "5 min read",
    tags: ["Next.js", "TypeScript", "Tutorial"],
    slug: "#",
  },
  {
    title: "Membangun Website dengan Tailwind CSS",
    excerpt: "Tips dan trik menggunakan Tailwind CSS untuk membangun website modern dengan desain yang responsif dan elegan.",
    date: "2025-06-15",
    readTime: "4 min read",
    tags: ["CSS", "Tailwind", "Web Design"],
    slug: "#",
  },
  {
    title: "Pengalaman Mengerjakan Project Samsat Online",
    excerpt: "Cerita dan pembelajaran selama mengerjakan project kuliah Sistem Administrasi Kendaraan Bermotor Online.",
    date: "2025-06-10",
    readTime: "6 min read",
    tags: ["Laravel", "PHP", "Project"],
    slug: "#",
  },
];

export default function Blog() {
  return (
    <section className="py-20 lg:py-32 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-violet-600 dark:text-pink-400">Blog</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 dark:bg-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights about web development and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Color accent top */}
              <div className="h-1 bg-gradient-to-r from-violet-500 to-pink-500" />
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map(tag => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 bg-violet-50 dark:bg-gray-800 text-violet-600 dark:text-pink-400 rounded-md">
                      <FiTag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.slug}
                  className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-pink-400 group-hover:gap-3 transition-all"
                >
                  Read More
                  <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm italic">
            More articles coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
}