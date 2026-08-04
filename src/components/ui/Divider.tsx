import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: 'default' | 'gradient' | 'dashed';
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: "border-slate-200 dark:border-slate-800",
      gradient: "border-transparent bg-gradient-to-r from-transparent via-[#B8860B] to-transparent h-[1px]",
      dashed: "border-slate-200 dark:border-slate-800 border-dashed",
    };

    return (
      <hr
        ref={ref}
        className={cn("w-full border-t my-8", variants[variant], className)}
        {...props}
      />
    );
  }
);
Divider.displayName = 'Divider';
