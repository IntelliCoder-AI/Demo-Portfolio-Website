'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import type { Skill } from '@/types';

import * as LucideIcons from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const getLevelPercentage = (level: string) => {
    switch(level?.toLowerCase()) {
      case 'beginner': return 25;
      case 'intermediate': return 50;
      case 'advanced': return 75;
      case 'expert': return 95;
      default: return 50;
    }
  };

  const percentage = getLevelPercentage(skill.level);

  // Convert icon string to PascalCase for Lucide React
  const iconName = skill.icon 
    ? skill.icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('')
    : '';
  const IconComponent = iconName ? (LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number }>>)[iconName] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="p-5 h-full bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-[#B8860B]/10 dark:hover:shadow-[#D4A843]/10 transition-all rounded-2xl flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#B8860B] dark:text-[#D4A843] shadow-inner group-hover:scale-110 transition-transform">
          {IconComponent ? <IconComponent size={24} /> : <span className="text-xl font-bold">{skill.name.charAt(0)}</span>}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 capitalize">{skill.level}</span>
          </div>
          
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
              className="h-full bg-gradient-to-r from-[#B8860B] to-[#D4A843] rounded-full"
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
