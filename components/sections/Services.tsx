import React from 'react';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-gradient-to-r from-primary/80 to-primary-light/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full">
    <div className="p-6 text-white">
      <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="opacity-90">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    {
      id: 1,
      title: t('items.0.title'),
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      description: t('items.0.description'),
    },
    {
      id: 2,
      title: t('items.1.title'),
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      description: t('items.1.description'),
    },
    {
      id: 3,
      title: t('items.2.title'),
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      description: t('items.2.description'),
    },
    {
      id: 4,
      title: t('items.3.title'),
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      description: t('items.3.description'),
    },
    {
      id: 5,
      title: t('items.4.title'),
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      description: t('items.4.description'),
    },
    {
      id: 6,
      title: t('items.5.title'),
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      description: t('items.5.description'),
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary-light/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('title')}</h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;