import type { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt generation.
 * Next.js automatically serves this at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://radhe.dev/sitemap.xml',
  };
}
