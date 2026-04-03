'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-accent-cyan font-mono text-sm tracking-widest mb-4">ABOUT ME</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Detail-Oriented <span className="gradient-text">Engineer</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Detail-oriented DevOps & Full-Stack Engineer with <span className="text-accent-cyan font-semibold">3+ years</span> of experience. 
            Expert in bridging the gap between high-quality frontend development and robust infrastructure.
          </p>
          <p>
            Currently specializing in <span className="text-accent-purple font-semibold">CI/CD orchestration</span> with Jenkins, 
            <span className="text-accent-purple font-semibold"> Linux server administration</span>, and the deployment of 
            <span className="text-accent-purple font-semibold"> open-source ecosystems</span> to streamline development lifecycles.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Projects Delivered' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Commitment' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-dark-700/50 border border-white/5"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
