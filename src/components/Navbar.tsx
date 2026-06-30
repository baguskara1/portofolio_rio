"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/useScroll";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(20);

  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
            >
              ~rio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative text-sm font-medium transition-colors py-2 ${
                        isActive
                          ? "text-violet-600 dark:text-pink-400"
                          : "text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-pink-400"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600 dark:bg-pink-400 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-gray-200/50 dark:border-gray-800/50 bg-white dark:bg-gray-950"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-violet-50 dark:bg-gray-900 text-violet-600 dark:text-pink-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}