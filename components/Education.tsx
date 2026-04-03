'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="text-accent-purple font-mono text-sm tracking-widest mb-4">EDUCATION</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Academic <span className="gradient-text">Background</span>
        </h2>

        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="p-8 rounded-xl bg-dark-700/50 border border-white/5 glow-border card-hover max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Higher Diploma in Information Technology</h3>
          <p className="text-accent-cyan font-mono mb-2">Soutsaka Institute of Technology</p>
          <p className="text-gray-400">2020 – 2023</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
