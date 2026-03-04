
import { createClient } from '@sanity/client'
import type { QueryParams } from '@sanity/client'
import type { BlogEntry, BlogPost } from '../../types/sanity'
import { groq } from 'next-sanity';

const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const hasSanityConfig = Boolean(sanityProjectId && sanityDataset && sanityApiVersion);
let hasWarnedMissingConfig = false;

export const client = hasSanityConfig
  ? createClient({
      projectId: sanityProjectId!,
      dataset: sanityDataset!,
      apiVersion: sanityApiVersion!,
      useCdn: process.env.NODE_ENV === 'production',
      perspective: 'published',
    })
  : null;

async function safeFetch<T>(query: string, params?: QueryParams): Promise<T | null> {
  if (!client) {
    if (!hasWarnedMissingConfig) {
      hasWarnedMissingConfig = true;
      console.warn(
        'Sanity client not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and NEXT_PUBLIC_SANITY_API_VERSION.'
      );
    }
    return null;
  }

  if (params) {
    return client.fetch<T>(query, params);
  }

  return client.fetch<T>(query);
}

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
  const result = await safeFetch<BlogEntry[]>(query);

  // Return an empty array if result is falsy
  return result || [];
}

// Helper function to fetch a single post by slug (for listings)
export async function getPostBySlug(slug: string): Promise<BlogEntry | null> {
  const result = await safeFetch<BlogEntry>(groq`
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
  const result = await safeFetch<BlogPost>(groq`
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
  const result = await safeFetch<{ slug: string }[]>(groq`
    *[_type == "post"] {
      "slug": slug.current
    }
  `)
  
  return result || []
}
