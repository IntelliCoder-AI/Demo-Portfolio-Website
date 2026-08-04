import React from 'react';
import { cn } from '@/lib/utils';

export interface GradientBlobProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export const GradientBlob: React.FC<GradientBlobProps> = ({
  className,
  color = 'primary',
}) => {
  const colors = {
    primary: "bg-[#B8860B]/20 dark:bg-[#D4A843]/10",
    secondary: "bg-[#7C3AED]/20 dark:bg-[#A78BFA]/10",
    accent: "bg-amber-500/20 dark:bg-amber-400/10",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none rounded-full blur-[100px] animate-pulse",
        colors[color],
        className
      )}
      style={{ animationDuration: '8s' }}
    />
  );
};
