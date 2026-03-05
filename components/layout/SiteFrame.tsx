'use client';

import {usePathname} from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import TopBanner from '@/components/layout/TopBanner';

interface SiteFrameProps {
  children: React.ReactNode;
}

function isLandingPath(pathname: string): boolean {
  const parts = pathname.split('/').filter(Boolean);

  return parts.length === 0 || (parts.length === 1 && (parts[0] === 'pt' || parts[0] === 'en'));
}

export default function SiteFrame({children}: SiteFrameProps) {
  const pathname = usePathname();
  const isLandingPage = isLandingPath(pathname || '/');

  return (
    <>
      {isLandingPage && <TopBanner />}
      <Navbar hasTopBanner={isLandingPage} variant={isLandingPage ? 'dark' : 'light'} />
      {children}
      <Footer />
    </>
  );
}
