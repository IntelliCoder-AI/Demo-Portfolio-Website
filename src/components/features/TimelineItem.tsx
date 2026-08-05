'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import type { Experience } from '@/types';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row w-full justify-center">
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#B8860B] dark:bg-[#D4A843] border-4 border-[#FFFDF8] dark:border-[#0F1D32] shadow-sm z-20 mt-6" />

      {/* Spacer for desktop layout */}
      <div className={cn("hidden md:block w-1/2", isEven ? "order-1" : "order-2")} />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className={cn(
          "w-full md:w-1/2 pl-12 pr-0 md:px-8",
          isEven ? "md:order-2 md:text-left" : "md:order-1 md:text-right"
        )}
      >
        <Card className="p-6 bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl rounded-2xl hover:shadow-2xl hover:shadow-[#B8860B]/5 dark:hover:shadow-[#D4A843]/5 transition-all">
          <div className={cn("flex flex-col gap-2 mb-4", !isEven && "md:items-end")}>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#B8860B] dark:text-[#D4A843] font-medium">
              <span className="flex items-center gap-1"><Briefcase size={14} /> {experience.company}</span>
              <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400"><Calendar size={14} /> {experience.startDate} - {experience.endDate || 'Present'}</span>
              {experience.location && (
                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400"><MapPin size={14} /> {experience.location}</span>
              )}
            </div>
          </div>

          <ul className={cn("space-y-2 mb-6 text-slate-600 dark:text-slate-300", !isEven && "md:text-right")}>
            {experience.achievements?.map((achievement, i) => (
              <li key={i} className="flex gap-2">
                <span className={cn("text-[#B8860B] dark:text-[#D4A843]", !isEven && "md:hidden")}>•</span>
                <span className="flex-1">{achievement}</span>
                <span className={cn("hidden text-[#B8860B] dark:text-[#D4A843]", !isEven && "md:inline")}>•</span>
              </li>
            ))}
          </ul>

          {experience.technologies && (
            <div className={cn("flex flex-wrap gap-2", !isEven && "md:justify-end")}>
              {experience.technologies.map((tech, i) => (
                <Badge key={i} variant="outline" className="bg-white/5 dark:bg-slate-800/50">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </Card>
      </motion.div>
    </div>
  );
}
