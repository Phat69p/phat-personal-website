'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'DevOps Engineer / Team Lead',
    company: 'IQURI Tech',
    period: 'July 2025 – Present',
    achievements: [
      'Architected and managed automated deployment pipelines using Jenkins, reducing manual deployment time and increasing release reliability.',
      'Spearheaded the installation and configuration of open-source monitoring and utility tools, improving internal team visibility and system health.',
      'Managed containerized environments using Docker and Kubernetes, ensuring consistency across development, staging, and production tiers.',
      'Standardized deployment workflows, resulting in a more efficient handover between development and operations.',
    ],
    side: 'left',
  },
  {
    title: 'Full-Stack Developer',
    company: 'IQURI Tech',
    period: 'July 2024 – June 2025',
    achievements: [
      'Led the frontend team in building scalable web applications using React.js and MUI.',
      'Designed and maintained RESTful APIs with Node.js and NestJS, optimizing for high-performance data retrieval.',
      'Improved website performance by 20% through targeted code-splitting, frontend caching strategies, and database query optimization.',
    ],
    side: 'right',
  },
  {
    title: 'Junior Web Developer',
    company: 'IQURI Tech',
    period: 'Sept 2023 – June 2024',
    achievements: [
      'Developed responsive UI components using React.js and TypeScript for diverse client projects.',
      'Collaborated with backend teams to integrate complex APIs and improved overall system stability.',
    ],
    side: 'left',
  },
  {
    title: 'Web Development Intern',
    company: 'IQURI Tech',
    period: 'June 2023 – July 2023',
    achievements: [
      'Assisted in frontend bug fixing and learned Agile development workflows and Git-based collaboration.',
    ],
    side: 'right',
  },
  {
    title: 'Intern Software Engineer',
    company: 'LAOODOO Co., Ltd',
    period: 'Dec 2022 – Jan 2023',
    achievements: [
      'Customized modules within the Odoo ERP framework and managed large-scale product data for Kok Mart.',
    ],
    side: 'left',
  },
  {
    title: 'Web Development Intern',
    company: 'MTS (Multimedia & Technology Solutions)',
    period: 'Jan 2022 – Aug 2022',
    achievements: [
      'Built interactive user experiences using Vue.js and managed news content for the Laos Red Cross WordPress site.',
    ],
    side: 'right',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-20">
          <p className="text-accent-cyan font-mono text-sm tracking-widest mb-4">CAREER PATH</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={exp.side === 'left' ? itemVariants : itemVariantsRight}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  exp.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 ${exp.side === 'right' ? 'md:text-right' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl bg-dark-700/50 border border-white/5 glow-border card-hover"
                  >
                    <div className={`flex flex-col ${exp.side === 'right' ? 'md:items-end' : ''} mb-4`}>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-accent-cyan font-mono text-sm">{exp.company}</p>
                      <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                    </div>
                    <ul className={`space-y-2 ${exp.side === 'right' ? 'md:text-right' : ''}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 md:flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.3 }}
                    className="w-4 h-4 rounded-full bg-accent-cyan border-4 border-dark-900 shadow-lg shadow-accent-cyan/50"
                  />
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
