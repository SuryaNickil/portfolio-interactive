import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Canvas3D from './components/Canvas3D';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <Navbar isScrolled={isScrolled} isDark={isDark} setIsDark={setIsDark} />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Canvas3D />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-8 text-center border-t border-white/10"
      >
        <p className="text-sm text-gray-400">
          © 2026 Surya Vanukuri. Built with React, Three.js & Framer Motion.
        </p>
      </motion.footer>
    </div>
  );
}
