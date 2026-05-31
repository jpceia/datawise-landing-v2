import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, localizedUrl} from '@/lib/seo';
import HomePageClient from './components/HomePageClient';

export async function generateMetadata({
  params
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale});

  return {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
    alternates: buildAlternates(params.locale),
    openGraph: {
      title: t('Metadata.ogTitle'),
      description: t('Metadata.ogDescription'),
      url: localizedUrl(params.locale),
      images: ['/images/web-app-manifest-512x512.png'],
      type: 'website'
    }
  };
}

export default function HomePage() {
  return <HomePageClient />;
}
