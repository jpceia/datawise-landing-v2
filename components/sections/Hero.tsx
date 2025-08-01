import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Globe3D from '@/components/ui/Globe3D';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="relative w-full h-screen bg-white overflow-hidden pt-11">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content container with flex layout */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col lg:flex-row items-center pt-16 lg:pt-0">
        {/* Left side - Text content */}
        <div className="w-full lg:w-5/12 lg:pr-8 order-1 lg:order-2 mt-8 lg:mt-0 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl lg:text-5xl mt-10 lg:mt-0 font-bold text-gray-800 mb-6"
          >
            {t('title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10"
            dangerouslySetInnerHTML={{ __html: t('subtitle') }}
          />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <CalendlyPopupButton className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
              {t('ctaSchedule')}
            </CalendlyPopupButton>
            <Link
              href="#services"
              className="px-8 py-4 bg-transparent border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              {t('ctaServices')}
            </Link>
          </motion.div>

          {/* Trust indicators 
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <p className="text-gray-500 text-sm mb-4">Empresas que confiam na Datawise</p>
            <div className="flex flex-wrap gap-8 opacity-50">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
            </div>
          </motion.div>
          */}
        </div>

        {/* Right side - Globe */}
        <div className="w-full lg:w-7/12 h-auto order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
            style={{ top: '-50px' } as React.CSSProperties}
          >
            <div>
              <Globe3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">{t('scrollToExplore')}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-gray-400 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
