import type { Metadata } from "next";
import {
  SiJavascript,
  SiPython,
  SiPhp,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiLaravel,
  SiVite,
  SiNpm,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Skills | ~rio",
  description: "Technical skills and tools of Rio Ardiyansyah — programming languages, frameworks, and development tools.",
};

const skills = [
  { name: "JavaScript", level: 90, icon: <SiJavascript className="w-6 h-6" />, color: "bg-yellow-400" },
  { name: "TypeScript", level: 82, icon: <SiTypescript className="w-6 h-6" />, color: "bg-blue-600" },
  { name: "Python", level: 85, icon: <SiPython className="w-6 h-6" />, color: "bg-blue-500" },
  { name: "PHP", level: 80, icon: <SiPhp className="w-6 h-6" />, color: "bg-indigo-500" },
  { name: "Java", level: 75, icon: <FaJava className="w-6 h-6" />, color: "bg-red-500" },
  { name: "C++", level: 70, icon: <SiCplusplus className="w-6 h-6" />, color: "bg-blue-600" },
  { name: "C", level: 65, icon: <SiC className="w-6 h-6" />, color: "bg-gray-500" },
  { name: "HTML/CSS", level: 95, icon: <SiHtml5 className="w-6 h-6" />, color: "bg-orange-500" },
  { name: "React", level: 88, icon: <SiReact className="w-6 h-6" />, color: "bg-cyan-500" },
  { name: "Next.js", level: 85, icon: <SiNextdotjs className="w-6 h-6" />, color: "bg-gray-900 dark:bg-white" },
];

const tools = [
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5" /> },
  { name: "Git & GitHub", icon: <SiGit className="w-5 h-5" /> },
  { name: "VS Code", icon: <VscVscode className="w-5 h-5" /> },
  { name: "Figma", icon: <SiFigma className="w-5 h-5" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
  { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
  { name: "Laravel", icon: <SiLaravel className="w-5 h-5" /> },
  { name: "Vite", icon: <SiVite className="w-5 h-5" /> },
  { name: "npm", icon: <SiNpm className="w-5 h-5" /> },
];

export default function Skills() {
  return (
    <section className="py-20 lg:py-32 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-violet-600 dark:text-pink-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-violet-600 dark:bg-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I&apos;ve been working with to create amazing digital experiences.
          </p>
        </AnimatedSection>

        {/* Programming Languages */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">Programming Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill.name} delay={index * 0.05} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`${skill.color} text-white p-2 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  </div>
                  <span className="text-sm font-mono text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Tools & Frameworks */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">Tools & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <AnimatedSection key={tool.name} delay={index * 0.05} className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-300 font-medium shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-pink-500/50 hover:-translate-y-1 transition-all cursor-default animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <span className="text-violet-600 dark:text-pink-400">{tool.icon}</span>
                {tool.name}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}