import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import ContactData from '../../lib/data/ContactData';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  
  // Get current year dynamically
  const currentYear = new Date().getFullYear();

  // Company links modified to point to internal sections
  const companyLinks: FooterLink[] = [
    { href: '/#about', label: t('links.aboutUs') },
    { href: '/#services', label: t('links.services') },
    { href: '/#success-cases', label: t('links.successCases') },
    { href: '/blog', label: t('links.blog') }, // Mantém-se externo
    { href: '/#careers', label: t('links.careers') },
  ];

  // Service links updated based on services displayed in Services.tsx section
  // Following the same order as the cards: 1, 2, 0, 3, 4, 5
  const serviceLinks: FooterLink[] = [
    { href: '/blog/competitive-intelligence', label: t('servicesList.1') }, // Competitive Intelligence
    { href: '/blog/workflow-automation', label: t('servicesList.2') }, // Workflow Automation
    { href: '/blog/predictive-models', label: t('servicesList.0') }, // Predictive Models
    { href: '/blog/operational-optimization', label: t('servicesList.3') }, // Operational Optimization
    { href: '/blog/document-classification', label: t('servicesList.4') }, // Intelligent Classification
    { href: '/blog/information-normalization', label: t('servicesList.5') }, // Data Normalization
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative elements (spheres) - remain unchanged */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-400/10 translate-y-1/3 -translate-x-1/4"></div>
      <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-400/10"></div>

      {/* Dot pattern - remains unchanged */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        ></div>
      </div>

      {/* Main footer section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and company description */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              {/* Logo */}
              <Link href="/">
                <Image src="/datawise-logo.webp" alt="Datawise" width={150} height={40} className="h-10 w-auto brightness-0 invert" />
              </Link>
            </div>
            <p className="text-white/90 mb-6">
              {t('description')}
            </p>
            <div className="flex space-x-4">
              <a href={ContactData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href={ContactData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links - Here we update the hrefs */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{t('company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Here we update the hrefs */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">{t('contact')}</h3>
            <p className="text-white/70 mb-3">
              {ContactData.general.addressLine1}
              <br />
              {ContactData.general.addressLine2}
            </p>
            <p className="text-white/70 mb-3">
              <a href={`tel:${ContactData.general.phone}`} className="hover:text-white transition-colors">
                {ContactData.general.phone}
              </a>
            </p>
            <p className="text-white/70 mb-6">
              <a href={`mailto:${ContactData.general.email}`} className="hover:text-white transition-colors">
                {ContactData.general.email}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10 py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white/70 text-sm mb-4 md:mb-0">© {currentYear} Datawise. {t('allRightsReserved')}</div>
            <div className="flex space-x-6">
              <Link href="/blog/privacy-policy" className="text-white/70 hover:text-white text-sm transition-colors">
                {t('links.privacyPolicy')}
              </Link>
              <Link href="/blog/terms-of-use" className="text-white/70 hover:text-white text-sm transition-colors">
                {t('links.termsOfUse')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Funding */}
      <div className="bg-primary-dark py-4 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <p className="text-white/70 text-sm mr-4">{t('fundedBy')}</p>
            <img src="/cofinanciamento.png" alt="Cofinanciamento" className="h-10 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
