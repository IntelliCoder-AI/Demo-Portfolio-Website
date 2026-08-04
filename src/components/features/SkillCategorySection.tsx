'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { SkillCard } from './SkillCard';
import type { Skill, SkillCategory } from '@/types';

interface SkillCategorySectionProps {
  category: SkillCategory | string;
  skills: Skill[];
  title: string;
  icon?: ReactNode;
}

export function SkillCategorySection({ category, skills, title, icon }: SkillCategorySectionProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        {icon && <div className="text-[#B8860B] dark:text-[#D4A843]">{icon}</div>}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
