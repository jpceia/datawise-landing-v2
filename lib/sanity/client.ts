
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

// Helper function to fetch all posts with full details
export async function getPosts(): Promise<BlogEntry[]> {
  const result = await client.fetch(groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      "coverImage": coverImage.asset->url,
      "category": category->name,
      tags,
      "readingTime": round(length(pt::text(body)) / 500)
    }
  `)
  return result || []
}

// Helper function to fetch a single post by slug (for listings)
export async function getPostBySlug(slug: string): Promise<BlogEntry | null> {
  const result = await client.fetch(groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
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
