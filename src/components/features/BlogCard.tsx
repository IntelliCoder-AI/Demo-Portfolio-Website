import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <Card className="h-full flex flex-col overflow-hidden bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg hover:shadow-xl hover:shadow-[#B8860B]/10 dark:hover:shadow-[#D4A843]/10 transition-all duration-300 hover:-translate-y-2 rounded-2xl">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage || '/placeholder-blog.jpg'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#7C3AED] hover:bg-[#6D28D9] dark:bg-[#A78BFA] dark:text-slate-900 text-white border-0 shadow-md">
              {post.category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-6">
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1"><Calendar size={12} /> {formattedDate}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readingTime} min read</span>
          </div>

          <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-[#B8860B] dark:group-hover:text-[#D4A843] transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags?.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
