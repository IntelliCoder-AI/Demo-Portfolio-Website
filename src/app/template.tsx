'use client';

import { motion } from 'framer-motion';

/**
 * Page transition template.
 * Next.js App Router uses template.tsx for per-route animations.
 * Unlike layout.tsx, template creates a new instance for each navigation,
 * enabling entrance animations on every page change.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.22, 1, 0.36, 1],
        duration: 0.45,
      }}
    >
      {children}
    </motion.div>
  );
}
