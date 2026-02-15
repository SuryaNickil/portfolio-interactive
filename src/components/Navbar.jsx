import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ isScrolled, isDark, setIsDark }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          SV
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {['Work', 'Skills', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            onClick={() => setIsDark(!isDark)}
            whileHover={{ rotate: 20 }}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="md:hidden bg-black/95 border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            {['Work', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
