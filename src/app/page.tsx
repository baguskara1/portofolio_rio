"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import ScrollIndicator from "@/components/ScrollIndicator";
import MouseGlow from "@/components/MouseGlow";
import { useTypeWriter } from "@/hooks/useTypeWriter";

const titles = [
  "Computer Science Student @ UMBY",
  "Front End Developer",
  "Game Server Developer",
  "Creative Thinker",
];

const techStack = [
  { icon: <SiReact className="w-5 h-5" />, name: "React", color: "text-cyan-400" },
  { icon: <SiNextdotjs className="w-5 h-5" />, name: "Next.js", color: "text-gray-900 dark:text-white" },
  { icon: <SiTypescript className="w-5 h-5" />, name: "TypeScript", color: "text-blue-500" },
  { icon: <SiTailwindcss className="w-5 h-5" />, name: "Tailwind", color: "text-teal-400" },
];

export default function Home() {
  const text = useTypeWriter(titles);

  return (
    <>
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20">
      <MouseGlow />
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-20">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-violet-500/20 dark:bg-violet-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-pink-500/20 dark:bg-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-violet-600 dark:text-pink-400">Rio</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              I&apos;m a&nbsp;
            </span>
            <span className="text-xl md:text-2xl font-mono text-violet-600 dark:text-pink-400 min-w-[280px] md:min-w-[400px] text-left border-r-2 border-violet-600 dark:border-pink-400 pr-1">
              {text}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A passionate Computer Science student at University Mercubuana Yogyakarta, 
            dedicated to Front End development and Game Server development. 
            Always eager to learn new technologies and build amazing digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -4 }}
                className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
                title={tech.name}
              >
                <span className={tech.color}>{tech.icon}</span>
                <span className="hidden sm:inline">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 dark:bg-pink-500 dark:hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              Contact Me
              <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>

    <section className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-10"
        >
          GitHub <span className="text-violet-600 dark:text-pink-400">Profile</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800 max-w-md mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/71247097?v=4"
              alt="GitHub Avatar"
              className="w-16 h-16 rounded-full border-2 border-violet-500"
            />
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">baguskara1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Rio Ardiyansyah</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <p className="text-2xl font-bold text-violet-600 dark:text-pink-400">8</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Repos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-violet-600 dark:text-pink-400">0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-violet-600 dark:text-pink-400">0</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Following</p>
            </div>
          </div>
          <a
            href="https://github.com/baguskara1"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            View on GitHub
          </a>
        </motion.div>
      </div>
    </section>
    </>
  );
}