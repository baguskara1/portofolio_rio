"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import ScrollIndicator from "@/components/ScrollIndicator";

const titles = [
  "Computer Science Student @ UMBY",
  "Front End Developer",
  "Game Server Developer",
  "Creative Thinker",
];

export default function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentFullText = titles[currentTitleIndex];

    const handleTyping = () => {
      setText((prev) => {
        if (!isDeleting) {
            if (prev === currentFullText) {
              setTimeout(() => setIsDeleting(true), 1000);
              return prev;
            }
          return currentFullText.substring(0, prev.length + 1);
        } else {
          if (prev === "") {
            setIsDeleting(false);
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
            return prev;
          }
          return prev.substring(0, prev.length - 1);
        }
      });

      let typingSpeed = isDeleting ? 30 : 60;
      if (!isDeleting && text === currentFullText) {
        typingSpeed = 1000;
      } else if (isDeleting && text === "") {
        typingSpeed = 300;
      }

      timeout = setTimeout(handleTyping, typingSpeed);
    };

    timeout = setTimeout(handleTyping, 500);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentTitleIndex]);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-cyan-500/20 dark:bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I&apos;m <span className="text-indigo-600 dark:text-cyan-400">Rio</span>
          </h1>
          
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              I&apos;m a&nbsp;
            </span>
            <span className="text-xl md:text-2xl font-mono text-indigo-600 dark:text-cyan-400 min-w-[280px] md:min-w-[400px] text-left border-r-2 border-indigo-600 dark:border-cyan-400 pr-1">
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
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
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
  );
}