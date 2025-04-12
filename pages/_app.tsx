import Script from 'next/script';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

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
    </>
  );
}

export default MyApp;
