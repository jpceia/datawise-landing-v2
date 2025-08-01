import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const TechMaturity = () => {
  const t = useTranslations('TechMaturity');
  const [activeStage, setActiveStage] = useState(0);
  
  const maturityStages = [
    {
      id: 1,
      title: t('stages.0.title'),
      subtitle: t('stages.0.subtitle'),
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      imageUrl: '/images/photo-1544383835-bda2bc66a55d.jpeg',
      description: t('stages.0.description'),
      features: t.raw('stages.0.features')
    },
    {
      id: 2,
      title: t('stages.1.title'),
      subtitle: t('stages.1.subtitle'),
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      imageUrl: '/images/photo-1608222351212-18fe0ec7b13b.jpeg',
      description: t('stages.1.description'),
      features: t.raw('stages.1.features')
    },
    {
      id: 3,
      title: t('stages.2.title'),
      subtitle: t('stages.2.subtitle'),
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      imageUrl: '/images/photo-1535378620166-273708d44e4c.jpeg',
      description: t('stages.2.description'),
      features: t.raw('stages.2.features')
    },
  ];
  
  // Animation variants for various elements
  const timelineVariants: Variants = {
    initial: { width: "0%" },
    animate: (activeIndex: number) => ({
      width: `${((activeIndex + 1) / maturityStages.length) * 100}%`,
      transition: { duration: 0.8, ease: "easeInOut" }
    })
  };
  
  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    exit: { 
      opacity: 0, 
      y: -30,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      } 
    }
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { 
        duration: 0.3,
        ease: "easeIn"
      } 
    }
  };
  
  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };
  
  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.4,
        delay: 0.3 + (i * 0.1),
        ease: "easeOut"
      } 
    })
  };

  const handleStageChange = (index: number) => {
    setActiveStage(index);
  };

  return (
    <section id="methodology" className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
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
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>
        
        {/* Timeline with fixed buttons */}
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
            {maturityStages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center">
                <motion.button 
                  className={`bg-white rounded-full focus:outline-none transition-all box-content flex items-center justify-center
                             ${activeStage === index 
                                ? 'border-4 border-primary-light text-primary' 
                                : 'border-4 border-white text-gray-500 hover:text-gray-700'}`}
                  style={{width: '52px', height: '52px'} as React.CSSProperties}
                  onClick={() => handleStageChange(index)}
                  variants={buttonVariants}
                  initial="idle"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stage.icon}></path>
                  </svg>
                </motion.button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Titles below buttons with fixed height */}
        <div className="flex justify-between max-w-3xl mx-auto mb-16">
          {maturityStages.map((stage, index) => (
            <div key={`label-${stage.id}`} className="w-1/3 text-center px-4 mx-5">
              {/* Container with fixed height to avoid displacements */}
              <div className="h-16">
                <motion.h4 
                  className={`font-bold transition-all ${activeStage === index ? 'text-primary text-lg' : 'text-gray-500'}`}
                  animate={{ 
                    fontSize: activeStage === index ? "1.125rem" : "1rem",
                    color: activeStage === index ? "#0D47A1" : "#6B7280",
                    transition: { duration: 0.4 }
                  }}
                >
                  {stage.title}
                </motion.h4>
                <motion.p 
                  className={`text-sm transition-all ${activeStage === index ? 'text-gray-800' : 'text-gray-500'}`}
                  animate={{ 
                    color: activeStage === index ? "#1F2937" : "#6B7280",
                    transition: { duration: 0.4 }
                  }}
                >
                  {stage.subtitle}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Detailed content */}
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
                  {maturityStages[activeStage].title}: {maturityStages[activeStage].subtitle}
                </h3>
                <p className="text-gray-600 mb-6">
                  {maturityStages[activeStage].description}
                </p>
                
                <div className="space-y-4">
                  {maturityStages[activeStage].features.map((feature: string, idx: number) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start"
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={featureVariants}
                    >
                      <div className="bg-primary/10 rounded-full p-1 mr-4">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Progress indicator */}
                <div className="mt-8 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-primary h-full rounded-full"
                    initial={{ width: `${((activeStage) / maturityStages.length) * 100}%` }}
                    animate={{ width: `${((activeStage + 1) / maturityStages.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  ></motion.div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500">
                  {t('phase')} {activeStage + 1} {t('of')} {maturityStages.length}
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
                  src={maturityStages[activeStage].imageUrl}
                  alt={maturityStages[activeStage].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* Icon overlay */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/90 rounded-full p-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4
                    }
                  }}
                >
                  <svg 
                    className="w-8 h-8 text-primary" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={maturityStages[activeStage].icon}></path>
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

export default TechMaturity;