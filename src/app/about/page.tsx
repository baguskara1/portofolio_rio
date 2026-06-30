import type { Metadata } from "next";
import Image from "next/image";
import { FiUser, FiBook, FiMapPin } from "react-icons/fi";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About | ~rio",
  description: "Learn more about Rio Ardiyansyah — a Computer Science student at University Mercubuana Yogyakarta.",
};

export default function About() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portofolio_rio' : '';
  return (
    <section className="py-20 lg:py-32 bg-gray-900 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-pink-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-pink-400 mx-auto rounded-full" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden bg-gray-800">
              <Image
                src="https://i.imgur.com/Snz6Zf9.jpeg"
                alt="Rio Ardiyansyah"
                width={600}
                height={800}
                className="w-full h-full object-cover object-center"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-800 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-800 rounded-full -z-10" />
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="space-y-8">
            <h3 className="text-2xl font-bold text-white">
              A dedicated Computer Science student <br className="hidden lg:block"/> based in Yogyakarta
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Hello! I&apos;m Rio Ardiyansyah, a passionate Computer Science student at University Mercubuana Yogyakarta (class of 2024). 
              I specialize in Front End Development and have a keen interest in building modern, responsive, and user-friendly web applications.
            </p>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              My journey in tech started in early 2020 when COVID hit. A friend invited me to try 
              developing for GTA San Andreas Online (SAMP Roleplay) — a multiplayer game server 
              modification. I was fascinated by how the game world could be expanded and 
              customized through code. That spark led me to dive deeper into programming, 
              eventually pursuing Computer Science at University Mercubuana Yogyakarta. Today, 
              I channel that same passion into building modern web applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-gray-950 rounded-xl shadow-sm border border-gray-800">
                <div className="p-2 bg-violet-900/50 text-pink-400 rounded-lg">
                  <FiUser className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Name</h4>
                  <p className="text-sm text-gray-400">Rio Ardiyansyah</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-950 rounded-xl shadow-sm border border-gray-800">
                <div className="p-2 bg-violet-900/50 text-pink-400 rounded-lg">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Education</h4>
                  <p className="text-sm text-gray-400">Computer Science</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-950 rounded-xl shadow-sm border border-gray-800">
                <div className="p-2 bg-violet-900/50 text-pink-400 rounded-lg">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">University</h4>
                  <p className="text-sm text-gray-400">UMBY (Est. 2024)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-950 rounded-xl shadow-sm border border-gray-800">
                <div className="p-2 bg-violet-900/50 text-pink-400 rounded-lg">
                  <FiBook className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Focus</h4>
                  <p className="text-sm text-gray-400">Frontend & Web Dev</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={`${basePath}/CV_Rio_Ardiyansyah.pdf`}
                download="CV_Rio_Ardiyansyah.pdf"
                className="inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            My <span className="text-pink-400">Journey</span>
          </h3>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-800 md:-translate-x-px" />
            {[
              { year: "2020", title: "Started Coding", desc: "Began with GTA San Andreas Online (SAMP Roleplay) game server development. Sparked my passion for programming." },
              { year: "2024", title: "Computer Science @ UMBY", desc: "Started my Computer Science degree at University Mercubuana Yogyakarta. Built web applications with Laravel, React, and more." },
              { year: "Now", title: "Front End Developer", desc: "Actively building modern web experiences with Next.js, TypeScript, and Tailwind CSS. Always exploring new technologies." },
            ].map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 mb-10 md:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-8">
                  {i % 2 === 0 && (
                    <div className="bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-800 text-right">
                      <span className="text-sm font-mono text-pink-400">{item.year}</span>
                      <h4 className="font-semibold text-white mt-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  )}
                </div>
                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 border-4 border-gray-900 flex items-center justify-center md:mx-auto">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
                <div className="md:hidden flex-1 bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-800">
                  <span className="text-xs font-mono text-pink-400">{item.year}</span>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                </div>
                <div className="hidden md:flex md:w-1/2 md:pl-8">
                  {i % 2 !== 0 && (
                    <div className="bg-gray-950 p-5 rounded-xl shadow-sm border border-gray-800">
                      <span className="text-sm font-mono text-pink-400">{item.year}</span>
                      <h4 className="font-semibold text-white mt-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
