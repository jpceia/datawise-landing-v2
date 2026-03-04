import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import {getAllPostSlugs, getFullPostBySlug, getPosts} from '@/lib/sanity/client';
import {routing} from '@/i18n/routing';

const siteUrl = process.env.SITE_URL || 'https://www.datawise.pt';

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getAllPostSlugs();

    return routing.locales.flatMap(locale =>
      posts.map(post => ({
        locale,
        slug: post.slug
      }))
    );
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

export async function generateMetadata({
  params
}: {
  params: {slug: string};
}): Promise<Metadata> {
  const post = await getFullPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Artigo nao encontrado | Blog Datawise'
    };
  }

  return {
    title: `${post.title} | Blog Datawise`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      url: `${siteUrl}/${post.slug.current}`,
      type: 'article'
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: {slug: string};
}) {
  const post = await getFullPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getPosts();
  const currentIndex = allPosts.findIndex(p => p.slug.current === params.slug);

  const nextPost =
    currentIndex >= 0 && currentIndex < allPosts.length - 1
      ? {
          slug: allPosts[currentIndex + 1].slug.current,
          title: allPosts[currentIndex + 1].title
        }
      : null;

  const prevPost =
    currentIndex > 0
      ? {
          slug: allPosts[currentIndex - 1].slug.current,
          title: allPosts[currentIndex - 1].title
        }
      : null;

  return <BlogPostPageClient post={post} nextPost={nextPost} prevPost={prevPost} />;
}
