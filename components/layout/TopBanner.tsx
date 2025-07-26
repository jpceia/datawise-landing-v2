import React from 'react';
import CalendlyPopupButton from '@/components/ui/CalendlyPopupButton';

const TopBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 text-white py-3 px-4 text-center font-medium text-sm sm:text-base shadow-lg">
      <CalendlyPopupButton className="inline-flex items-center justify-center hover:scale-105 transition-all duration-200 cursor-pointer group">
        <span className="flex items-center justify-center space-x-2">
          <span className="animate-pulse">⚠️</span>
          <span>Apenas 5 vagas restantes → reserve a sua este mês!</span>
        </span>
      </CalendlyPopupButton>
    </div>
  );
};

export default TopBanner;
