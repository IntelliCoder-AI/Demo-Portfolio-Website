import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Spinner } from './Spinner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: ReactNode;
  href?: string;
  target?: string;
  download?: boolean | string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      icon,
      href,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] hover:scale-[1.02] hover:shadow-lg";
    
    const variants = {
      primary: "bg-gradient-to-r from-[#B8860B] to-[#D4A843] text-white shadow-md hover:shadow-[#B8860B]/25 border border-transparent",
      secondary: "bg-[#7C3AED] text-white shadow-md hover:shadow-purple-500/25 border border-transparent",
      outline: "border-2 border-[#B8860B] text-[#B8860B] dark:text-[#D4A843] bg-transparent hover:bg-[#B8860B]/10",
      ghost: "bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };
    
    const classes = cn(baseStyles, variants[variant], sizes[size], className);
    
    const content = (
      <>
        {isLoading && <Spinner size="sm" className="mr-2" />}
        {!isLoading && icon && <span className="mr-2">{icon}</span>}
        {children}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as React.ComponentPropsWithoutRef<'a'>)}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        disabled={disabled || isLoading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);
Button.displayName = 'Button';
