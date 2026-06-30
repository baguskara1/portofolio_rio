"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiInstagram, FiSend, FiMapPin, FiLoader } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      title: "Email",
      value: "rioardiyansyah33@gmail.com",
      href: "mailto:rioardiyansyah33@gmail.com",
      icon: <FiMail className="w-5 h-5" />
    },
    {
      title: "GitHub",
      value: "baguskara1",
      href: "https://github.com/baguskara1",
      icon: <FiGithub className="w-5 h-5" />
    },
    {
      title: "Instagram",
      value: "@raaamsy",
      href: "https://www.instagram.com/raaamsy?igsh=bGwyeWkwbW12aDA5",
      icon: <FiInstagram className="w-5 h-5" />
    },
    {
      title: "Location",
      value: "Yogyakarta, Indonesia",
      href: "#",
      icon: <FiMapPin className="w-5 h-5" />
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdargkvd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-pink-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a question, want to collaborate, or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.href !== "#" ? "_blank" : undefined}
                rel={info.href !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl shadow-sm border border-gray-800 hover:shadow-xl hover:border-pink-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gray-800 text-pink-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{info.title}</h3>
                  <p className="text-sm text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}

              {/* CTA Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gradient-to-r from-violet-500 to-pink-500 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">Let's work together!</h3>
              <p className="text-sm">
                I'm currently open to new opportunities and exciting projects.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-800"
            >
              <div className="space-y-6">
                <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                   Your Name
                 </label>
                 <input
                   type="text"
                   name="name"
                   id="name"
                   required
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                   placeholder="John Doe"
                 />
                </div>

                <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                   Email Address
                 </label>
                 <input
                   type="email"
                   name="email"
                   id="email"
                   required
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                   placeholder="john@example.com"
                 />
                </div>

                <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                   Message
                 </label>
                 <textarea
                   name="message"
                   id="message"
                   rows={5}
                   required
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all text-white resize-none placeholder-gray-400"
                   placeholder="Your message here..."
                 />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitted ? (
                    "Message Sent!"
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
