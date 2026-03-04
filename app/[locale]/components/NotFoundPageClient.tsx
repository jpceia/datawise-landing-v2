'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useTranslations} from 'next-intl';
import Button from '@/components/ui/Button';

export default function NotFoundPageClient() {
  const t = useTranslations('Error404');
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">404</h1>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('pageTitle')}</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t('pageDescription')}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => router.back()} variant="outline" size="lg" className="w-full sm:w-auto">
            {t('backButton')}
          </Button>
          <Link href="/">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              {t('homeButton')}
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
