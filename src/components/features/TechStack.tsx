'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TechStack() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 
    'Redux', 'GraphQL', 'Jest', 'Cypress', 'Vite'
  ];
  
  const row2 = [
    'Python', 'FastAPI', 'Django', 'Node.js', 'Express',
    'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Linux'
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50/50 dark:bg-slate-900/20 py-12 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto mb-8 px-4 text-center">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Technologies I Work With</h3>
      </div>
      
      <div 
        className="flex flex-col gap-6 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#FFFDF8] dark:from-[#0F1D32] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#FFFDF8] dark:from-[#0F1D32] to-transparent pointer-events-none" />

        {/* First Row - Scrolling Left */}
        <div className="flex w-max overflow-hidden">
          <div className={cn("flex gap-4 px-2 w-max animate-marquee", isPaused && "[animation-play-state:paused]")}>
            {[...row1, ...row1, ...row1].map((tech, i) => (
              <div 
                key={i} 
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap hover:border-[#B8860B] dark:hover:border-[#D4A843] hover:text-[#B8860B] dark:hover:text-[#D4A843] transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="flex w-max overflow-hidden">
          <div className={cn("flex gap-4 px-2 w-max animate-marquee-reverse", isPaused && "[animation-play-state:paused]")}>
            {[...row2, ...row2, ...row2].map((tech, i) => (
              <div 
                key={i} 
                className="px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap hover:border-[#B8860B] dark:hover:border-[#D4A843] hover:text-[#B8860B] dark:hover:text-[#D4A843] transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
      `}</style>
    </div>
  );
}
