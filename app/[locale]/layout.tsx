import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import SiteFrame from '@/components/layout/SiteFrame';
import {ContactModalProvider} from '@/components/providers/ContactModalProvider';
import {routing} from '@/i18n/routing';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap'
});

/** Maps each app locale to its `<html lang>` (BCP-47) value. */
const HTML_LANG_BY_LOCALE: Record<string, string> = {
  pt: 'pt-PT',
  en: 'en'
};

export function generateStaticParams() {
  return routing.locales.map(locale => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = (await import(`@/i18n/${locale}.json`)).default;

  return (
    <html lang={HTML_LANG_BY_LOCALE[locale] ?? locale}>
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Lisbon">
          <ContactModalProvider>
            <SiteFrame>{children}</SiteFrame>
          </ContactModalProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NODE_ENV !== 'development' && (
          <>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
          </>
        )}
      </body>
    </html>
  );
}
