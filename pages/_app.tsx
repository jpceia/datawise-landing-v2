import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import TopBanner from '@/components/layout/TopBanner';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale; // Change this to test different locales
  
  // Check if in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Europe/Lisbon"
      messages={pageProps.messages}
    >
      <TopBanner />
      <Navbar />
      <Component {...pageProps} locale={locale} />
      <Footer />
      {/* Google Analytics and Tag Manager only in production */}
      {!isDevelopment && (
        <>
          <GoogleAnalytics gaId="G-6FHQECXHNX" />
          <GoogleTagManager gtmId="GTM-KP2R8PR" />
        </>
      )}
      <Analytics />
    </NextIntlClientProvider>
  );
}

export default MyApp;
