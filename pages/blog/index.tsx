import Head from 'next/head';
import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BlogEntry } from '@/types/sanity';
import { getPosts } from '@/lib/sanity/client';

interface BlogIndexProps {
  posts: BlogEntry[];
}

// Component for the featured post
const FeaturedPostCard = ({ post }: { post: BlogEntry }) => {
  const t = useTranslations('Blog');
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatReadingTime = (minutes: number) => {
    return `${minutes} min`;
  };

  return (
    <Link href={`/blog/${post.slug.current}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="md:flex">
          <div className="md:flex-1">
            <div className="relative w-full h-72 md:h-full">
              <Image
                src={post.coverImage || '/images/photo-1515876305430-f06edab8282a.jpeg'}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t"></div>
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                {t('featured')}
              </div>
            </div>
          </div>
          <div className="md:flex-1 p-6 md:p-8">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="mr-4">{formatDate(post.publishedAt)}</span>
              {post.category && (
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                  {post.category}
                </span>
              )}
              <span className="ml-4 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {formatReadingTime(post.readingTime || 5)}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-6">{post.excerpt}</p>
            <div className="inline-flex items-center text-primary font-medium group-hover:underline">
              {t('readFullArticle')}
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Component for grid posts
const PostCard = ({ post }: { post: BlogEntry }) => {
  const t = useTranslations('Blog');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatReadingTime = (minutes: number) => {
    return `${minutes} min`;
  };

  return (
    <Link href={`/blog/${post.slug.current}`} className="block group">
      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <div className="relative h-48">
          <Image
            src={post.coverImage || '/images/photo-1515876305430-f06edab8282a.jpeg'}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          {post.category && (
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span className="mr-4">{formatDate(post.publishedAt)}</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {formatReadingTime(post.readingTime || 5)}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="inline-flex items-center text-primary font-medium group-hover:underline">
            {t('readMore')}
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Component for when no results are found
const NoResults = () => {
  const t = useTranslations('Blog');
  return (
    <div className="text-center py-12">
      <div className="inline-block p-6 rounded-full bg-gray-100 mb-6">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">{t('noResults')}</h2>
      <p className="text-gray-600 mb-6">{t('noResultsDescription')}</p>
      <p className="text-gray-600">Tente novamente mais tarde.</p>
    </div>
  );
};

const BlogIndex: NextPage<BlogIndexProps> = ({ posts }) => {
  const t = useTranslations('Blog');
  
  // Separating the featured post (most recent) from the remaining posts
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  return (
    <>
      <Head>
        <title>Blog | Datawise</title>
        <meta
          name="description"
          content="Artigos, guias e notícias sobre ciência de dados, machine learning e casos de sucesso da Datawise."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Blog | Datawise" />
        <meta property="og:description" content="Insights e conhecimentos sobre ciência de dados e inteligência artificial" />
        <meta property="og:image" content="/images/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://datawise.pt/blog" />
        <meta property="og:type" content="website" />
      </Head>
      <main>
        <section className="pt-44 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {posts.length > 0 ? (
              <>
                {/* Featured post section */}
                <div className="mb-16">
                  <FeaturedPostCard post={featuredPost} />
                </div>

                {/* Posts grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {remainingPosts.map(post => (
                    <PostCard key={post._id} post={post} />
                  ))}
                </div>
              </>
            ) : <NoResults />
          }
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async ({ locale }) => {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  try {
    const posts = await getPosts();

    return {
      props: {
        posts,
        messages
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return {
      props: {
        posts: [],
        messages
      },
      revalidate: 3600,
    };
  }
};

export default BlogIndex;
