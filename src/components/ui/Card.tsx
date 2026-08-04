import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'bordered' | 'elevated';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = "rounded-2xl p-6 transition-all duration-300";
    
    const variants = {
      default: "bg-white dark:bg-[#1C2F4A] border border-slate-200 dark:border-slate-700/50",
      glass: "relative overflow-hidden bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl",
      bordered: "bg-transparent border border-transparent [background:linear-gradient(theme(colors.white),theme(colors.white))_padding-box,linear-gradient(to_right,#B8860B,#D4A843)_border-box] dark:[background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(to_right,#B8860B,#D4A843)_border-box]",
      elevated: "bg-white dark:bg-[#1C2F4A] shadow-xl hover:shadow-2xl hover:-translate-y-1 border border-slate-100 dark:border-slate-800",
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';
