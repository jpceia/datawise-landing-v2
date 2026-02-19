import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const EmailProcess: React.FC = () => {
  const t = useTranslations('ProductEmails');
  const processTitle = t.raw('process.title').replace(/text-emerald-400/g, 'text-primary');

  const steps = [
    {
      number: '1',
      titleKey: 'process.steps.0.title',
      subtitleKey: 'process.steps.0.subtitle',
      descriptionKey: 'process.steps.0.description'
    },
    {
      number: '2',
      titleKey: 'process.steps.1.title',
      subtitleKey: 'process.steps.1.subtitle',
      descriptionKey: 'process.steps.1.description'
    },
    {
      number: '3',
      titleKey: 'process.steps.2.title',
      subtitleKey: 'process.steps.2.subtitle',
      descriptionKey: 'process.steps.2.description'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
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
            dangerouslySetInnerHTML={{ __html: processTitle }}
          />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('process.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-primary-100 via-primary-light to-primary-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-primary-50 border-2 border-primary-200 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary-dark">{step.number}</span>
                </div>

                {/* Step content */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t(step.titleKey)}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {t(step.subtitleKey)}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t(step.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => scrollTo('contact-form')}
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
          >
            {t('process.cta')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailProcess;
