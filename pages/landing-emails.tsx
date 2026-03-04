import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import type { NextPage } from 'next';
import EmailHero from '@/components/sections/product-emails/EmailHero';
import EmailDemo from '@/components/sections/product-emails/EmailDemo';
import EmailFeatures from '@/components/sections/product-emails/EmailFeatures';
import EmailProcess from '@/components/sections/product-emails/EmailProcess';
import EmailSocialProof from '@/components/sections/product-emails/EmailSocialProof';
import EmailContactForm from '@/components/sections/product-emails/EmailContactForm';

interface ProductEmailsProps {
  messages: any;
}

const ProductEmails: NextPage<ProductEmailsProps> = () => {
  const t = useTranslations('ProductEmails');

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:image" content="/images/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://datawise.pt/product-emails" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <EmailHero />
        <EmailDemo />
        <EmailFeatures />
        <EmailProcess />
        <EmailSocialProof />
        <EmailContactForm />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<ProductEmailsProps> = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
};

export default ProductEmails;
