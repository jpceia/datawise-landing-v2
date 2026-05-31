import type {Metadata} from 'next';
import {getPosts} from '@/lib/sanity/client';
import {buildAlternates, localizedUrl} from '@/lib/seo';
import BlogIndexPageClient from './BlogIndexPageClient';

export const revalidate = 3600;

export function generateMetadata({params}: {params: {locale: string}}): Metadata {
  return {
    title: 'Blog | Datawise',
    description: 'Artigos, guias e notícias sobre ciência de dados, machine learning e casos de sucesso da Datawise.',
    alternates: buildAlternates(params.locale, '/blog'),
    openGraph: {
      title: 'Blog | Datawise',
      description: 'Insights e conhecimentos sobre ciência de dados e inteligência artificial',
      url: localizedUrl(params.locale, '/blog'),
      images: ['/images/web-app-manifest-512x512.png'],
      type: 'website'
    }
  };
}

export default async function BlogIndexPage() {
  try {
    const posts = await getPosts();
    return <BlogIndexPageClient posts={posts} />;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return <BlogIndexPageClient posts={[]} />;
  }
}
