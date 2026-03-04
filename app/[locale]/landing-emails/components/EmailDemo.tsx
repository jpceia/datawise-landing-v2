import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const EmailDemo: React.FC = () => {
  const t = useTranslations('ProductEmails');

  return (
    <section id="demo" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('demo.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('demo.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 16:9 video placeholder */}
          <div className="relative aspect-video bg-white border border-primary-50 rounded-2xl overflow-hidden group cursor-pointer shadow-lg">
            {/* Placeholder background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 to-transparent" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary-50 border border-primary-100 flex items-center justify-center group-hover:bg-primary-100 transition-all group-hover:scale-110">
                <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-gray-500 text-sm">{t('demo.placeholder')}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollTo('contact-form')}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            {t('demo.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailDemo;
