"use client";

import { motion } from "framer-motion";
import { FiUser, FiBook, FiMapPin } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
<div className="w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden">
  <img
    src="/images/fp1.JPG"
    alt="Rio Ardiyansyah"
    className="w-full h-full object-cover"
  />
</div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-100 dark:bg-gray-800 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-100 dark:bg-gray-800 rounded-full -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              A dedicated Computer Science student <br className="hidden lg:block"/> based in Yogyakarta
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              Hello! I&apos;m Rio Ardiyansyah, a passionate Computer Science student at Universitas Mercubuana Yogyakarta (class of 2024). 
              I specialize in Front End Development and have a keen interest in building modern, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              My journey in tech started with a curiosity about how things work on the web. Today, I enjoy turning complex problems into simple, beautiful, and intuitive solutions. 
              When I&apos;m not coding, you can find me exploring new technologies or working on personal projects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-cyan-400 rounded-lg">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Name</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Rio Ardiyansyah</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-cyan-400 rounded-lg">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-cyan-400 rounded-lg">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">University</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UMBY (Est. 2024)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-cyan-400 rounded-lg">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Focus</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Frontend & Web Dev</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}