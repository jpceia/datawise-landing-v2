// Base Sanity document interface
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Slug interface
interface Slug {
  current: string;
  _type: 'slug';
}

// Image interface
interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

// Post document (raw from Sanity)
export interface Post extends SanityDocument {
  _type: 'post';
  title: string;
  slug: Slug;
  coverImage?: SanityImage;
  publishedAt: string;
  excerpt: string;
  category: string;
  tags?: string[];
  body?: any[]; // Block content array
}

// Simplified post for listings
export interface BlogEntry {
  _id: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  publishedAt: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  readingTime?: number;
}

// Full post with body content
export interface BlogPost {
  _id: string;
  title: string;
  subtitle?: string;
  slug: Slug;
  publishedAt: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
  tags?: string[];
  readingTime?: number;
  body?: any[]; // Block content array from Sanity
}
