'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * Error boundary for route segments.
 * Catches unhandled runtime errors and provides a retry mechanism.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console (replace with error reporting service in production)
    console.error('Route Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-md"
      >
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
          <AlertTriangle className="h-10 w-10 text-red-500" />
        </div>

        {/* Message */}
        <h2 className="mb-3 text-2xl font-bold text-[var(--text-primary)]">
          Something went wrong
        </h2>
        <p className="mb-8 text-[var(--text-secondary)]">
          An unexpected error occurred. Don&apos;t worry, you can try again and
          things should be back to normal.
        </p>

        {/* Retry button */}
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-xl bg-[#B8860B] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#D4A843] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 active:scale-[0.98]"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>

        {/* Error digest for debugging */}
        {error.digest && (
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            Error ID: {error.digest}
          </p>
        )}
      </motion.div>
    </div>
  );
}
