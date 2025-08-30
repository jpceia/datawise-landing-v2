
import { createClient } from '@sanity/client'
import type { BlogEntry, BlogPost } from '../../types/sanity'
import { groq } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '',
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
});

// Interface for getPosts options
interface GetPostsOptions {
  filterLegal?: boolean;      // If true, exclude posts in "Legal" category (default: true)
  limit?: number;             // Limit number of posts returned
  category?: string;          // Filter by specific category
  orderBy?: 'publishedAt' | 'title' | 'readingTime';  // Field to order by
  orderDirection?: 'asc' | 'desc';                     // Sort direction
}

// Helper function to fetch all posts with full details
// 
// Examples:
// - getPosts() - Get all non-legal posts, ordered by publishedAt desc
// - getPosts({ filterLegal: false }) - Get all posts including legal ones
// - getPosts({ limit: 5, category: 'AI' }) - Get 5 AI posts
// - getPosts({ orderBy: 'title', orderDirection: 'asc' }) - Get posts ordered by title A-Z
// - getPosts({ limit: 10, orderBy: 'readingTime', orderDirection: 'desc' }) - Get 10 longest posts
export async function getPosts(options: GetPostsOptions = {}): Promise<BlogEntry[]> {
  const {
    filterLegal = true,
    limit,
    category,
    orderBy = 'publishedAt',
    orderDirection = 'desc'
  } = options;

  // Build filters
  let filters = ['_type == "post"'];
  
  if (filterLegal) {
    filters.push('category->name != "Legal"');
  }
  
  if (category) {
    filters.push(`category->name == "${category}"`);
  }

  // Build query
  const filterString = filters.join(' && ');
  const orderString = `| order(${orderBy} ${orderDirection})`;
  const limitString = limit ? `[0...${limit}]` : '';
  
  const query = groq`
    *[${filterString}] ${orderString} ${limitString} {
      _id,
      title,
      subtitle,
      slug,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      "category": category->name,
      tags,
      "readingTime": round(length(pt::text(body)) / 500)
    }
  `;

  // Fetch posts from Sanity
  const result = await client.fetch(query);

  // Return an empty array if result is falsy
  return result || [];
}

// Helper function to fetch a single post by slug (for listings)
export async function getPostBySlug(slug: string): Promise<BlogEntry | null> {
  const result = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      slug,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      "category": category->name,
      tags,
      "readingTime": round(length(pt::text(body)) / 500)
    }
  `, { slug })
  
  return result || null
}

// Helper function to fetch a full post with body content
export async function getFullPostBySlug(slug: string): Promise<BlogPost | null> {
  const result = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      subtitle,
      slug,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      "category": category->name,
      tags,
      body,
      "readingTime": round(length(pt::text(body)) / 500)
    }
  `, { slug })
  
  return result || null
}

// Helper function to get all post slugs for static paths
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const result = await client.fetch(groq`
    *[_type == "post"] {
      "slug": slug.current
    }
  `)
  
  return result || []
}
