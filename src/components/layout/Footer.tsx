import React from 'react';
import Link from 'next/link';
import { Container } from './Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#B8860B] to-[#D4A843] bg-clip-text text-transparent">
                R.
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Software Engineer | Python Full Stack Developer | AWS Cloud Enthusiast crafting premium digital experiences.
            </p>
            <div className="flex gap-4">
              {/* Social links placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#B8860B] hover:text-white transition-colors">
                GH
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#B8860B] hover:text-white transition-colors">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-[#B8860B] hover:text-white transition-colors">
                X
              </a>
            </div>
          </div>
          
          {/* Col 2 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-slate-600 dark:text-slate-400 hover:text-[#B8860B] dark:hover:text-[#D4A843] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Col 3 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Contact</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>radhe@example.com</li>
              <li>India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {currentYear} Radhe. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
