import { GoogleAnalytics } from '@next/third-parties/google'
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GoogleAnalytics gaId="G-6FHQECXHNX" />
      <Analytics />
    </>
  );
}

export default MyApp;
