import { Spinner } from '@/components/ui/Spinner';

/**
 * Global loading UI.
 * Displayed automatically by Next.js when route segments are loading.
 * Wrapped in a Suspense boundary by the framework.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center">
      <Spinner size="lg" />
      <p className="mt-4 text-sm text-[var(--text-muted)] animate-pulse">
        Loading...
      </p>
    </div>
  );
}
