'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="relative overflow-hidden h-full flex flex-col bg-white/10 dark:bg-slate-900/30 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl rounded-2xl">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || '/placeholder-project.jpg'}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#B8860B] dark:bg-[#D4A843] rounded-full text-white hover:scale-110 transition-transform">
                <ExternalLink size={20} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-white hover:scale-110 transition-transform">
                <Code2 size={20} />
              </a>
            )}
          </div>
          {project.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#B8860B] hover:bg-[#D4A843] text-white border-0 shadow-lg">Featured</Badge>
            </div>
          )}
        </div>
        
        <Link href={`/projects/${project.id || project.slug}`} className="flex-grow flex flex-col p-6">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-100 group-hover:text-[#B8860B] dark:group-hover:text-[#D4A843] transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
            {project.technologies?.slice(0, 4).map((tech, i) => (
              <Badge key={i} variant="outline" className="text-xs text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700">
                {typeof tech === 'string' ? tech : tech.name}
              </Badge>
            ))}
            {project.technologies && project.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs text-slate-500 dark:text-slate-400 border-slate-300 dark:border-slate-700">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </Link>
      </Card>
    </motion.div>
  );
}
