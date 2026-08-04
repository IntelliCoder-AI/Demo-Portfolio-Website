import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { PageWrapper } from '@/components/layout/PageWrapper';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/Button';
import { Timeline } from '@/components/features/Timeline';
import { experienceData as experience } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience | Radhe',
  description: 'Radhe\'s professional experience as a Software Engineer, including roles at TechNova Solutions, CloudScale Inc., and WebCraft Studio.',
};

export default function ExperiencePage() {
  const workExperience = experience.filter((item) => item.type === 'work');
  const education = experience.filter((item) => item.type === 'education');

  return (
    <PageWrapper>
      <Section className="pt-24 pb-12">
        <Container>
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experience', href: '/experience' }]} className="mb-8" />
          
          <div className="max-w-3xl mb-16">
            <AnimatedText 
              text="Experience & Education" 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#D4A843] mb-4"
            />
            <p className="text-lg text-slate-600 dark:text-slate-300">
              My professional journey and educational background in software engineering.
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-slate-100">Work Experience</h2>
              <Timeline items={workExperience} />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-slate-100">Education</h2>
              <Timeline items={education} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-20 border-t border-slate-200 dark:border-slate-800">
        <Container>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Looking for more details?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Download my complete resume to see a full overview of my skills, experience, and education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                View My Resume
              </Button>
              <Button href="/resume.pdf" download variant="outline" size="lg">
                Download PDF
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
}
