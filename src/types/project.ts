export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'backend' | 'cloud' | 'ai-ml' | 'tools';

export interface ProjectTech {
  name: string;
  icon?: string; // Lucide icon name
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  technologies: ProjectTech[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedAt: string; // ISO date
  highlights: string[];
}
