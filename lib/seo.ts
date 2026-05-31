import {routing} from '@/i18n/routing';

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
