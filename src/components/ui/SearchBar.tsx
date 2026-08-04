'use client';

import React, { InputHTMLAttributes, forwardRef } from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, value, onChange, placeholder = 'Search...', ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full group", className)}>
        <Search className="absolute left-3 w-5 h-5 text-slate-400 group-focus-within:text-[#B8860B] transition-colors" />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-11 pl-10 pr-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1C2F4A] text-sm text-slate-900 dark:text-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-[#B8860B]/50 focus:border-[#B8860B] placeholder:text-slate-500"
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);
SearchBar.displayName = 'SearchBar';
