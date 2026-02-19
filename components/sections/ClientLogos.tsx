import React from 'react';
import { useTranslations } from 'next-intl';

const clients = [
  { name: 'Mars Petcare', logo: '/client-logos/mars-petcare.svg' },
  { name: 'Andela', logo: '/client-logos/andela.svg' },
  { name: 'Autoridade da Concorrência', logo: '/client-logos/autoridade-concorrencia.svg' },
  { name: 'Porto de Sines', logo: '/client-logos/porto-de-sines.svg' },
  { name: 'Dingoo', logo: '/client-logos/dingoo.svg' },
  { name: 'IndieCampers', logo: '/client-logos/indiecampers.svg' },
  { name: 'SulInvest', logo: '/client-logos/sulinvest.svg' },
];

const LogoItem = ({ client, isDuplicate }: { client: typeof clients[0]; isDuplicate?: boolean }) => (
  <div
    className="relative h-10 w-28 sm:h-12 sm:w-36 shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
    aria-hidden={isDuplicate}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={client.logo}
      alt={isDuplicate ? '' : client.name}
      className="h-full w-full object-contain"
      loading="lazy"
    />
  </div>
);

const ClientLogos: React.FC = () => {
  const t = useTranslations('ClientLogos');

  return (
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden">
      {/* Section title */}
      <p className="text-center text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-gray-400 mb-8 sm:mb-10">
        {t('title')}
      </p>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track - hover pauses animation */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
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
