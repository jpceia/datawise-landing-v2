import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import type {BlogEntry} from '@/types/sanity';
import {getPosts} from '@/lib/sanity/client';
import {buildAlternates, localizedUrl, organizationSchema} from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import BlogIndexPageClient from './BlogIndexPageClient';

export const revalidate = 3600;

const OG_IMAGE = '/images/og-default.png';

export async function generateMetadata({params}: {params: {locale: string}}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'Blog'});
  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    alternates: buildAlternates(params.locale, '/blog'),
    openGraph: {
      title,
      description: t('ogDescription'),
      url: localizedUrl(params.locale, '/blog'),
      images: [{url: OG_IMAGE, width: 1200, height: 630}],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: t('ogDescription'),
      images: [OG_IMAGE]
    }
  };
}

export default async function BlogIndexPage() {
  let posts: BlogEntry[];
  try {
    posts = await getPosts();
  } catch (error) {
    console.error('Error fetching blog data:', error);
    posts = [];
  }

  return (
    <>
      <JsonLd data={organizationSchema()} />
      <BlogIndexPageClient posts={posts} />
    </>
  );
}
