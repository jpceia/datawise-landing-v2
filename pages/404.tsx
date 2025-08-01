import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Button from '@/components/ui/Button';
import type { NextPage } from 'next';

interface Custom404Props {
  messages: any;
}

const Custom404: NextPage<Custom404Props> = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{t('Error404.title')}</title>
        <meta
          name="description"
          content={t('Error404.description')}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={t('Error404.ogTitle')} />
        <meta property="og:description" content={t('Error404.ogDescription')} />
        <meta property="og:image" content="/images/web-app-manifest-512x512.png" />
        <meta property="og:url" content="https://datawise.pt/404" />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
              404
            </h1>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('Error404.pageTitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('Error404.pageDescription')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => router.back()}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              {t('Error404.backButton')}
            </Button>
            <Link href="/" passHref>
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {t('Error404.homeButton')}
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<Custom404Props> = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`@/messages/${locale || 'pt'}.json`)).default
    }
  };
};

export default Custom404; 