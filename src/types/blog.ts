export type BlogCategory = 'engineering' | 'cloud' | 'ai-ml' | 'career' | 'tutorial' | 'devops';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Full content in HTML-like markdown
  category: BlogCategory;
  tags: string[];
  coverImage: string;
  author: string;
  publishedAt: string; // ISO date
  readingTime: number; // minutes
  featured: boolean;
}
