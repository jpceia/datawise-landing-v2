import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import TopBanner from '@/components/layout/TopBanner';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // Força o idioma para português
  const locale = 'pt';
  
  return (
    <NextIntlClientProvider
      locale={locale}
      timeZone="Europe/Lisbon"
      messages={pageProps.messages}
    >
      <TopBanner />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GoogleAnalytics gaId="G-6FHQECXHNX" />
      <GoogleTagManager gtmId="GTM-KP2R8PR" />
      <Analytics />
    </NextIntlClientProvider>
  );
}

export default MyApp;
