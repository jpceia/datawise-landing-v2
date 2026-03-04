import {NextResponse} from 'next/server';
import {getPosts} from '@/lib/sanity/client';
import {BlogEntry} from '@/types/sanity';

const SITE_URL = process.env.SITE_URL || 'https://www.datawise.pt';

interface SitemapUrl {
  loc: string;
  lastModified?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

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

export async function GET() {
  try {
    const blogPosts = await getPosts({
      filterLegal: false,
      orderBy: 'publishedAt',
      orderDirection: 'desc'
    });

    const staticPages: SitemapUrl[] = [
      {
        loc: `${SITE_URL}/`,
        changefreq: 'daily',
        priority: '1.0',
        lastModified: new Date().toISOString()
      },
      {
        loc: `${SITE_URL}/blog`,
        changefreq: 'daily',
        priority: '0.9',
        lastModified: new Date().toISOString()
      }
    ];

    const blogUrls: SitemapUrl[] = blogPosts.map((post: BlogEntry) => ({
      loc: `${SITE_URL}/${post.slug.current}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastModified: post.publishedAt
    }));

    const sitemapXML = generateSitemapXML([...staticPages, ...blogUrls]);

    return new NextResponse(sitemapXML, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/xml'
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);

    return NextResponse.json({message: 'Error generating sitemap'}, {status: 500});
  }
}
