'use client';

import { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ShareButton({ url }: { title?: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm"
      onClick={handleCopy}
      className="flex items-center gap-2 rounded-full border-slate-200 dark:border-slate-700"
    >
      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Link2 className="w-4 h-4" />}
      {copied ? 'Copied!' : 'Copy Link'}
    </Button>
  );
}
