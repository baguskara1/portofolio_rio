"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Website Samsat Online",
    description: "Aplikasi web untuk pembayaran pajak kendaraan dan administrasi Samsat secara online. Dibangun menggunakan Laravel, Bootstrap, dan PHP. Fitur meliputi manajemen data kendaraan, pembayaran pajak online, dan dashboard admin.",
    image: "/projects/samsat.jpg",
    tags: ["Laravel", "PHP", "Bootstrap", "MySQL", "JavaScript"],
    github: "https://github.com/baguskara1/website_samsat",
    type: "Development & College Project"
  },
  {
    title: "Board Game",
    description: "Projek interaktif berbasis web yang menampilkan elemen game papan digital menggunakan React. Dikembangkan dengan modern JavaScript stack dan performa optimal menggunakan Vite.",
    image: "/projects/board_game.jpg",
    tags: ["React", "Vite", "JavaScript", "HTML5"],
    github: "https://github.com/baguskara1/board_game",
    type: "Development Project"
  },
  {
    title: "Portfolio Website",
    description: "Situs portofolio pribadi ini dibangun menggunakan Next.js, Tailwind CSS, dan Framer Motion untuk menampilkan profil, keterampilan, dan proyek-proyek yang telah dikerjakan dengan animasi yang elegan.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/baguskara1/portofolio_rio",
    type: "Personal Project"
  }
];

export default function Projects() {
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
            Featured <span className="text-indigo-600 dark:text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in web development and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-48 bg-gradient-to-tr from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                {/* Abstract gradient background if no image */}
                <div className="absolute inset-0 bg-indigo-500/10 dark:bg-cyan-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-gray-200 dark:text-gray-800 group-hover:scale-110 transition-transform duration-500">
                    {project.title.substring(0, 2)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-indigo-600 dark:text-cyan-400 mb-2 font-medium">
                  {project.type}
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}