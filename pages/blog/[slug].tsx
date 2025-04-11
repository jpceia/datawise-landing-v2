import Head from 'next/head';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import { BlogPost, sampleBlogPosts } from '../../types/blog';
import MarkdownContent from '../../components/MarkdownContent';

interface BlogPostPageProps {
  post: BlogPost;
  nextPost: { slug: string; title: string } | null;
  prevPost: { slug: string; title: string } | null;
}

const BlogPostPage: NextPage<BlogPostPageProps> = ({ post, nextPost, prevPost }) => {
  if (!post) {
    return <div>Artigo não encontrado</div>;
  }

  // Formatação da data
  const formattedDate = post.date;

  return (
    <>
      <Head>
        <title>{post.title} | DataWise Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font Inter do Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Navbar />
      
      <main>
        <section className="pt-36 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Header with date and category */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">{formattedDate}</span>
                    <Link 
                      href={`/blog/categoria/${post.category.toLowerCase().replace(/ /g, '-')}`}
                      className="inline-flex items-center text-primary hover:text-primary-dark"
                    >
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link href="/blog" className="inline-flex items-center text-primary hover:underline text-sm">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                      </svg>
                      Voltar ao blog
                    </Link>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </h1>
                
                {/* Author information */}
                <div className="flex items-center mb-8">
                  <div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        {post.readingTime} de leitura
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured image */}
              <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Markdown content */}
              <MarkdownContent content={post.content} />

              {/* Call to action */}
              <div className="mt-12 border-t border-gray-200 pt-10">
                <div className="flex flex-col md:flex-row items-center justify-between bg-primary/5 p-8 rounded-xl">
                  <div className="mb-6 md:mb-0 md:mr-6">
                    <h3 className="text-xl font-bold mb-2">Precisa de otimizar as suas operações?</h3>
                    <p className="text-gray-600">Marque uma consulta gratuita com a nossa equipa de especialistas.</p>
                  </div>
                  <Button variant="primary" size="lg" className="whitespace-nowrap">
                    Contacte-nos
                  </Button>
                </div>
              </div>

              {/* Share and navigation */}
              <div className="mt-10 flex flex-col sm:flex-row justify-between items-center">
                <div className="flex items-center mb-6 sm:mb-0">
                  <span className="text-gray-600 mr-4">Partilhar:</span>
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex space-x-4">
                  {prevPost !== null && (
                    <Link href={`/blog/${prevPost.slug}`} className="inline-flex items-center text-gray-600 hover:text-primary">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                      </svg>
                      Artigo anterior
                    </Link>
                  )}
                  
                  {nextPost !== null && (
                    <Link href={`/blog/${nextPost.slug}`} className="inline-flex items-center text-gray-600 hover:text-primary">
                      Próximo artigo
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Em produção, você buscaria todos os posts do seu CMS ou API
  // Aqui estamos usando os dados de exemplo
  const paths = sampleBlogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;
  
  // Em produção, você buscaria os dados do seu CMS ou API
  // Aqui estamos usando os dados de exemplo
  const post = sampleBlogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  // Encontrar o próximo e o anterior post para navegação
  const currentIndex = sampleBlogPosts.findIndex(p => p.slug === slug);
  
  // Criando objetos simples e serializáveis para nextPost e prevPost
  let nextPost = null;
  if (currentIndex < sampleBlogPosts.length - 1) {
    nextPost = {
      slug: sampleBlogPosts[currentIndex + 1].slug,
      title: sampleBlogPosts[currentIndex + 1].title
    };
  }
  
  let prevPost = null;
  if (currentIndex > 0) {
    prevPost = {
      slug: sampleBlogPosts[currentIndex - 1].slug,
      title: sampleBlogPosts[currentIndex - 1].title
    };
  }

  // Converte o post para um formato JSON seguro
  const serializedPost = JSON.parse(JSON.stringify(post));

  return {
    props: {
      post: serializedPost,
      nextPost,
      prevPost
    },
    // Revalidate a cada 1 hora
    revalidate: 3600,
  };
};

export default BlogPostPage;