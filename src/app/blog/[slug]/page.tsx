import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { BlogCard } from '@/components/features/BlogCard';
import { blogPostsData as blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/utils/format-date';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { ShareButton } from './ShareButton';

// App router dynamic params in Next.js 15+ needs to be awaited
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | Radhe's Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Find related posts (same category, excluding current, max 3)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // Fallback for full url
  const fullUrl = `https://portfolio.com/blog/${post.slug}`;

  return (
    <article className="min-h-screen">
      {/* Header section with light background */}
      <div className="pt-24 pb-12 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[#7C3AED] dark:text-slate-400 dark:hover:text-[#D4A843] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8">
            <Badge className="mb-6 bg-[#7C3AED]/10 text-[#7C3AED] dark:bg-[#D4A843]/10 dark:text-[#D4A843] hover:bg-[#7C3AED]/20 border-none">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-[#1E293B] dark:text-[#F1F5F9]">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <Section id="post-content" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="flex-1">
              {post.coverImage && (
                <div className="mb-12 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                </div>
              )}

              <div 
                className="prose dark:prose-invert max-w-none prose-a:text-[#7C3AED] dark:prose-a:text-[#D4A843] prose-headings:text-[#1E293B] dark:prose-headings:text-[#F1F5F9] prose-img:rounded-xl mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags & Sharing */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mr-2 flex items-center">
                    Tags:
                  </span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-slate-600 dark:text-slate-300">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Share this article:
                  </span>
                  <ShareButton title={post.title} url={fullUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section id="related-posts" className="py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </Section>
      )}
    </article>
  );
}
