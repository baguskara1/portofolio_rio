"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiInstagram, FiSend } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "rioardiyansyah33@gmail.com",
      href: "mailto:rioardiyansyah33@gmail.com",
      icon: <FiMail className="w-6 h-6" />
    },
    {
      title: "GitHub",
      value: "baguskara1",
      href: "https://github.com/baguskara1",
      icon: <FiGithub className="w-6 h-6" />
    },
    {
      title: "Instagram",
      value: "@raaamsy",
      href: "https://www.instagram.com/raaamsy?igsh=bGwyeWkwbW12aDA5",
      icon: <FiInstagram className="w-6 h-6" />
    }
  ];

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
            Get In <span className="text-indigo-600 dark:text-cyan-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-indigo-600 dark:bg-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question, want to collaborate, or just want to say hello? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center hover:shadow-xl transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-cyan-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{info.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors break-all">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="relative max-w-2xl mx-auto p-8 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s work together!</h3>
              <p className="mb-6 opacity-90">
                I&apos;m currently open to new opportunities and exciting projects.
              </p>
              <a
                href="mailto:rioardiyansyah33@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <FiSend className="w-5 h-5" />
                Send a Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}