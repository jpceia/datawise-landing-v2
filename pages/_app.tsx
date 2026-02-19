import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import TopBanner from '@/components/layout/TopBanner';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale; // Change this to test different locales
  
  // Check if in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  // Check if we're on the landing page (index)
  const isLandingPage = router.pathname === '/';
  
  return (
    <div className={`${plusJakartaSans.variable} ${inter.variable} font-sans`}>
    <NextIntlClientProvider
      locale={locale}
      timeZone="Europe/Lisbon"
      messages={pageProps.messages}
    >
      {isLandingPage && <TopBanner />}
      <Navbar hasTopBanner={isLandingPage} variant={isLandingPage ? 'dark' : 'light'} />
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
    </div>
  );
}

export default MyApp;
