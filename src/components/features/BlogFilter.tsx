'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SearchBar } from '@/components/ui/SearchBar'; 

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogFilter({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange
}: BlogFilterProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
      <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <div className="flex space-x-2 relative min-w-max px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeCategory === category 
                  ? "text-white dark:text-slate-900" 
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              )}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeBlogCategory"
                  className="absolute inset-0 bg-[#7C3AED] dark:bg-[#A78BFA] rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="w-full md:w-72">
        <SearchBar 
          value={searchQuery} 
          onChange={onSearchChange} 
          placeholder="Search articles..." 
        />
      </div>
    </div>
  );
}
