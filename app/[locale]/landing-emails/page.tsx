import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import EmailHero from './components/EmailHero';
import EmailDemo from './components/EmailDemo';
import EmailFeatures from './components/EmailFeatures';
import EmailProcess from './components/EmailProcess';
import EmailSocialProof from './components/EmailSocialProof';
import EmailContactForm from './components/EmailContactForm';

export async function generateMetadata({
  params
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const t = await getTranslations({locale: params.locale, namespace: 'ProductEmails'});

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: 'https://datawise.pt/landing-emails',
      images: ['/images/web-app-manifest-512x512.png'],
      type: 'website'
    }
  };
}

export default function LandingEmailsPage() {
  return (
    <main>
      <EmailHero />
      <EmailDemo />
      <EmailFeatures />
      <EmailProcess />
      <EmailSocialProof />
      <EmailContactForm />
    </main>
  );
}
