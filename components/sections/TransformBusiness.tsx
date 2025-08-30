import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';

const TransformBusiness = () => {
  const t = useTranslations('TransformBusiness');

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-primary-dark to-primary text-white overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFFFFF"
            d="M42.3,-68.8C53.4,-61.2,60.5,-47.1,68.2,-32.9C75.9,-18.8,84.2,-4.7,83.1,8.8C82,22.3,71.5,35.2,59.8,45.4C48.1,55.6,35.2,63.1,21,69.3C6.8,75.4,-8.8,80.1,-22.6,76.2C-36.4,72.3,-48.6,59.8,-57.5,46.2C-66.5,32.5,-72.3,17.6,-73.6,2.2C-74.9,-13.2,-71.7,-29,-64.1,-43.3C-56.5,-57.5,-44.5,-70.2,-30.9,-76.4C-17.2,-82.5,-2,-82.1,12.1,-78.5C26.3,-74.9,31.3,-76.3,42.3,-68.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">{t('badge')}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('title')}</h2>
          <p className="text-xl max-w-3xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0 M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('productivity.title')}</h3>
                  <p>{t('productivity.description')}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 10.27 7 3.34 M11 13.73l-4 6.93 M12 22v-2 M12 2v2 M14 12h8 M17 20.66l-1-1.73 M17 3.34l-1 1.73 M2 12h2 M20.66 17l-1.73-1 M20.66 7l-1.73 1 M3.34 17l1.73-1 M3.34 7l1.73 1 M12 12m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0 M12 12m-8 0a8 8 0 1 1 16 0a8 8 0 1 1-16 0"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('decisions.title')}</h3>
                  <p>{t('decisions.description')}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978 M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978 M18 9h1.5a1 1 0 0 0 0-5H18 M4 22h16 M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z M6 9H4.5a1 1 0 0 1 0-5H6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t('costs.title')}</h3>
                  <p>{t('costs.description')}</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                {t('scheduleMeeting')}
              </CalendlyPopupButton>
            </div>
          </div>

          <div className="hidden lg:block relative h-full">
            <div className="relative h-full w-full bg-white/5 rounded-2xl backdrop-blur-sm p-6 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full opacity-80">
                  <Image
                    src="/images/photo-1556514767-5c270b96a005.jpeg"
                    alt="Analytics dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-light rounded-full opacity-30"></div>
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary-light rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;
