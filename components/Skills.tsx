'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'DevOps & Infrastructure',
    icon: '⚙️',
    color: 'from-accent-cyan to-blue-500',
    skills: [
      { name: 'Jenkins', level: 95 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'CI/CD Automation', level: 95 },
      { name: 'Linux Administration', level: 90 },
      { name: 'Shell Scripting', level: 85 },
    ],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'from-accent-purple to-pink-500',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Vue.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'MUI', level: 90 },
      { name: 'Redux', level: 85 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    title: 'Backend & API',
    icon: '🔧',
    color: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'NestJS', level: 85 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'GraphQL', level: 80 },
      { name: 'JWT/OAuth2', level: 85 },
    ],
  },
  {
    title: 'Database & Cloud',
    icon: '☁️',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 85 },
      { name: 'AWS', level: 80 },
      { name: 'DigitalOcean', level: 85 },
      { name: 'Vercel', level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="mb-3"
    >
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-accent-cyan font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-7xl mx-auto"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <p className="text-accent-purple font-mono text-sm tracking-widest mb-4">CORE COMPETENCIES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl bg-dark-700/50 border border-white/5 glow-border card-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-1">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={index * 0.2 + i * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
