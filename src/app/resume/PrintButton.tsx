'use client';

import { Printer } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function PrintButton() {
  return (
    <Button 
      variant="outline" 
      onClick={() => window.print()}
      className="flex items-center gap-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
    >
      <Printer className="w-4 h-4" />
      Print
    </Button>
  );
}
