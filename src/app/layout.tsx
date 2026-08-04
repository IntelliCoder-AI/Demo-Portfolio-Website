import type { Metadata, Viewport } from 'next';
import { inter, jetbrainsMono } from '@/lib/fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/ui/ScrollToTop';
import { Toast } from '@/components/ui/Toast';
import '@/app/globals.css';

/**
 * Root metadata for SEO.
 * Individual pages can override using their own metadata exports.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://radhe.dev'),
  title: {
    default: 'Radhe | Software Engineer & Python Full Stack Developer',
    template: '%s | Radhe',
  },
  description:
    'Passionate Software Engineer specializing in Python, React, Next.js, TypeScript, FastAPI, AWS, and AI-powered applications. Building scalable web applications and cloud-native solutions.',
  keywords: [
    'Software Engineer',
    'Python Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'FastAPI',
    'AWS',
    'Cloud',
    'AI',
    'Portfolio',
  ],
  authors: [{ name: 'Radhe', url: 'https://radhe.dev' }],
  creator: 'Radhe',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://radhe.dev',
    siteName: 'Radhe Portfolio',
    title: 'Radhe | Software Engineer & Python Full Stack Developer',
    description:
      'Passionate Software Engineer specializing in Python, React, Next.js, TypeScript, FastAPI, AWS, and AI-powered applications.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Radhe - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radhe | Software Engineer & Python Full Stack Developer',
    description:
      'Passionate Software Engineer specializing in Python, React, Next.js, TypeScript, FastAPI, AWS, and AI-powered applications.',
    creator: '@radhe_dev',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://radhe.dev',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFDF8' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1D32' },
  ],
  width: 'device-width',
  initialScale: 1,
};

/**
 * Root layout - wraps all pages with global providers, navigation, and footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Radhe',
              url: 'https://radhe.dev',
              jobTitle: 'Software Engineer',
              description:
                'Passionate Software Engineer specializing in Python, React, Next.js, TypeScript, FastAPI, AWS, and AI-powered applications.',
              sameAs: [
                'https://github.com/radhe-dev',
                'https://linkedin.com/in/radhe-dev',
                'https://twitter.com/radhe_dev',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <ClientProviders>
            {/* Skip to content link for accessibility */}
            <a
              href="#main-content"
              className="skip-to-content"
            >
              Skip to main content
            </a>

            {/* Navigation */}
            <Navbar />

            {/* Main content */}
            <main id="main-content" className="min-h-screen">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Global UI overlays */}
            <ScrollToTop />
            <Toast />
          </ClientProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
