import { Code2, Users, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
// Note: assuming personal info is available or fallback
import { personalInfo } from '@/data/personal';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  variant?: 'default' | 'card';
}

export function SocialLinks({ className, iconSize = 20, variant = 'default' }: SocialLinksProps) {
  const links = [
    { name: 'GitHub', url: personalInfo?.socialLinks?.github || 'https://github.com', icon: Code2 },
    { name: 'LinkedIn', url: personalInfo?.socialLinks?.linkedin || 'https://linkedin.com', icon: Users },
    { name: 'Twitter', url: personalInfo?.socialLinks?.twitter || 'https://twitter.com', icon: MessageCircle },
    { name: 'Email', url: `mailto:${personalInfo?.email || 'contact@example.com'}`, icon: Mail },
  ];

  if (variant === 'card') {
    return (
      <div className={cn("flex flex-wrap gap-4", className)}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="p-4 bg-white/5 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-[#B8860B]/10 hover:border-[#B8860B]/30 dark:hover:bg-[#D4A843]/10 dark:hover:border-[#D4A843]/30 text-slate-600 dark:text-slate-400 hover:text-[#B8860B] dark:hover:text-[#D4A843] transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
          >
            <link.icon size={iconSize} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-slate-500 hover:text-[#B8860B] dark:text-slate-400 dark:hover:text-[#D4A843] transition-colors duration-300 hover:scale-110"
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
