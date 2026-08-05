import { Quote, Star } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full p-8 flex flex-col relative bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-2xl">
      <Quote className="absolute top-6 right-6 text-[#B8860B]/10 dark:text-[#D4A843]/10 rotate-180" size={64} />
      
      <div className="flex gap-1 mb-4 text-[#B8860B] dark:text-[#D4A843]">
        {[...Array(testimonial.rating || 5)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      
      <blockquote className="flex-grow text-slate-600 dark:text-slate-300 italic mb-6 relative z-10 leading-relaxed text-lg">
        &quot;{testimonial.content}&quot;
      </blockquote>
      
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#B8860B] to-[#D4A843] flex items-center justify-center text-white font-bold text-lg shadow-md">
          {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-slate-100">{testimonial.name}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {testimonial.role} {testimonial.company && <span>at {testimonial.company}</span>}
          </p>
        </div>
      </div>
    </Card>
  );
}
