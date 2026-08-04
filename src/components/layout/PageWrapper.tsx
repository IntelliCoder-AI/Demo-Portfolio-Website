'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
