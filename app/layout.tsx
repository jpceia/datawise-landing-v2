import type {Metadata} from 'next';
import {Inter, Plus_Jakarta_Sans} from 'next/font/google';
import {GoogleAnalytics, GoogleTagManager} from '@next/third-parties/google';
import {Analytics} from '@vercel/analytics/next';
import '@/styles/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.datawise.pt'),
  applicationName: 'Datawise',
  title: {
    default: 'Datawise',
    template: '%s | Datawise'
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  openGraph: {
    siteName: 'Datawise'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans`}>
        {children}
        <Analytics />
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
