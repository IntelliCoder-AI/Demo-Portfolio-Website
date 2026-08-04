import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
}

export const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className,
  ...props
}) => {
  return (
    <section className={cn("py-16 md:py-24", className)} {...props}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#B8860B] to-[#D4A843] bg-clip-text text-transparent inline-block mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
