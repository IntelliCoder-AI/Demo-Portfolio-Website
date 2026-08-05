'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function TechStack() {
  const [isPaused, setIsPaused] = useState(false);

  const row1 = [
    'React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS',
    'AWS', 'Terraform', 'Docker', 'Kubernetes (Basics)', 'Git & GitHub',
    'GitHub Actions', 'Ansible', 'Linux', 'Windows', 'VS Code', 'Jupyter Notebook', 'Google Colab'
  ];
  
  const row2 = [
    'Python', 'Java', 'FastAPI', 'Flask', 'REST APIs', 'SQL',
    'MySQL', 'PostgreSQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn',
    'LangChain', 'LangGraph', 'CrewAI', 'AI', 'ML', 'DL'
  ];

  return (
    <div className="w-full overflow-hidden py-12">
      <div className="max-w-7xl mx-auto mb-8 px-4 text-center">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Technologies I Work With</h3>
      </div>
      
      <div 
        className="flex flex-col gap-6 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >

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
