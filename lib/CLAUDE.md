# Lib

Shared utilities, data, and integrations.

## /sanity/client.ts
Sanity CMS client and query helpers:
- `getPosts()` - fetch post listings
- `getPostBySlug()` - single post metadata
- `getFullPostBySlug()` - post with body
- `getAllPostSlugs()` - for static paths

## /hooks/useScrollTracking.ts
Analytics hooks for scroll depth tracking:
- `useScrollTracking()` - single depth
- `useScrollToBottom()` - bottom reached
- `useMultipleScrollDepths()` - multiple thresholds

## /utils/date.ts
Date formatting utility for blog posts.

## /data/ContactData.ts
Centralized contact information (email, phone, address, social links).
