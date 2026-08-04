'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

/**
 * Theme provider wrapper for dark/light mode support.
 * Uses next-themes with class-based strategy for Tailwind CSS compatibility.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
