import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Job Tracker Dashboard',
    desc: 'Full-stack job application tracker with real-time analytics',
    tech: ['React', 'FastAPI', 'SQLite', 'Tailwind'],
    github: 'https://github.com/SuryaNickil/job-tracker-dashboard',
    live: 'https://job-tracker-dashboard-l8wqoqfhw-suryas-projects-019c107e.vercel.app',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Personal Finance Dashboard',
    desc: 'Comprehensive budget tracking with AI insights',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    github: 'https://github.com/SuryaNickil/finance-dashboard',
    live: 'https://finance-dashboard.vercel.app',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Interactive Portfolio',
    desc: 'Apple-style portfolio with Three.js & Framer Motion',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/SuryaNickil/portfolio',
    live: 'https://portfolio.surya.dev',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="work" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Featured Work
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10 border border-white/10 hover:border-white/30 transition`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <Github size={20} /> Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    <ExternalLink size={20} /> Live
                  </motion.a>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
