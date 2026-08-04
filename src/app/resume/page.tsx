import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/personal';
import { experienceData as experience } from '@/data/experience';
import { skillsData as skills } from '@/data/skills';
import { certificationsData as certifications } from '@/data/certifications';
import { Download, Mail, MapPin, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';
import { PrintButton } from './PrintButton';

export const metadata: Metadata = {
  title: 'Resume | ' + personalInfo.name,
  description: 'Professional resume and curriculum vitae.',
};

export default function ResumePage() {
  return (
    <>
      <div className="pt-24 pb-8 bg-slate-50 dark:bg-[#0F1D32] print:hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resume', href: '/resume' },
            ]}
          />
        </div>
      </div>

      <Section id="resume" className="py-12 md:py-16 bg-slate-50 dark:bg-[#0F1D32] print:py-0 print:bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Action Bar */}
          <div className="flex justify-end gap-4 mb-8 print:hidden">
            <PrintButton />
            <Button 
              className="flex items-center gap-2 bg-[#1E293B] dark:bg-[#D4A843] text-white dark:text-[#0F1D32] hover:bg-[#7C3AED] dark:hover:bg-[#B8860B]"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>

          {/* Resume Document */}
          <div className="bg-white dark:bg-[#1a2a40] print:bg-white shadow-2xl print:shadow-none rounded-2xl print:rounded-none p-8 md:p-12 border border-slate-100 dark:border-slate-800 print:border-none">
            
            {/* Header */}
            <header className="border-b border-slate-200 dark:border-slate-700 pb-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-2">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800 font-medium mb-6">
                {personalInfo.title}
              </p>
              
              <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 print:text-gray-600 text-sm">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4" />
                  <span>{personalInfo.socialLinks?.github || 'Portfolio'}</span>
                </div>
              </div>
            </header>

            {/* Summary */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800" />
                Professional Summary
              </h2>
              <p className="text-slate-700 dark:text-slate-300 print:text-gray-700 leading-relaxed">
                {personalInfo.bio} I have a strong foundation in modern web development, cloud computing, and software architecture, with a passion for delivering scalable, user-centric applications.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800" />
                Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 print:border-gray-300">
                    <div className="absolute w-3 h-3 bg-[#7C3AED] dark:bg-[#D4A843] print:bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                      <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 print:text-gray-500 bg-slate-100 dark:bg-slate-800 print:bg-transparent px-3 py-1 rounded-full">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                    <p className="text-lg font-medium text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800 mb-4">
                      {exp.company}
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 print:text-gray-700 mb-4">
                      {exp.description}
                    </p>
                    {exp.achievements && exp.achievements.length > 0 && (
                      <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-slate-400 print:text-gray-600">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800" />
                Technical Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary"
                    className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 print:border print:border-gray-300 print:bg-white print:text-black"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800" />
                Certifications & Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 print:border-gray-300">
                    <h3 className="font-bold text-[#1E293B] dark:text-[#F1F5F9] print:text-black mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-[#7C3AED] dark:text-[#D4A843] print:text-gray-800 text-sm mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 print:text-gray-500 text-sm">
                      Issued: {cert.issuedDate}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </Section>
    </>
  );
}
