'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';
// You'll need to create this data file if it doesn't exist
// import { navItems } from '@/data/navigation';
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Opacity effect
      setIsScrolled(currentScrollY > 20);
      
      // Hide/Show on scroll direction
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled 
            ? "bg-white/70 dark:bg-[#0F1D32]/70 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-white/10" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#B8860B] to-[#D4A843] bg-clip-text text-transparent transition-transform group-hover:scale-110">
                R.
              </span>
              <span className="text-xl font-semibold text-slate-900 dark:text-white hidden sm:block">
                Radhe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[#B8860B] dark:hover:text-[#D4A843] relative py-2",
                      isActive ? "text-[#B8860B] dark:text-[#D4A843]" : "text-slate-600 dark:text-slate-300"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B8860B] to-[#D4A843] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right section */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 lg:hidden text-slate-600 dark:text-slate-300 hover:text-[#B8860B] dark:hover:text-[#D4A843] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8860B]/50 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navItems={navItems}
      />
    </>
  );
};
