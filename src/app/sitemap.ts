import type { MetadataRoute } from 'next';

/**
 * Dynamic sitemap generation.
 * Next.js automatically serves this at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://radhe.dev';

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/skills',
    '/projects',
    '/experience',
    '/certifications',
    '/blog',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // In the future, dynamic blog post URLs can be added here
  // by importing blog post slugs from the data layer

  return staticPages;
}
