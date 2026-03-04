import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clients = [
  { name: 'Mars Petcare', logo: '/client-logos/mars-petcare.png' },
  { name: 'Andela', logo: '/client-logos/andela.png' },
  { name: 'Autoridade da Concorrência', logo: '/client-logos/autoridade-concorrencia.png' },
  { name: 'Porto de Sines', logo: '/client-logos/porto-de-sines.png' },
  { name: 'Dingoo', logo: '/client-logos/dingoo.png' },
  { name: 'IndieCampers', logo: '/client-logos/indiecampers.png' },
  { name: 'SulInvest', logo: '/client-logos/sulinvest.png' },
];

const LogoItem = ({ client, isDuplicate }: { client: typeof clients[0]; isDuplicate?: boolean }) => (
  <div
    className="relative h-10 w-28 sm:h-12 sm:w-36 shrink-0 brightness-0 invert opacity-40"
    aria-hidden={isDuplicate}
  >
    <Image
      src={client.logo}
      alt={isDuplicate ? '' : client.name}
      fill
      sizes="144px"
      className="object-contain"
    />
  </div>
);

const ClientLogos: React.FC = () => {
  const t = useTranslations('ClientLogos');

  return (
    <section className="relative pt-10 sm:pt-14 bg-gradient-to-r from-primary-dark to-primary">
      {/* Section title */}
      <p className="text-center text-white/50 text-sm mb-8 sm:mb-10">
        {t('title')}
      </p>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-primary-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - hover pauses animation */}
        <div className="flex animate-marquee will-change-transform">
          {/* First set */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 lg:gap-20 px-5 sm:px-7 lg:px-10">
            {clients.map((client) => (
              <LogoItem key={client.name} client={client} />
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0 items-center gap-10 sm:gap-14 lg:gap-20 px-5 sm:px-7 lg:px-10">
            {clients.map((client) => (
              <LogoItem key={`dup-${client.name}`} client={client} isDuplicate />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
