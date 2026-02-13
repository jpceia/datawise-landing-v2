# Pages

Next.js pages directory (file-based routing).

## index.tsx
Homepage - assembles all sections, uses `getStaticProps` for i18n.

## _app.tsx
App wrapper with NextIntlClientProvider for translations.

## _document.tsx
Custom HTML document with font preloads.

## 404.tsx
Custom 404 error page.

## /blog/index.tsx
Blog listing page with post cards, ISR (1h revalidation).

## /blog/[slug].tsx
Individual blog post with `getStaticPaths` for all posts.

## /api/sitemap.ts
Dynamic XML sitemap generation endpoint.
