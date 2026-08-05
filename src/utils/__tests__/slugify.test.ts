import { describe, it, expect } from 'vitest';
import { slugify } from '../slugify';

describe('slugify utility', () => {
  it('should convert a simple string to a slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should handle leading and trailing spaces', () => {
    expect(slugify('  Hello World  ')).toBe('hello-world');
  });

  it('should replace ampersands with "and"', () => {
    expect(slugify('Design & Development')).toBe('design-and-development');
  });

  it('should remove special characters', () => {
    expect(slugify('React, Next.js & Tailwind!')).toBe('react-nextjs-and-tailwind');
  });

  it('should replace multiple spaces with a single dash', () => {
    expect(slugify('Hello    World')).toBe('hello-world');
  });

  it('should handle numbers', () => {
    expect(slugify('Top 10 Frameworks in 2024')).toBe('top-10-frameworks-in-2024');
  });
});
