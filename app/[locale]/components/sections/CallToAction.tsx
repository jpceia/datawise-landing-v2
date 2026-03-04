import React from 'react';
import { useTranslations } from 'next-intl';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';

interface CallToActionProps {
  variant?: 'light' | 'dark';
}

const CallToAction: React.FC<CallToActionProps> = ({ variant = 'light' }) => {
  const t = useTranslations('CallToAction');
  const isDark = variant === 'dark';

  return (
    <section
      className={`py-16 relative overflow-hidden ${
        isDark ? 'bg-gradient-to-r from-primary-dark to-primary text-white' : 'bg-gray-50 text-gray-800'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          <>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-light/20 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-light/10 translate-y-1/3 -translate-x-1/4"></div>
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>
          </>
        ) : (
          <>
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 -translate-x-1/4"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/5 rounded-full translate-y-1/3 translate-x-1/4"></div>
            <div className="absolute right-1/4 top-1/2 w-12 h-12 bg-primary/10 rounded-full"></div>
            <div
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(#555 1.5px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>
          </>
        )}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
            {t('title')}
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
            {t('subtitle')}
          </p>
          <CalendlyPopupButton className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            {t('buttonText')}
          </CalendlyPopupButton>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
