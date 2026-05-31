import {NextResponse} from 'next/server';
import {getPosts} from '@/lib/sanity/client';
import {BlogEntry} from '@/types/sanity';
import {routing} from '@/i18n/routing';
import {localizedUrl} from '@/lib/seo';

/** BCP-47 hreflang value per locale, plus the x-default. */
const HREFLANG_BY_LOCALE: Record<string, string> = {
  pt: 'pt-PT',
  en: 'en'
};

interface SitemapEntry {
  path: string;
  lastModified?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: string;
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Builds one `<url>` block per (locale, entry), each declaring `xhtml:link`
 * alternates for every locale + x-default, so the bilingual structure is
 * explicit to crawlers.
 */
function buildUrlBlock(entry: SitemapEntry, currentLocale: string) {
  const lastmod = entry.lastModified ? new Date(entry.lastModified).toISOString() : new Date().toISOString();

  const alternates = [
    ...routing.locales.map(
      locale =>
        `    <xhtml:link rel="alternate" hreflang="${HREFLANG_BY_LOCALE[locale] ?? locale}" href="${escapeXml(localizedUrl(locale, entry.path))}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(localizedUrl(routing.defaultLocale, entry.path))}" />`
  ].join('\n');

  return `  <url>
    <loc>${escapeXml(localizedUrl(currentLocale, entry.path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq || 'weekly'}</changefreq>
    <priority>${entry.priority || '0.7'}</priority>
${alternates}
  </url>`;
}

function generateSitemapXML(entries: SitemapEntry[]) {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
  const xmlFooter = `</urlset>`;

  const blocks = entries
    .flatMap(entry => routing.locales.map(locale => buildUrlBlock(entry, locale)))
    .join('\n');

  return `${xmlHeader}\n${blocks}\n${xmlFooter}`;
}

export async function GET() {
  try {
    const blogPosts = await getPosts({
      filterLegal: false,
      orderBy: 'publishedAt',
      orderDirection: 'desc'
    });

    const staticPages: SitemapEntry[] = [
      {path: '', changefreq: 'daily', priority: '1.0'},
      {path: '/blog', changefreq: 'daily', priority: '0.9'}
    ];

    const blogUrls: SitemapEntry[] = blogPosts.map((post: BlogEntry) => ({
      path: `/${post.slug.current}`,
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
