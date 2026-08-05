import { TimelineItem } from './TimelineItem';
import type { Experience } from '@/types';

interface TimelineProps {
  items: Experience[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-5xl mx-auto py-10 px-4 md:px-0">
      {/* Vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#B8860B] via-[#7C3AED] to-transparent dark:from-[#D4A843] dark:via-[#A78BFA] md:-ml-[2px] rounded-full opacity-50" />
      
      <div className="relative z-10 flex flex-col gap-12">
        {items.map((item, index) => (
          <TimelineItem 
            key={item.id || index} 
            experience={item} 
            index={index} 
            isLast={index === items.length - 1} 
          />
        ))}
      </div>
    </div>
  );
}
