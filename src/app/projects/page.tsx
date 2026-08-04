import { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects | Radhe',
  description: 'Explore Radhe\'s portfolio of projects including cloud dashboards, AI tools, and full-stack applications.',
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
