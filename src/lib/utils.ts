import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge Tailwind classes with clsx for conditional classNames */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
