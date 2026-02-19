import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import TransformBusiness from '@/components/sections/TransformBusiness';
import SuccessCases from '@/components/sections/SuccessCases';
import Recruitment from '@/components/sections/Recruitment';
import TechMaturity from '@/components/sections/TechMaturity';
import MissionValues from '@/components/sections/MissionValues';
import Technologies from '@/components/sections/Technologies';
import CallToAction from '@/components/sections/CallToAction';
import { useMultipleScrollDepths } from '@/lib/hooks/useScrollTracking';
import type { NextPage } from 'next';

interface HomeProps {
  messages: any;
}

const Home: NextPage<HomeProps> = () => {
  const t = useTranslations();
  useMultipleScrollDepths([25, 50, 75]);

  return (
    <>
      <Head>
        <title>{t('Metadata.title')}</title>
        <meta
          name="description"
          content={t('Metadata.description')}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={t('Metadata.ogTitle')} />
        <meta property="og:description" content={t('Metadata.ogDescription')} />
        <meta property="og:image" content="/images/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://datawise.pt" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <Hero />
        
        <TransformBusiness />
        <Services />
        <SuccessCases />
        <TechMaturity />
        <MissionValues />
        <Recruitment />
        <Technologies />
        <CallToAction />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
};

export default Home;
