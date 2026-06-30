"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiLaravel,
  SiPhp,
  SiBootstrap,
  SiMysql,
  SiJavascript,
  SiReact,
  SiVite,
  SiHtml5,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiFramer,
} from "react-icons/si";

const projects = [
  {
    title: "Website Samsat Online",
    description: "Aplikasi web untuk pembayaran pajak kendaraan dan administrasi Samsat secara online. Fitur meliputi manajemen data kendaraan, pembayaran pajak online, dan dashboard admin.",
    tags: [
      { name: "Laravel", icon: <SiLaravel className="w-4 h-4" /> },
      { name: "PHP", icon: <SiPhp className="w-4 h-4" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-4 h-4" /> },
      { name: "MySQL", icon: <SiMysql className="w-4 h-4" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
    ],
    github: "https://github.com/baguskara1/website_samsat",
    demoUrl: "https://samsat-diy.site/",
    type: "College Project",
    color: "from-indigo-500 to-purple-600",
    icon: <SiLaravel className="w-16 h-16 text-white/30" />,
  },
  {
    title: "Board Game",
    description: "Projek interaktif berbasis web yang menampilkan elemen game papan digital menggunakan React. Dikembangkan dengan modern JavaScript stack dan performa optimal menggunakan Vite.",
    tags: [
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "Vite", icon: <SiVite className="w-4 h-4" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-4 h-4" /> },
    ],
    github: "https://github.com/baguskara1/board_game",
    demoUrl: null,
    type: "Development Project",
    color: "from-cyan-500 to-blue-600",
    icon: <SiReact className="w-16 h-16 text-white/30" />,
  },
  {
    title: "Portfolio Website",
    description: "Situs portofolio pribadi yang dibangun menggunakan Next.js, Tailwind CSS, dan Framer Motion untuk menampilkan profil dan proyek-proyek dengan animasi yang elegan.",
    tags: [
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-4 h-4" /> },
    ],
    github: "https://github.com/baguskara1/portofolio_rio",
    demoUrl: null,
    type: "Personal Project",
    color: "from-gray-700 to-gray-900",
    icon: <SiNextdotjs className="w-16 h-16 text-white/30" />,
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
            Featured <span className="text-violet-600 dark:text-pink-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 dark:bg-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              style={{ transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
              className="group bg-white dark:bg-gray-950 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-2xl"
            >
              {/* Gradient Header with Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-110">
                  {project.icon}
                </div>
                
                {/* Decorative circles */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full" />
                
                {/* Type badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag.name} className="flex items-center gap-1 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                      {tag.icon}
                      {tag.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-pink-400 transition-colors font-medium"
                  >
                    <FiGithub className="w-4 h-4" />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}