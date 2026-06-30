"use client";

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function ScrollIndicator() {
  const scrollToContent = () => {
    const content = document.getElementById("main-content");
    if (content) {
      content.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
    >
      <motion.button
        onClick={scrollToContent}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex flex-col items-center gap-1 text-gray-400 hover:text-pink-400 transition-colors"
      >
        <FiChevronDown className="w-6 h-6" />
        <span className="text-xs font-medium">Scroll Down</span>
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="w-1 h-6 bg-gray-600 rounded-full"
      />
    </motion.div>
  );
}
