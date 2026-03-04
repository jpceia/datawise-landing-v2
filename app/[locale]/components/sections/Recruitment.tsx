import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactData from '@/lib/data/ContactData';

const Recruitment = () => {
  const t = useTranslations('Recruitment');

  const benefits = [
    { 
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: t('benefits.0.title'),
      description: t('benefits.0.description')
    },
    { 
      icon: 'M12 14l9-5-9-5-9 5 9 5z',
      title: t('benefits.1.title'),
      description: t('benefits.1.description')
    },
    { 
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      title: t('benefits.2.title'),
      description: t('benefits.2.description')
    },
    { 
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: t('benefits.3.title'),
      description: t('benefits.3.description')
    },
  ];

  return (
    <section id="careers" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-light/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              badge={t('badge')}
              title={t('title')}
              subtitle={t('subtitle')}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <FeatureCard
                  key={index}
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon}></path>
                    </svg>
                  }
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
            
            <div className="flex justify-center">
              <a 
                href={`mailto:${ContactData.careers.email}`} 
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                {t('sendCV')}
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-light rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary rounded-full opacity-20"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/images/photo-1522071820081-009f0129c71c.jpeg"
                  alt="Team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{t('cultureTitle')}</h3>
                  <p className="text-white/90">
                    {t('cultureDescription')}
                  </p>
                  
                  <div className="flex mt-6 space-x-2">
                    <Badge variant="light" size="sm">Data Science</Badge>
                    <Badge variant="light" size="sm">Engineering</Badge>
                    <Badge variant="light" size="sm">Business</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;