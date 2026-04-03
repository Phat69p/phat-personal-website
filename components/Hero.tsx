'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';

const words = ['DevOps', '&', 'Full-Stack', 'Engineer'];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number; opacity: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  useAnimationFrame((time) => {
    particles.forEach((p) => {
      const el = document.getElementById(`particle-${p.id}`);
      if (el) {
        const y = (p.y + (time / p.speed) % 100) % 100;
        el.style.transform = `translateY(${y - p.y}vh)`;
      }
    });
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-radial-glow" />

      {particles.map((p) => (
        <div
          key={p.id}
          id={`particle-${p.id}`}
          className="absolute rounded-full bg-accent-cyan"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            filter: `blur(${p.size > 2 ? 1 : 0}px)`,
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        style={{ y: springY, opacity: springOpacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="inline-block"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-blue"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <div className="absolute inset-1 rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold gradient-text">PE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-accent-cyan font-mono text-sm md:text-base mb-4 tracking-widest"
        >
          HELLO, I&apos;M
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="text-white">Phattakhorn</span>
          <br />
          <span className="gradient-text">Eienpanya</span>
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
              className="px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan font-mono text-sm md:text-base"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Bridging the gap between high-quality frontend development and robust infrastructure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#experience"
            className="px-8 py-3 bg-accent-cyan text-dark-900 font-semibold rounded-lg hover:bg-accent-cyan/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-accent-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
