import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import {buildAlternates, localizedUrl, organizationSchema, servicesSchema, websiteSchema} from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import HomePageClient from './components/HomePageClient';

const OG_IMAGE = {
  url: '/images/og-default.png',
  width: 1200,
  height: 630
};

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
      images: [OG_IMAGE],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: t('Metadata.ogTitle'),
      description: t('Metadata.ogDescription'),
      images: [OG_IMAGE.url]
    }
  };
}

export default async function HomePage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'Services'});
  const items = (t.raw('items') as {title: string; description: string}[]).map(item => ({
    name: item.title,
    description: item.description
  }));

  return (
    <>
      <JsonLd
        data={[organizationSchema(), websiteSchema(params.locale), ...servicesSchema(params.locale, items)]}
      />
      <HomePageClient />
    </>
  );
}
