import { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/features/HeroSection';
import { TechStack } from '@/components/features/TechStack';
import { ProjectCard } from '@/components/features/ProjectCard';
import { StatCard } from '@/components/features/StatCard';
import { TestimonialSlider } from '@/components/features/TestimonialSlider';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { projectsData } from '@/data/projects';
import { testimonialsData } from '@/data/testimonials';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Radhe | Software Engineer & Python Full Stack Developer',
  description: 'Passionate Software Engineer specializing in Python, React, Next.js, TypeScript, FastAPI, AWS, and AI-powered applications.',
};

export default function Home() {
  const featuredProjects = projectsData.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <HeroSection />
      
      <TechStack />

      <Section id="featured-projects" className="bg-slate-50 dark:bg-[#0F1D32]">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
              Featured Work
            </h2>
            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
              A selection of my best projects and applications.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section id="stats" className="border-y border-slate-200 dark:border-slate-800">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Years Experience"
            value="5+"
            icon={<Code className="h-6 w-6" />}
          />
          <StatCard
            label="Projects Delivered"
            value="30+"
            icon={<Zap className="h-6 w-6" />}
          />
          <StatCard
            label="Happy Clients"
            value="15+"
            icon={<Users className="h-6 w-6" />}
          />
          <StatCard
            label="Open Source"
            value="500+"
            icon={<Code className="h-6 w-6" />}
          />
        </div>
      </Section>

      <Section id="testimonials" className="bg-white dark:bg-[#0F1D32]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
            What people say about working with me.
          </p>
        </div>
        
        <TestimonialSlider testimonials={testimonialsData} />
      </Section>

      <Section id="cta" className="bg-slate-50 dark:bg-slate-900/50">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            I'm currently available for freelance work and open to new full-time opportunities.
            If you have a project that needs some creative touch, I'd love to hear about it.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-[#D4A843] dark:hover:bg-[#B8860B] dark:text-slate-900">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
