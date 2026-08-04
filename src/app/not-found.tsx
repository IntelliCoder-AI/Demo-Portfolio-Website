'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * Custom 404 Not Found page.
 * Shown when a route doesn't match any existing pages.
 */
export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-lg">
        {/* Large 404 number with gradient */}
        <h1 className="gradient-text mb-2 text-[8rem] font-black leading-none tracking-tighter sm:text-[10rem]">
          404
        </h1>

        {/* Decorative line */}
        <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-[#B8860B] to-[#7C3AED]" />

        {/* Message */}
        <h2 className="mb-3 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mb-8 text-[var(--text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#B8860B] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[#D4A843] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2 active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <button
            onClick={() => {
              if (typeof window !== 'undefined') window.history.back();
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-color)] bg-transparent px-6 py-3 font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-[#B8860B] hover:text-[#B8860B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B] focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
