import Head from 'next/head';
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { BlogPost } from '@/types/sanity';
import { getFullPostBySlug, getAllPostSlugs, getPosts } from '@/lib/sanity/client';
import PortableTextContent from '@/components/ui/PortableTextContent';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';

// Interface for the blog post page props
interface BlogPostPageProps {
  post: BlogPost;
  nextPost: { slug: string; title: string } | null;
  prevPost: { slug: string; title: string } | null;
}

// Component for blog post header
const BlogPostHeader: React.FC<{ post: BlogPost; formattedDate: string; t: any }> = ({ post, formattedDate, t }) => (
  <div className="mb-8">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center text-sm text-gray-500">
        <span className="mr-4">{formattedDate}</span>
        {post.category && (
          <Link
            href={`/blog/categoria/${post.category.toLowerCase().replace(/ /g, '-')}`}
            className="inline-flex items-center text-primary hover:text-primary-dark"
          >
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
          </Link>
        )}
      </div>
      <div>
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline text-sm">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          {t('backToBlog')}
        </Link>
      </div>
    </div>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>

    {/* Reading time and author information */}
    <div className="flex items-center mb-8">
      <div>
        <div className="text-sm text-gray-500 flex items-center">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            {post.readingTime} {t('readingTime')}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Component for featured image with tags
const FeaturedImage: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
    <Image
      src={post.coverImage || '/images/photo-1515876305430-f06edab8282a.jpeg'}
      alt={post.title}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    {post.tags && post.tags.length > 0 && (
      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);

// Component for call to action section
const CallToAction: React.FC<{ t: any }> = ({ t }) => (
  <div className="mt-12 border-t border-gray-200 pt-10">
    <div className="flex flex-col md:flex-row items-center justify-between bg-primary/5 p-8 rounded-xl">
      <div className="mb-6 md:mb-0 md:mr-6">
        <h3 className="text-xl font-bold mb-2">{t('ctaTitle')}</h3>
        <p className="text-gray-600">{t('ctaDescription')}</p>
      </div>
      <CalendlyPopupButton className="text-white bg-primary hover:bg-primary-dark transition-colors px-6 py-3 rounded-lg font-medium">
        {t('contactUs')}
      </CalendlyPopupButton>
    </div>
  </div>
);

// Component for social media sharing
const SocialSharing: React.FC<{ post: BlogPost; t: any }> = ({ post, t }) => (
  <div className="flex items-center mb-6 sm:mb-0">
    <span className="text-gray-600 mr-4">{t('share')}</span>
    <div className="flex space-x-3">
      {/* Facebook share button */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://datawise.pt/blog/${post.slug.current}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        aria-label="Partilhar no Facebook"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>

      {/* Twitter/X share button */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          `https://datawise.pt/blog/${post.slug.current}`
        )}&text=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        aria-label="Partilhar no Twitter/X"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      </a>

      {/* LinkedIn share button */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
          `https://datawise.pt/blog/${post.slug.current}`
        )}&title=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        aria-label="Partilhar no LinkedIn"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  </div>
);

// Component for post navigation
const PostNavigation: React.FC<{ nextPost: any; prevPost: any }> = ({ nextPost, prevPost }) => (
  <div className="flex space-x-4">
    {prevPost && (
      <Link
        href={`/blog/${prevPost.slug}`}
        className="flex-1 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
      >
        <div className="text-sm text-gray-500 mb-1">← Previous</div>
        <div className="font-medium text-gray-900">{prevPost.title}</div>
      </Link>
    )}
    {nextPost && (
      <Link
        href={`/blog/${nextPost.slug}`}
        className="flex-1 bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors text-right"
      >
        <div className="text-sm text-gray-500 mb-1">Next →</div>
        <div className="font-medium text-gray-900">{nextPost.title}</div>
      </Link>
    )}
  </div>
);

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, nextPost, prevPost }) => {
  const t = useTranslations('Blog');
  
  // Handle case when post is not found
  if (!post) {
    return <div>{t('articleNotFound')}</div>;
  }

  // Format date to Portuguese locale
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formattedDate = formatDate(post.publishedAt);

  return (
    <>
      {/* SEO and meta tags for the blog post */}
      <Head>
        <title>{`${post.title} | Blog Datawise`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph meta tags for social media sharing */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage || ''} />
        <meta property="og:url" content={`https://datawise.pt/blog/${post.slug.current}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:section" content={post.category || ''} />
        {/* Article tags for better SEO */}
        {post.tags?.map((tag: string) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>

      <main>
        {/* Main blog post content section */}
        <section className="pt-20 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Blog post header */}
              <BlogPostHeader post={post} formattedDate={formattedDate} t={t} />

              {/* Featured image with overlay and tags */}
              <FeaturedImage post={post} />

              {/* Blog post content using Portable Text */}
              {post.body && <PortableTextContent content={post.body} />}

              {/* Call to action section */}
              <CallToAction t={t} />

              {/* Social media sharing and navigation */}
              <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
                <SocialSharing post={post} t={t} />
                <PostNavigation nextPost={nextPost} prevPost={prevPost} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

// Generate static paths for all blog posts
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getAllPostSlugs();
    const paths = posts.map((post: any) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return { paths: [], fallback: 'blocking' };
  }
};

// Get static props for individual blog post
export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params, locale   }) => {
  const messages = (await import(`@/messages/${locale}.json`)).default;
  try {
    const slug = params?.slug as string;
    const post = await getFullPostBySlug(slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    // Fetch all posts for navigation
    const allPosts = await getPosts();
    const currentIndex = allPosts.findIndex((p: any) => p.slug.current === slug);

    // Find next and previous posts for navigation
    let nextPost = null;
    if (currentIndex < allPosts.length - 1) {
      nextPost = {
        slug: allPosts[currentIndex + 1].slug.current,
        title: allPosts[currentIndex + 1].title,
      };
    }

    let prevPost = null;
    if (currentIndex > 0) {
      prevPost = {
        slug: allPosts[currentIndex - 1].slug.current,
        title: allPosts[currentIndex - 1].title,
      };
    }

    return {
      props: {
        post,
        nextPost,
        prevPost,
        messages
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
      messages
    };
  }
};

export default BlogPostPage;
