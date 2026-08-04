import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'card' | 'avatar' | 'image';
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = 'text', ...props }, ref) => {
    const variants = {
      text: "h-4 rounded-md w-full",
      card: "h-48 rounded-2xl w-full",
      avatar: "h-12 w-12 rounded-full",
      image: "aspect-video rounded-xl w-full",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "animate-pulse bg-slate-200 dark:bg-slate-800",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Skeleton.displayName = 'Skeleton';
