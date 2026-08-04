/**
 * Estimates reading time in minutes (based on ~200 wpm)
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const noOfWords = content.trim().split(/\s+/).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
}
