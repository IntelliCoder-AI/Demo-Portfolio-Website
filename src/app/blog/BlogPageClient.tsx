'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { BlogFilter } from '@/components/features/BlogFilter';
import { BlogCard } from '@/components/features/BlogCard';
import { blogPostsData as blogPosts } from '@/data/blog-posts';
import { filterItems } from '@/utils/filter';
import { useDebounce } from '@/hooks/use-debounce';

const CATEGORIES = ['All', 'Engineering', 'Cloud', 'AI/ML', 'Career', 'Tutorial', 'DevOps'];

export default function BlogPageClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredPosts = filterItems(blogPosts, {
    category: activeCategory === 'All' ? undefined : activeCategory,
    search: debouncedSearch,
    getCategoryFn: (post) => {
      // Map category back to normal string if needed
      if (post.category === 'ai-ml') return 'AI/ML';
      return post.category;
    },
    getSearchFieldsFn: (post) => [post.title, post.excerpt, ...post.tags],
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <div className="pt-24 pb-16">
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
            ]}
            className="mb-8"
          />

          <div className="max-w-3xl mb-16">
            <AnimatedText
              text="Blog"
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#D4A843] dark:from-[#D4A843] dark:to-[#FDE047]"
            />
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400">
              Sharing my insights, learnings, and experiences in software engineering, cloud architecture, and AI development.
            </p>
          </div>

          {featuredPost && activeCategory === 'All' && !debouncedSearch && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">Featured Post</h2>
              <div className="w-full md:w-2/3 lg:w-1/2">
                <BlogCard post={featuredPost} />
              </div>
            </div>
          )}

          <BlogFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {filteredPosts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-slate-500 dark:text-slate-400">
                No blog posts found matching your criteria.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
