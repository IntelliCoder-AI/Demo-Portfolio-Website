import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { skillsData as skills } from '@/data/skills';
import { SkillCategorySection } from '@/components/features/SkillCategorySection';
import { Globe, Server, Cloud, Database, Brain, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Skills | Radhe',
  description: 'Technical skills, tools, and technologies I work with.',
};

export default function SkillsPage() {
  // Group skills by category ID
  const groupedSkills = skills.reduce((acc, skill) => {
    const categoryKey = typeof skill.category === 'string' ? skill.category : (skill.category as { id: string }).id;
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  // Assuming we map known category IDs to names/icons
  const categories = [
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'frontend', name: 'Frontend', icon: Globe },
    { id: 'database', name: 'Databases', icon: Database },
    { id: 'tools', name: 'Tools & Utilities', icon: Wrench },
  ];

  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Skills', href: '/skills' },
            ]}
          />
        </div>
      </div>

      <Section id="skills-header" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#A78BFA] text-transparent bg-clip-text">
              Technical Expertise
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A comprehensive overview of my technical skills, frameworks, and tools. I continuously learn and adapt to new technologies to build modern, scalable solutions.
            </p>
          </div>

          <div className="space-y-20">
            {categories.map((category) => {
              const categorySkills = groupedSkills[category.id];
              if (!categorySkills || categorySkills.length === 0) return null;
              
              // We pass the required props to SkillCategorySection, assuming it accepts category name, icon, and skills array
              return (
                <SkillCategorySection
                  key={category.id}
                  category={category.name}
                  title={category.name}
                  icon={<category.icon size={24} />}
                  skills={categorySkills}
                />
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
