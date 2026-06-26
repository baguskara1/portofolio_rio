"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", level: 90, color: "bg-yellow-400", darkColor: "bg-yellow-500" },
  { name: "Python", level: 85, color: "bg-blue-500", darkColor: "bg-blue-400" },
  { name: "PHP", level: 80, color: "bg-indigo-500", darkColor: "bg-indigo-400" },
  { name: "Java", level: 75, color: "bg-red-500", darkColor: "bg-red-400" },
  { name: "C++", level: 70, color: "bg-blue-600", darkColor: "bg-blue-500" },
  { name: "C", level: 65, color: "bg-gray-500", darkColor: "bg-gray-400" },
  { name: "HTML/CSS", level: 95, color: "bg-orange-500", darkColor: "bg-orange-400" },
  { name: "React/Next.js", level: 88, color: "bg-cyan-500", darkColor: "bg-cyan-400" },
];

const tools = [
  "Git & GitHub",
  "VS Code",
  "Figma",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Laravel",
  "Vite",
  "npm",
];

export default function Skills() {
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
            Technical <span className="text-indigo-600 dark:text-cyan-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I&apos;ve been working with to create amazing digital experiences.
          </p>
        </motion.div>

        {/* Programming Languages */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">Programming Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${skill.color} dark:${skill.darkColor}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tools & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-cyan-500/50 transition-all cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}