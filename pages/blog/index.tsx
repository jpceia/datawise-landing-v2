import Head from 'next/head';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, sampleBlogPosts } from '../../types/blog';
import Button from '../../components/ui/Button';

interface BlogIndexProps {
  posts: BlogPost[];
  categories: { name: string; count: number }[];
}

const BlogIndex: NextPage<BlogIndexProps> = ({ posts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Post filtrado baseado na categoria selecionada e na pesquisa
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;
    return matchesCategory && matchesSearch;
  });

  // Separando o post destacado (o mais recente) dos posts restantes
  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

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
        <section className="pt-36 pb-20 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <>
                {/* Featured post */}
                <div className="mb-16">
                  <Link href={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="md:flex">
                        <div className="md:flex-1">
                          <div className="relative w-full h-72 md:h-full">
                            <Image
                              src={featuredPost.coverImage}
                              alt={featuredPost.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-gradient-to-t"></div>
                            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                              EM DESTAQUE
                            </div>
                          </div>
                        </div>
                        <div className="md:flex-1 p-6 md:p-8">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span className="mr-4">{featuredPost.date}</span>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">{featuredPost.category}</span>
                            <span className="ml-4 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              {featuredPost.readingTime}
                            </span>
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                          <div className="inline-flex items-center text-primary font-medium group-hover:underline">
                            Ler artigo completo
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
                </div>

                {/* Grid of posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {remainingPosts.map(post => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                        <div className="relative h-48">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-4 left-4">
                            <span className="bg-primary/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <span className="mr-4">{post.date}</span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              {post.readingTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                          <div className="inline-flex items-center text-primary font-medium group-hover:underline">
                            Ler mais
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
                  ))}
                </div>
              </>
            ) : (
              // No results
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
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Nenhum resultado encontrado</h2>
                <p className="text-gray-600 mb-6">Não encontrámos nenhum artigo que corresponda aos seus critérios de pesquisa.</p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}

            {/* Newsletter signup 
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-primary rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-3/5 p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-white mb-3">Subscreva a nossa newsletter</h3>
                    <p className="text-white/80 mb-6">
                      Receba as últimas novidades, artigos e recursos diretamente na sua caixa de entrada.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="O seu email"
                        className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none"
                      />
                      <Button variant="secondary" className="whitespace-nowrap">
                        Subscrever
                      </Button>
                    </div>
                    <p className="text-white/60 text-sm mt-4">Prometemos não enviar spam. Pode cancelar a subscrição a qualquer momento.</p>
                  </div>
                  <div className="md:w-2/5 bg-primary-dark relative hidden md:block">
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="10" fill="white" />
                        <circle cx="60" cy="20" r="5" fill="white" />
                        <circle cx="80" cy="50" r="15" fill="white" />
                        <circle cx="40" cy="70" r="8" fill="white" />
                        <circle cx="70" cy="90" r="4" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  // Em produção, você buscaria os dados do seu CMS ou API
  // Aqui estamos usando os dados de exemplo do arquivo types/blog.ts

  // Ordenando posts por data (assumindo que o mais recente está primeiro no array)
  const posts = sampleBlogPosts;

  // Gerando categorias e contagens
  const categoryCount: Record<string, number> = {};
  posts.forEach(post => {
    if (categoryCount[post.category]) {
      categoryCount[post.category]++;
    } else {
      categoryCount[post.category] = 1;
    }
  });

  const categories = Object.entries(categoryCount).map(([name, count]) => ({
    name,
    count,
  }));

  return {
    props: {
      posts,
      categories,
    },
    // Revalidate a cada 1 hora
    revalidate: 3600,
  };
};

export default BlogIndex;
