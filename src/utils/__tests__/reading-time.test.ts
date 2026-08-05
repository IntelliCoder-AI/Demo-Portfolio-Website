import { describe, it, expect } from 'vitest';
import { calculateReadingTime } from '../reading-time';

describe('calculateReadingTime utility', () => {
  it('should return 1 minute for empty or very short content', () => {
    expect(calculateReadingTime('Short content')).toBe(1);
    expect(calculateReadingTime('')).toBe(1); // Since split creates 1 array item (empty string) and Math.ceil(1/200) is 1
  });

  it('should calculate time correctly based on 200 words per minute', () => {
    // Generate exactly 400 words
    const content = Array(400).fill('word').join(' ');
    expect(calculateReadingTime(content)).toBe(2);
  });

  it('should round up to the next minute', () => {
    // Generate 201 words, which is 1.005 minutes -> rounds up to 2
    const content = Array(201).fill('word').join(' ');
    expect(calculateReadingTime(content)).toBe(2);
  });
});
