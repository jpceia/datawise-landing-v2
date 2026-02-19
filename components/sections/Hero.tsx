import React from 'react';
import { useTranslations } from 'next-intl';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary"
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 font-sans"
          dangerouslySetInnerHTML={{ __html: t('title') }}
        />

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-white/80 mb-10 max-w-lg"
          dangerouslySetInnerHTML={{ __html: t('subtitle') }}
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CalendlyPopupButton className="px-8 py-4 bg-primary-800 text-white font-medium rounded-lg border border-white/30 hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg">
            {t('ctaSchedule')}
          </CalendlyPopupButton>
          <Link
            href="#services"
            className="px-8 py-4 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition-all transform hover:scale-105"
          >
            {t('ctaServices')}
          </Link>
        </motion.div>


      </div>

      <motion.img
        src="/Data-Wise_Hero-Section-Website-1440px.svg"
        alt=""
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, delay: 1.0, ease: 'easeInOut' }}
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-[60vh] lg:h-[56vh] w-auto max-w-none pointer-events-none hidden sm:block"
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/60 text-sm mb-2">{t('scrollToExplore')}</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-1 bg-white/60 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
