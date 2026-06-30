"use client";

import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/baguskara1",
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/raaamsy?igsh=bGwyeWkwbW12aDA5",
      icon: <FiInstagram className="w-5 h-5" />,
    },
    {
      name: "Email",
      href: "mailto:rioardiyansyah33@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="border-t border-gray-800/50 bg-gray-950/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
              ~rio
            </span>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Computer Science Student & Front End Developer
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-900 text-gray-400 hover:text-pink-400 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center text-sm text-gray-400">
          <p>© {currentYear} Rio Ardiyansyah. All rights reserved.</p>
          <p className="mt-1 text-xs">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
