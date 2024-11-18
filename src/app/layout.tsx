
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lato } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const lato = Lato({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DATAWISE",
  description: "Ciência de Dados aplicada a Negócios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.className} antialiased`}
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}
