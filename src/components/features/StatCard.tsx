'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from '@/components/ui/Card';

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StatCard({ value, label, icon, delay = 0 }: StatCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      <Card className="relative overflow-hidden p-6 bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-2xl group">
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110 text-[#B8860B] dark:text-[#D4A843]">
          <div className="w-24 h-24 flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col gap-2">
          <div className="text-[#B8860B] dark:text-[#D4A843] mb-2">
            {icon}
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#D4A843]">
            {value}
          </h3>
          <p className="text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
            {label}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
