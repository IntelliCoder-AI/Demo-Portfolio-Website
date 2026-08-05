'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { ProjectFilter } from '@/components/features/ProjectFilter';
import { ProjectCard } from '@/components/features/ProjectCard';
import { projectsData as projects } from '@/data/projects';
import { useDebounce } from '@/hooks/use-debounce';
import { filterItems } from '@/utils/filter';

const CATEGORIES = ['All', 'Frontend', 'Full-Stack', 'Backend', 'Cloud', 'AI/ML'];

export default function ProjectsPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredProjects = useMemo(() => {
    let result = projects;
    
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory || p.technologies.some(t => t.name === activeCategory));
    }
    
    if (debouncedSearch) {
      result = filterItems(result, { search: debouncedSearch, getSearchFieldsFn: (p) => [p.title, p.description, ...p.technologies.map(t => t.name)], getCategoryFn: (p) => p.category });
    }
    
    return result;
  }, [activeCategory, debouncedSearch]);

  return (
    <PageWrapper>
      <Section className="pt-24 pb-12">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Projects', href: '/projects' }]} className="mb-8" />
          
          <div className="max-w-3xl mb-12">
            <AnimatedText 
              text="My Projects" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#D4A843] mb-4"
            />
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Building impactful solutions with modern technologies. Explore my portfolio of applications, tools, and platforms.
            </p>
          </div>

          <ProjectFilter 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <motion.div layout className="mt-12 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id || project.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center col-span-full"
                >
                  <p className="text-xl text-slate-500 dark:text-slate-400">No projects found matching your criteria.</p>
                  <button 
                    onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                    className="mt-4 text-[#7C3AED] dark:text-[#D4A843] hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
