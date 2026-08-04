'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from './SocialLinks';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const subtitle = "Software Engineer | Python Full Stack Developer | AWS Cloud Enthusiast";

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-gradient-to-b from-[#FFFDF8] to-[#F7F3ED] dark:from-[#0F1D32] dark:to-[#162742]">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/10 dark:bg-amber-400/5 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 dark:bg-purple-600/5 blur-[120px]" 
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-slate-100"
        >
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#D4A843] dark:from-[#D4A843] dark:to-[#FDE08B]">Radhe</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
          {subtitle.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05, delay: index * 0.03 + 0.5 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-3xl leading-relaxed">
          I build premium, scalable web applications and cloud architectures. Passionate about Python, React, and pushing the boundaries of modern engineering.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center mb-16">
          <Link href="/projects" passHref legacyBehavior>
            <Button size="lg" className="bg-gradient-to-r from-[#B8860B] to-[#D4A843] hover:opacity-90 text-white border-0 shadow-lg shadow-amber-500/25">
              View Projects
            </Button>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <Button variant="outline" size="lg" className="border-[#B8860B]/50 text-[#B8860B] dark:text-[#D4A843] dark:border-[#D4A843]/50 hover:bg-[#B8860B]/10 dark:hover:bg-[#D4A843]/10">
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl mb-12 border-y border-slate-200 dark:border-slate-800 py-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#B8860B] dark:text-[#D4A843] mb-2">4+</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Exp.</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#B8860B] dark:text-[#D4A843] mb-2">20+</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-[#B8860B] dark:text-[#D4A843] mb-2">15+</span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">OSS Contribs</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <SocialLinks variant="card" iconSize={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
