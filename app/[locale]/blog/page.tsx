import type {Metadata} from 'next';
import {getPosts} from '@/lib/sanity/client';
import BlogIndexPageClient from './BlogIndexPageClient';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog | Datawise',
  description: 'Artigos, guias e noticias sobre ciencia de dados, machine learning e casos de sucesso da Datawise.',
  openGraph: {
    title: 'Blog | Datawise',
    description: 'Insights e conhecimentos sobre ciencia de dados e inteligencia artificial',
    url: 'https://datawise.pt/blog',
    images: ['/images/web-app-manifest-512x512.png'],
    type: 'website'
  }
};

export default async function BlogIndexPage() {
  try {
    const posts = await getPosts();
    return <BlogIndexPageClient posts={posts} />;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return <BlogIndexPageClient posts={[]} />;
  }
}
