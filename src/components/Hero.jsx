import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="max-w-4xl text-center z-10"
      >
        <motion.div variants={item} className="mb-6">
          <img
            src="/profile.jpg"
            alt="Surya Vanukuri"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-400 shadow-2xl shadow-blue-400/50"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          Surya Vanukuri
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-3xl text-gray-300 mb-4 font-light"
        >
          Full Stack Software Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable platforms, AI-powered solutions, and data-driven experiences. 4+ years at Siemens & RBC.
        </motion.p>

        <motion.div
          variants={item}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition"
          >
            View Work <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
