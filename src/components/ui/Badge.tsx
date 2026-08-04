import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors";
    
    const variants = {
      default: "bg-[#F7F3ED] dark:bg-[#162742] text-[#475569] dark:text-[#CBD5E1]",
      primary: "bg-[#B8860B] text-white shadow-sm",
      secondary: "bg-[#7C3AED] text-white shadow-sm",
      outline: "border border-[#B8860B] text-[#B8860B] dark:border-[#D4A843] dark:text-[#D4A843]",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';
