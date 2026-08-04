import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | Radhe',
  description: 'Technical articles and insights by Radhe on Python, AWS, FastAPI, AI/ML, and software engineering best practices.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
