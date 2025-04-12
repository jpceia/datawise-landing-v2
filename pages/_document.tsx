import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-PT">
      <Head>
        {/* Favicon variations */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0D47A1" />
        <meta name="theme-color" content="#ffffff" />

        {/* Pré-carregamento de fontes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Metadados globais */}
        <meta charSet="utf-8" />
        <meta property="og:site_name" content="Datawise" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
