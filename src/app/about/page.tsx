"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiUser, FiBook, FiMapPin } from "react-icons/fi";

export default function About() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portofolio_rio' : '';
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
            About <span className="text-violet-600 dark:text-pink-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 dark:bg-pink-400 mx-auto rounded-full" />
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
            <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src="https://i.imgur.com/Snz6Zf9.jpeg"
                alt="Rio Ardiyansyah"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
                unoptimized
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violet-100 dark:bg-gray-800 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-100 dark:bg-gray-800 rounded-full -z-10" />
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
              Hello! I&apos;m Rio Ardiyansyah, a passionate Computer Science student at University Mercubuana Yogyakarta (class of 2024). 
              I specialize in Front End Development and have a keen interest in building modern, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              My journey in tech started in early 2020 when COVID hit. A friend invited me to try 
              developing for GTA San Andreas Online (SAMP Roleplay) — a multiplayer game server 
              modification. I was fascinated by how the game world could be expanded and 
              customized through code. That spark led me to dive deeper into programming, 
              eventually pursuing Computer Science at University Mercubuana Yogyakarta. Today, 
              I channel that same passion into building modern web applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-pink-400 rounded-lg">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Name</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Rio Ardiyansyah</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-pink-400 rounded-lg">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Computer Science</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-pink-400 rounded-lg">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">University</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">UMBY (Est. 2024)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-950 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                <div className="p-2 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-pink-400 rounded-lg">
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
                href={`${basePath}/CV_Rio_Ardiyansyah.pdf`}
                download="CV_Rio_Ardiyansyah.pdf"
                className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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