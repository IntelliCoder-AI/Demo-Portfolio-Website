'use client';

import { ToastProvider as ToastContextProvider } from '@/hooks/use-toast';

/**
 * Client-side providers wrapper.
 * Wraps children with all necessary client context providers.
 */
export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <ToastContextProvider>{children}</ToastContextProvider>;
}
