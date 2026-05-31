import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import BlogPostPageClient from './BlogPostPageClient';
import {getAllPostSlugs, getFullPostBySlug, getPosts} from '@/lib/sanity/client';
import {routing} from '@/i18n/routing';
import {blogPostingSchema, breadcrumbSchema, buildAlternates, localizedUrl} from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import ContactData from '@/lib/data/ContactData';

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
  params: {locale: string; slug: string};
}): Promise<Metadata> {
  const post = await getFullPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Artigo não encontrado | Blog Datawise'
    };
  }

  const path = `/${post.slug.current}`;

  const images = post.coverImage ? [post.coverImage] : [];

  return {
    title: `${post.title} | Blog Datawise`,
    description: post.excerpt,
    authors: [{name: ContactData.general.companyName}],
    alternates: buildAlternates(params.locale, path),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images,
      url: localizedUrl(params.locale, path),
      type: 'article',
      publishedTime: post.publishedAt
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images
    }
  };
}

export default async function BlogPostPage({
  params
}: {
  params: {locale: string; slug: string};
}) {
  const post = await getFullPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const postSchema = blogPostingSchema({
    locale: params.locale,
    url: localizedUrl(params.locale, `/${post.slug.current}`),
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    publishedAt: post.publishedAt
  });

  const t = await getTranslations({locale: params.locale, namespace: 'Blog'});
  const breadcrumb = breadcrumbSchema(params.locale, [
    {name: t('breadcrumbHome'), path: ''},
    {name: 'Blog', path: '/blog'},
    {name: post.title, path: `/${post.slug.current}`}
  ]);

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

  return (
    <>
      <JsonLd data={[postSchema, breadcrumb]} />
      <BlogPostPageClient post={post} nextPost={nextPost} prevPost={prevPost} />
    </>
  );
}
