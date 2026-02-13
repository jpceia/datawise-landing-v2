import React from 'react';
import { useTranslations } from 'next-intl';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    {
      id: 1,
      title: t('items.1.title'),
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
      description: t('items.1.description'),
      link: '/competitive-intelligence',
    },
    {
      id: 2,
      title: t('items.2.title'),
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      description: t('items.2.description'),
      link: '/workflow-automation',
    },
    {
      id: 3,
      title: t('items.0.title'),
      icon: 'M12 4a8 8 0 100 16 8 8 0 000-16z M9 9c1-1 2-1 3-1 M5 20h14',
      description: t('items.0.description'),
      link: '/predictive-models',
    },
    {
      id: 4,
      title: t('items.3.title'),
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      description: t('items.3.description'),
      link: '/operational-optimization',
    },
    {
      id: 5,
      title: t('items.4.title'),
      icon: 'M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707L13 15v4a1 1 0 01-.553.894l-2 1A1 1 0 019 20v-5L1.293 7.293A1 1 0 011 6.586V4z',
      description: t('items.4.description'),
      link: '/document-classification',
    },
    {
      id: 6,
      title: t('items.5.title'),
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      description: t('items.5.description'),
      link: '/information-normalization',
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
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;