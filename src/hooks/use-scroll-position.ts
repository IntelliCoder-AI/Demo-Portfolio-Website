'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

/**
 * Custom hook to track scroll position with throttling
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
          });
          timeoutId = null;
        }, 100); // 100ms throttle
      }
    };

    // Set initial position
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return scrollPosition;
}
