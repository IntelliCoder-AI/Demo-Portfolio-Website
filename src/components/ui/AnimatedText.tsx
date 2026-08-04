'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  variant?: 'fadeUp' | 'typewriter' | 'slideIn';
  className?: string;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  variant = 'fadeUp',
  className,
  delay = 0,
}) => {
  if (variant === 'typewriter') {
    const characters = Array.from(text);
    return (
      <motion.span className={cn("inline-block", className)}>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.1,
              delay: delay + index * 0.05,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  if (variant === 'slideIn') {
    return (
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay, ease: "easeOut" }}
          className={className}
        >
          {text}
        </motion.div>
      </div>
    );
  }

  // default: fadeUp (word by word)
  const words = text.split(' ');
  return (
    <motion.span className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.1,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
