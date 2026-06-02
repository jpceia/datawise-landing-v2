import type {MetadataRoute} from 'next';
import {getPosts} from '@/lib/sanity/client';
import {BlogEntry} from '@/types/sanity';
import {routing} from '@/i18n/routing';
import {localizedUrl} from '@/lib/seo';

export const revalidate = 3600;

/** BCP-47 hreflang value per locale. */
const HREFLANG_BY_LOCALE: Record<string, string> = {
  pt: 'pt-PT',
  en: 'en'
};

/** Builds the per-locale `languages` alternates map (plus x-default) for a path. */
function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[HREFLANG_BY_LOCALE[locale] ?? locale] = localizedUrl(locale, path);
  }
  languages['x-default'] = localizedUrl(routing.defaultLocale, path);
  return languages;
}

interface SitemapEntry {
  path: string;
  lastModified?: string | Date;
  changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority?: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts: BlogEntry[] = [];
  try {
    blogPosts = await getPosts({filterLegal: false, orderBy: 'publishedAt', orderDirection: 'desc'});
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
  }

  const entries: SitemapEntry[] = [
    {path: '', changeFrequency: 'daily', priority: 1.0},
    {path: '/blog', changeFrequency: 'daily', priority: 0.9},
    ...blogPosts.map(post => ({
      path: `/${post.slug.current}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      lastModified: post.publishedAt
    }))
  ];

  // One entry per (entry, locale), each carrying full hreflang alternates.
  return entries.flatMap(entry =>
    routing.locales.map(locale => ({
      url: localizedUrl(locale, entry.path),
      lastModified: entry.lastModified ?? new Date(),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {languages: alternatesFor(entry.path)}
    }))
  );
}
