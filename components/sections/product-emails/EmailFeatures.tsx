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

const featureIcons = [
  // Smart Classification icon
  <svg key="classify" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>,
  // Auto-Response icon
  <svg key="respond" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>,
  // Analytics icon
  <svg key="analytics" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
];

const EmailFeatures: React.FC = () => {
  const t = useTranslations('ProductEmails');
  const featuresTitle = t.raw('features.title').replace(/text-emerald-400/g, 'text-primary');

  const features = [
    {
      icon: featureIcons[0],
      titleKey: 'features.items.0.title',
      descriptionKey: 'features.items.0.description'
    },
    {
      icon: featureIcons[1],
      titleKey: 'features.items.1.title',
      descriptionKey: 'features.items.1.description'
    },
    {
      icon: featureIcons[2],
      titleKey: 'features.items.2.title',
      descriptionKey: 'features.items.2.description'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: featuresTitle }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center text-primary mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollTo('contact-form')}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            {t('features.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailFeatures;
