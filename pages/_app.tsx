import Script from 'next/script';
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
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || []
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6FHQECXHNX');
        `}
      </Script>
      <Analytics />
    </>
  );
}

export default MyApp;
