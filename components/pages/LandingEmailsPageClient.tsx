'use client';

import EmailHero from '@/components/landing-emails/EmailHero';
import EmailDemo from '@/components/landing-emails/EmailDemo';
import EmailFeatures from '@/components/landing-emails/EmailFeatures';
import EmailProcess from '@/components/landing-emails/EmailProcess';
import EmailSocialProof from '@/components/landing-emails/EmailSocialProof';
import EmailContactForm from '@/components/landing-emails/EmailContactForm';

export default function LandingEmailsPageClient() {
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
