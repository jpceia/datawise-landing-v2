import React from 'react';
import { useTranslations } from 'next-intl';

const MissionValues = () => {
  const t = useTranslations('MissionValues');

  const pillars = [
    {
      icon: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
      title: t('pillars.0.title'),
      description: t('pillars.0.description'),
      features: t.raw('pillars.0.features')
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: t('pillars.1.title'),
      description: t('pillars.1.description'),
      features: t.raw('pillars.1.features')
    },
    {
      icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      title: t('pillars.2.title'),
      description: t('pillars.2.description'),
      features: t.raw('pillars.2.features')
    }
  ];

  return (
    <section id="values" className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full border-4 border-white"></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border-4 border-white"></div>
        <div className="absolute left-1/3 top-20 w-12 h-12 rounded-full bg-white"></div>
        <div className="absolute right-1/4 bottom-10 w-16 h-16 rounded-full bg-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-lg opacity-80">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transform transition-all hover:translate-y-[-10px] hover:bg-white/15 ${
              index === 1 ? 'md:mt-8' : index === 2 ? 'md:mt-16' : ''
            }`}>
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={pillar.icon}></path>
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-center opacity-90 mb-8">
                {pillar.description}
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                {pillar.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center mt-2 first:mt-0">
                    <svg className="w-5 h-5 text-primary-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="opacity-80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionValues;