import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const EmailHero: React.FC = () => {
  const t = useTranslations('ProductEmails');
  const tHero = useTranslations('Hero');
  const heroTitle = t.raw('hero.title').replace(/text-emerald-400/g, 'text-primary');

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-40 md:pt-44 lg:pt-64 pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary-200/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left column - Text */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 border border-primary-100 rounded-full text-primary-dark text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: heroTitle }}
            />

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('contact-form')}
                className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
              >
                {t('hero.ctaPrimary')}
              </button>
              <button
                onClick={() => scrollTo('demo')}
                className="px-8 py-4 bg-transparent border border-blue-600 text-primary rounded-lg font-medium hover:bg-primary-50 transition-all transform hover:scale-105"
              >
                {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </motion.div>

          {/* Right column - Mock Inbox */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white border border-primary-50 rounded-2xl p-6 shadow-lg">
              {/* Inbox header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-gray-500 text-sm font-medium ml-2">{t('hero.inbox.title')}</span>
                <div className="ml-auto flex items-center gap-2">
                  <span className="text-primary-dark text-xs font-medium px-2 py-1 bg-primary-50 rounded-full">
                    {t('hero.inbox.aiLabel')}
                  </span>
                </div>
              </div>

              {/* Email items */}
              <div className="space-y-3">
                {/* Priority email */}
                <div className="flex items-start gap-3 p-3 bg-primary-50 border border-primary-100 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-800 text-sm font-medium truncate">{t('hero.inbox.email1.sender')}</span>
                      <span className="text-primary-dark text-xs px-1.5 py-0.5 bg-primary-50 rounded flex-shrink-0">
                        {t('hero.inbox.email1.tag')}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs truncate">{t('hero.inbox.email1.subject')}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0">2m</span>
                </div>

                {/* Regular email */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-700 text-sm font-medium truncate">{t('hero.inbox.email2.sender')}</span>
                      <span className="text-primary-light text-xs px-1.5 py-0.5 bg-primary/10 rounded flex-shrink-0">
                        {t('hero.inbox.email2.tag')}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs truncate">{t('hero.inbox.email2.subject')}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0">15m</span>
                </div>

                {/* Low priority email */}
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-70">
                  <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-600 text-sm font-medium truncate">{t('hero.inbox.email3.sender')}</span>
                      <span className="text-gray-500 text-xs px-1.5 py-0.5 bg-white rounded border border-gray-200 flex-shrink-0">
                        {t('hero.inbox.email3.tag')}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs truncate">{t('hero.inbox.email3.subject')}</p>
                  </div>
                  <span className="text-gray-400 text-xs flex-shrink-0">1h</span>
                </div>
              </div>

              {/* AI summary bar */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 text-primary-dark text-xs">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>{t('hero.inbox.aiSummary')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <motion.button
          type="button"
          onClick={() => scrollTo('demo')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">{tHero('scrollToExplore')}</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-gray-400 rounded-full"
            />
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default EmailHero;
