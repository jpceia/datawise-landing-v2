import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const OurProcess = () => {
  const t = useTranslations('OurProcess');
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 1,
      title: t('stages.0.title'),
      subtitle: t('stages.0.subtitle'),
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
      imageUrl: '/images/pexels-fauxels-3183183.jpg',
      description: t('stages.0.description'),
      features: t.raw('stages.0.features') as string[],
    },
    {
      id: 2,
      title: t('stages.1.title'),
      subtitle: t('stages.1.subtitle'),
      icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      imageUrl: '/images/photo-1608222351212-18fe0ec7b13b.jpeg',
      description: t('stages.1.description'),
      features: t.raw('stages.1.features') as string[],
    },
    {
      id: 3,
      title: t('stages.2.title'),
      subtitle: t('stages.2.subtitle'),
      icon: 'M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25',
      imageUrl: '/images/photo-1535378620166-273708d44e4c.jpeg',
      description: t('stages.2.description'),
      features: t.raw('stages.2.features') as string[],
    },
  ];

  const timelineVariants: Variants = {
    initial: { width: '0%' },
    animate: (activeIndex: number) => ({
      width: `${((activeIndex + 1) / stages.length) * 100}%`,
      transition: { duration: 0.8, ease: 'easeInOut' },
    }),
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.3 + i * 0.08, ease: 'easeOut' },
    }),
  };

  return (
    <section id="methodology" className="py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('badge')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{t('title')}</h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </motion.div>

        {/* Timeline */}
        <div className="flex justify-center mb-10 relative">
          <div className="bg-gray-300 h-1 absolute top-1/2 left-0 right-0"></div>
          <motion.div
            className="bg-primary h-1 absolute top-1/2 left-0"
            initial="initial"
            animate="animate"
            custom={activeStage}
            variants={timelineVariants}
          ></motion.div>
          <div className="flex justify-between relative z-10 w-full max-w-3xl">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center">
                <motion.button
                  className={`bg-white rounded-full focus:outline-none transition-all box-content flex items-center justify-center
                    ${activeStage === index
                      ? 'border-4 border-primary-light text-primary'
                      : 'border-4 border-white text-gray-500 hover:text-gray-700'}`}
                  style={{ width: '52px', height: '52px' } as React.CSSProperties}
                  onClick={() => setActiveStage(index)}
                  variants={buttonVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stage.icon}></path>
                  </svg>
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Stage labels */}
        <div className="flex justify-between max-w-3xl mx-auto mb-16">
          {stages.map((stage, index) => (
            <div key={`label-${stage.id}`} className="w-1/3 text-center px-4 mx-5">
              <div className="h-16">
                <motion.h4
                  className={`font-bold transition-all ${activeStage === index ? 'text-primary text-lg' : 'text-gray-500'}`}
                  animate={{
                    fontSize: activeStage === index ? '1.125rem' : '1rem',
                    color: activeStage === index ? '#0D47A1' : '#6B7280',
                    transition: { duration: 0.4 },
                  }}
                >
                  {stage.title}
                </motion.h4>
                <motion.p
                  className={`text-sm transition-all ${activeStage === index ? 'text-gray-800' : 'text-gray-500'}`}
                  animate={{
                    color: activeStage === index ? '#1F2937' : '#6B7280',
                    transition: { duration: 0.4 },
                  }}
                >
                  {stage.subtitle}
                </motion.p>
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeStage}`}
                className="bg-white rounded-xl shadow-lg p-8"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {stages[activeStage].title}
                </h3>
                <p className="text-gray-600 mb-6">{stages[activeStage].description}</p>

                <div className="space-y-3">
                  {stages[activeStage].features.map((feature: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="flex items-start"
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={featureVariants}
                    >
                      <div className="bg-primary/10 rounded-full p-1 mr-4 mt-0.5 shrink-0">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-8 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: `${(activeStage / stages.length) * 100}%` }}
                    animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  ></motion.div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500">
                  {t('phase')} {activeStage + 1} {t('of')} {stages.length}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${activeStage}`}
                className="relative rounded-xl overflow-hidden shadow-lg h-[400px]"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/60"></div>
                <Image
                  src={stages[activeStage].imageUrl}
                  alt={stages[activeStage].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <motion.div
                  className="absolute top-6 right-6 bg-white/90 rounded-full p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 260, damping: 20, delay: 0.4 },
                  }}
                >
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stages[activeStage].icon}></path>
                  </svg>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
