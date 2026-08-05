import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Section } from '@/components/layout/Section';
import { ContactForm } from '@/components/features/ContactForm';
import { SocialLinks } from '@/components/features/SocialLinks';
import { GradientBlob } from '@/components/ui/GradientBlob';
import { personalInfo } from '@/data/personal';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | ' + personalInfo.name,
  description: 'Get in touch for collaborations, opportunities, or just to say hi.',
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30">
        <GradientBlob color="primary" />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-20">
        <GradientBlob color="secondary" />
      </div>

      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
        </div>
      </div>

      <Section id="contact" className="py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#1E293B] to-[#7C3AED] dark:from-[#F1F5F9] dark:to-[#D4A843] text-transparent bg-clip-text">
              Get In Touch
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Whether you have a question, a project proposal, or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <div className="bg-white/80 dark:bg-[#1a2a40]/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
              <ContactForm />
            </div>

            {/* Right: Contact Information */}
            <div className="flex flex-col space-y-8 lg:mt-8">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-[#7C3AED] dark:text-[#A78BFA] rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-1">Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className="text-slate-600 dark:text-slate-400 hover:text-[#7C3AED] dark:hover:text-[#D4A843] transition-colors text-lg">
                    {personalInfo.email}
                  </a>
                  <p className="text-sm text-slate-500 mt-1">Drop me a line anytime!</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/30 text-[#D4A843] rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-1">Location</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    {personalInfo.location}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Available for remote work worldwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-1">Current Status</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Open to opportunities
                  </p>
                  <p className="text-sm text-slate-500 mt-1">Usually responds within 24-48 hours</p>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-[#1E293B] dark:text-[#F1F5F9] mb-6">Connect across platforms</h3>
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
