import {routing} from '@/i18n/routing';
import ContactData from '@/lib/data/ContactData';

/**
 * Canonical site origin. Single source of truth — every absolute URL used for
 * SEO (canonical, hreflang, Open Graph) must derive from this constant to avoid
 * the www / non-www inconsistencies that fragment ranking signals.
 */
export const SITE_URL = 'https://www.datawise.pt';

/** Maps each app locale to its BCP-47 hreflang value. */
const HREFLANG_BY_LOCALE: Record<string, string> = {
  pt: 'pt-PT',
  en: 'en'
};

/**
 * Builds an absolute URL for a given locale and path.
 *
 * The routing uses `localePrefix: 'as-needed'`, so the default locale (pt) is
 * served without a prefix while other locales are prefixed (e.g. `/en/blog`).
 */
export function localizedUrl(locale: string, path = ''): string {
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path;
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${normalizedPath}`;
}

/**
 * Produces the `alternates` block (canonical + hreflang languages + x-default)
 * for a page at the given path, for the given current locale.
 */
export function buildAlternates(currentLocale: string, path = '') {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[HREFLANG_BY_LOCALE[locale] ?? locale] = localizedUrl(locale, path);
  }

  // x-default points search engines to the default-locale version.
  languages['x-default'] = localizedUrl(routing.defaultLocale, path);

  return {
    canonical: localizedUrl(currentLocale, path),
    languages
  };
}

/** Absolute URL of the brand logo used in structured data. */
const LOGO_URL = `${SITE_URL}/images/web-app-manifest-512x512.png`;

/**
 * Organization schema for the brand. Reused across the site (one node is enough;
 * search engines deduplicate by `@id`).
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: ContactData.general.companyName,
    url: SITE_URL,
    logo: LOGO_URL,
    email: ContactData.general.email,
    telephone: ContactData.general.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ContactData.general.addressLine1,
      addressLocality: 'Elvas',
      postalCode: '7350-100',
      addressCountry: 'PT'
    },
    sameAs: [ContactData.social.facebook, ContactData.social.linkedin]
  };
}

/** WebSite schema for the home page. */
export function websiteSchema(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ContactData.general.companyName,
    inLanguage: HREFLANG_BY_LOCALE[locale] ?? locale,
    publisher: {'@id': `${SITE_URL}/#organization`}
  };
}

/**
 * BlogPosting schema for an article. The Sanity model has no author field, so
 * the organization is used as both author and publisher.
 */
export function blogPostingSchema(params: {
  locale: string;
  url: string;
  title: string;
  description?: string;
  image?: string;
  publishedAt: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {'@type': 'WebPage', '@id': params.url},
    headline: params.title,
    description: params.description,
    image: params.image ? [params.image] : undefined,
    datePublished: params.publishedAt,
    dateModified: params.publishedAt,
    inLanguage: HREFLANG_BY_LOCALE[params.locale] ?? params.locale,
    author: {'@id': `${SITE_URL}/#organization`},
    publisher: {'@id': `${SITE_URL}/#organization`}
  };
}

/**
 * BreadcrumbList schema. `items` are ordered from root to current page; each
 * item's `path` is locale-resolved into an absolute URL.
 */
export function breadcrumbSchema(locale: string, items: {name: string; path: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: localizedUrl(locale, item.path)
    }))
  };
}
