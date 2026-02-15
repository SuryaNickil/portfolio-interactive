import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: 'Backend & APIs',
    skills: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Databricks', 'Spark', 'SQL', 'ETL', 'Delta Lake'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'AI & ML',
    skills: ['LLMs', 'RAG', 'LangChain', 'Vector DB', 'Prompt Eng'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Oracle', 'MySQL'],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 hover:border-white/30 transition"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-blue-400/30 rounded-lg text-gray-300 hover:bg-blue-400/20 transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
