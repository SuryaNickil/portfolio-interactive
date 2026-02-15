import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:suryanickilreddy@gmail.com?subject=Let's Work Together`;
  };

  return (
    <section id="contact" className="py-20 px-6 relative z-10 border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            I'm always interested in new opportunities and collaborations.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12 flex gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Send
            </motion.button>
          </motion.form>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                icon: Mail,
                href: 'mailto:suryanickilreddy@gmail.com',
                label: 'Email',
              },
              {
                icon: Linkedin,
                href: 'https://linkedin.com/in/surya-vanukuri-6513b41b1',
                label: 'LinkedIn',
              },
              {
                icon: Github,
                href: 'https://github.com/SuryaNickil',
                label: 'GitHub',
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-4 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-blue-400 hover:border-blue-400 transition"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
