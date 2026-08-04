'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export const Toast = () => {
  const { toasts, removeToast } = useToast();

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-500" />,
  };

  const bgColors = {
    success: "bg-white dark:bg-[#1C2F4A] border-green-200 dark:border-green-900",
    error: "bg-white dark:bg-[#1C2F4A] border-red-200 dark:border-red-900",
    info: "bg-white dark:bg-[#1C2F4A] border-blue-200 dark:border-blue-900",
    warning: "bg-white dark:bg-[#1C2F4A] border-amber-200 dark:border-amber-900",
  };

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={cn(
              "pointer-events-auto w-full max-w-sm overflow-hidden rounded-xl border shadow-lg flex",
              bgColors[toast.type || 'info']
            )}
            role="alert"
          >
            <div className="flex items-start p-4 gap-3 w-full">
              <div className="flex-shrink-0 mt-0.5">
                {icons[toast.type || 'info']}
              </div>
              <div className="flex-1 w-0">
                {toast.message && (
                  <h3 className="text-sm font-medium text-slate-900 dark:text-white">
                    {toast.message}
                  </h3>
                )}
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="flex-shrink-0 ml-4 inline-flex text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* Optional Progress bar here if auto-dismissing */}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
