import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { SocialLinks } from '@/components/features/SocialLinks';
import { personalInfo } from '@/data/personal';
import { Code2, Users, BookOpen, GitBranch, Heart, Lightbulb, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | ' + personalInfo.name,
  description: personalInfo.bio,
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'About', href: '/about' },
            ]}
          />
        </div>
      </div>

      <Section id="about-intro" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Decorative Initial */}
            <div className="relative flex justify-center items-center h-80 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-amber-500/10 dark:from-purple-500/20 dark:to-amber-500/20 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-white dark:bg-[#1a2a40] rounded-3xl shadow-xl transform -rotate-3 border border-slate-100 dark:border-slate-800 flex justify-center items-center overflow-hidden">
                <span className="text-[200px] font-bold bg-gradient-to-br from-[#7C3AED] to-[#D4A843] text-transparent bg-clip-text opacity-90">
                  R
                </span>
                {/* Floating Shapes */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-[#D4A843]/20 rounded-full blur-xl" />
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#7C3AED]/20 rounded-full blur-xl" />
              </div>
            </div>

            {/* Right Column: Bio */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#A78BFA] text-transparent bg-clip-text">
                About Me
              </h1>
              <div className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                <p className="mb-4">
                  Hello! I&apos;m {personalInfo.name}, a {personalInfo.title} based in {personalInfo.location}.
                </p>
                <p className="mb-4">
                  {personalInfo.bio}
                </p>
                <p className="mb-8">
                  My journey in software development is driven by a profound curiosity and a desire to build solutions that not only solve complex problems but also deliver exceptional user experiences. I thrive in environments that challenge me to learn and adapt, whether it&apos;s architecting a robust backend in Python and AWS or crafting a fluid, responsive frontend with Next.js and Tailwind CSS.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/resume"
                  className="inline-flex justify-center items-center px-6 py-3 bg-[#1E293B] dark:bg-[#D4A843] text-white dark:text-[#0F1D32] rounded-lg font-medium hover:bg-[#7C3AED] dark:hover:bg-[#B8860B] transition-colors shadow-lg shadow-slate-200 dark:shadow-none"
                >
                  View My Resume
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 py-3 bg-white dark:bg-[#1a2a40] text-[#1E293B] dark:text-[#F1F5F9] border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Let&apos;s Connect
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium uppercase tracking-wider">
                  Find me online
                </p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="philosophy" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293B] dark:text-[#F1F5F9]">
              My Philosophy
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Core principles that guide my approach to software engineering and problem-solving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a2a40] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/20 text-[#7C3AED] dark:text-[#A78BFA] rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1E293B] dark:text-[#F1F5F9]">Clean Code</h3>
              <p className="text-slate-600 dark:text-slate-400">
                I believe in writing maintainable, readable, and scalable code. Good architecture and clear documentation are just as important as the functionality itself.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a2a40] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-amber-100 dark:bg-amber-500/20 text-[#D4A843] rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1E293B] dark:text-[#F1F5F9]">User-Centric Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Technology should serve people. I strive to create intuitive, accessible interfaces and seamless experiences that delight end-users.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a2a40] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1E293B] dark:text-[#F1F5F9]">Continuous Learning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                The tech landscape evolves rapidly. I embrace lifelong learning, constantly exploring new tools, frameworks, and methodologies to stay ahead.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#1a2a40] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6">
                <GitBranch className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1E293B] dark:text-[#F1F5F9]">Open Source & Collaboration</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Great software is built by teams. I value open communication, constructive feedback, and contributing to the broader developer community.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="beyond-code" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E293B] dark:text-[#F1F5F9]">
                Beyond Code
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                When I&apos;m not staring at a terminal or debugging, you can find me exploring other passions that keep me inspired and balanced.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {[
                { icon: Rocket, label: 'Cloud Tech', color: 'text-orange-500' },
                { icon: Lightbulb, label: 'AI/ML', color: 'text-yellow-500' },
                { icon: Users, label: 'Tech Meetups', color: 'text-blue-500' },
                { icon: BookOpen, label: 'Reading', color: 'text-purple-500' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-[#1a2a40] rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <item.icon className={`w-10 h-10 mb-3 ${item.color}`} />
                  <span className="font-medium text-[#1E293B] dark:text-[#F1F5F9]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
