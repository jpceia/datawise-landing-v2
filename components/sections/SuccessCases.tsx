import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const SuccessCases = () => {
  const t = useTranslations('SuccessCases');
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 1,
      title: t('cases.0.title'),
      subtitle: t('cases.0.subtitle'),
      imageUrl: 'https://cdn.sanity.io/images/if94fhok/production/0fc7372f09f4ee34775156ca935a9e8c9d71cb64-1000x667.jpg',
      stats: t.raw('cases.0.stats'),
      description: t('cases.0.description'),
      link: '/blog/auto-caravanas',
      tags: t.raw('cases.0.tags')
    },
    {
      id: 2,
      title: t('cases.1.title'),
      subtitle: t('cases.1.subtitle'),
      imageUrl: 'https://cdn.sanity.io/images/if94fhok/production/8d4ecf73e960d00bc8579feae4ba7a01032a6b88-1000x667.jpg',
      stats: t.raw('cases.1.stats'),
      description: t('cases.1.description'),
      link: '/blog/last-mile',
      tags: t.raw('cases.1.tags')
    },
    {
      id: 3,
      title: t('cases.2.title'),
      subtitle: t('cases.2.subtitle'),
      imageUrl: 'https://cdn.sanity.io/images/if94fhok/production/e8107648ebf85e8665e2681f6add20c149373d63-1000x667.jpg',
      stats: t.raw('cases.2.stats'),
      description: t('cases.2.description'),
      link: '/blog/tvde',
      tags: t.raw('cases.2.tags')
    },
  ];

  return (
    <section id="success-cases" className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M39.9,-65.7C52.8,-60.5,65.2,-52.1,72.6,-39.8C79.9,-27.5,82.2,-11.3,80.3,3.9C78.4,19.1,72.3,33.2,63.2,45.1C54,57,41.8,66.6,28.5,70.8C15.1,75,0.7,73.8,-15.2,72.2C-31.2,70.6,-48.8,68.7,-59.3,59C-69.9,49.3,-73.4,31.7,-76.3,14.5C-79.2,-2.7,-81.5,-19.4,-76.1,-33.3C-70.7,-47.2,-57.5,-58.2,-43.6,-63C-29.6,-67.7,-14.8,-66.1,-0.5,-65.2C13.9,-64.4,27.1,-70.9,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Case selector */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
              <div className="grid grid-cols-3">
                {cases.map((caseItem, index) => (
                  <button
                    key={caseItem.id}
                    className={`py-4 px-3 text-center transition-all ${activeCase === index ? 'bg-primary-light text-white font-medium' : 'bg-transparent hover:bg-white/5'}`}
                    onClick={() => setActiveCase(index)}
                  >
                    {caseItem.subtitle}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">{cases[activeCase].title}</h3>
              <p className="text-white/70 mb-8">{cases[activeCase].description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {cases[activeCase].stats.map((stat: any, index: number) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-light">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Link 
                href={cases[activeCase].link}
                className="inline-flex items-center text-white bg-primary-light/20 hover:bg-primary-light/30 px-5 py-3 rounded-lg transition-colors"
              >
                {t('readFullArticle')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Case image */}
          <div className="relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent z-10"></div>
              <Image
                src={cases[activeCase].imageUrl}
                alt={cases[activeCase].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              
              {/* Badges */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex flex-wrap gap-3">
                  {cases[activeCase].tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;