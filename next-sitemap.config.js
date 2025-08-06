/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.datawise.pt',
    generateRobotsTxt: true, // Automatically generates robots.txt
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://www.datawise.pt/sitemap.xml',
      ],
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
        // Specific rules for search engine bots
        {
          userAgent: 'Googlebot',
          allow: '/',
        },
        {
          userAgent: 'Bingbot',
          allow: '/',
        },
        // AI model crawlers
        {
          userAgent: 'GPTBot',
          allow: '/',
        },
        {
          userAgent: 'ChatGPT-User',
          allow: '/',
        },
        {
          userAgent: 'CCBot',
          allow: '/',
        },
        {
          userAgent: 'anthropic-ai',
          allow: '/',
        },
        {
          userAgent: 'Claude-Web',
          allow: '/',
        },
        {
          userAgent: 'Omgilibot',
          allow: '/',
        },
        {
          userAgent: 'Applebot',
          allow: '/',
        },
        {
          userAgent: 'facebookexternalhit',
          allow: '/',
        },
        {
          userAgent: 'Twitterbot',
          allow: '/',
        },
        {
          userAgent: 'LinkedInBot',
          allow: '/',
        },
      ],
    },
    // Exclude pages that should not be in the sitemap
    exclude: ['/404', '/500'],
    // Configuration for dynamic blog pages
    additionalPaths: async (config) => {
      const { getPosts } = await import('./lib/sanity/client')
      
      try {
        const posts = await getPosts()
        
        return posts.map((post) => ({
          loc: `/blog/${post.slug.current}`,
          lastmod: new Date(post.publishedAt).toISOString(),
          changefreq: 'monthly',
          priority: 0.6,
        }))
      } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
        return []
      }
    },
  }