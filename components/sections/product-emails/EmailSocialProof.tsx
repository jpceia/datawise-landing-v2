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

const EmailSocialProof: React.FC = () => {
  const t = useTranslations('ProductEmails');

  const stats = [
    {
      valueKey: 'socialProof.stats.0.value',
      labelKey: 'socialProof.stats.0.label'
    },
    {
      valueKey: 'socialProof.stats.1.value',
      labelKey: 'socialProof.stats.1.label'
    },
    {
      valueKey: 'socialProof.stats.2.value',
      labelKey: 'socialProof.stats.2.label'
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('socialProof.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('socialProof.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white border border-gray-200 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {t(stat.valueKey)}
              </p>
              <p className="text-gray-600 text-sm">
                {t(stat.labelKey)}
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
            {t('socialProof.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSocialProof;
