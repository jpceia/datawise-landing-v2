import type {Metadata} from 'next';
import '@/styles/globals.css';

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

/**
 * Root layout is a passthrough. The `<html>`/`<body>` shell lives in the locale
 * layout so that `<html lang>` can reflect the active locale. Routes rendered
 * outside `[locale]` (e.g. the global `not-found`) provide their own shell.
 */
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return children;
}
