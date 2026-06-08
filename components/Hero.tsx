"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-center"
      >
        <p className="text-cyan-400 text-lg mb-6">
          Chennai, India · Open to Opportunities
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Software Engineer
          <br />
          Building Backend Systems &
          <br />
          AI Solutions
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
          AI & Data Science graduate focused on Java, Spring Boot,
          Machine Learning, REST APIs and scalable cloud applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold"
          >
            Resume
          </a>

          <a
            href="https://github.com/akamreez"
            target="_blank"
            className="border border-white/20 px-6 py-3 rounded-full"
          >
            GitHub
          </a>

          <a
            href="#contact"
            className="border border-white/20 px-6 py-3 rounded-full"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}