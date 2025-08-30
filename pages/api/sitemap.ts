// pages/api/sitemap.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getPosts } from '@/lib/sanity/client';
import { BlogEntry } from '@/types/sanity';

const SITE_URL = process.env.SITE_URL!;

interface SitemapUrl {
  loc: string;
  lastModified?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

// Function to generate sitemap XML
function generateSitemapXML(urls: SitemapUrl[]) {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

  const xmlFooter = `</urlset>`;

  const urlEntries = urls
    .map(url => {
      const lastmod = url.lastModified ? new Date(url.lastModified).toISOString() : new Date().toISOString();
      return `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${url.changefreq || 'weekly'}</changefreq>
          <priority>${url.priority || '0.7'}</priority>
        </url>`;
    })
    .join('\n');

  return `${xmlHeader}\n${urlEntries}\n${xmlFooter}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Cache: 1 hour in CDN, 1 day for stale revalidate
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    res.setHeader('Content-Type', 'application/xml');

    // Get posts from Sanity
    const blogPosts = await getPosts({ 
      filterLegal: false, // Include all posts including Legal category for sitemap
      orderBy: 'publishedAt',
      orderDirection: 'desc'
    });

    // Static URLs
    const staticPages: SitemapUrl[] = [
      {
        loc: `${SITE_URL}/`,
        changefreq: 'daily',
        priority: '1.0',
        lastModified: new Date().toISOString(),
      },
      {
        loc: `${SITE_URL}/blog`,
        changefreq: 'daily',
        priority: '0.9',
        lastModified: new Date().toISOString(),
      },
    ];

    // Dynamic URLs from posts
    const blogUrls: SitemapUrl[] = blogPosts.map((post: BlogEntry) => ({
      loc: `${SITE_URL}/blog/${post.slug.current}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastModified: post.publishedAt,
    }));

    // Combine all URLs
    const allUrls: SitemapUrl[] = [...staticPages, ...blogUrls];

    // Generate XML
    const sitemapXML = generateSitemapXML(allUrls);

    // Send response
    res.status(200).send(sitemapXML);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ message: 'Error generating sitemap' });
  }
}
