import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import TopBanner from '@/components/layout/TopBanner';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GoogleAnalytics gaId="G-6FHQECXHNX" />
      <GoogleTagManager gtmId="GTM-KP2R8PR" />
      <Analytics />
    </>
  );
}

export default MyApp;
