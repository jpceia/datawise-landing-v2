import React from 'react';
import ContactData from '../../utils/ContactData';

// Types for the component props
interface CallToActionProps {
  variant?: 'light' | 'dark';
}

const CallToAction: React.FC<CallToActionProps> = ({ variant = 'light' }) => {
  // Different styles based on variant
  const isDark = variant === 'dark';
  
  return (
    <section 
      className={`py-16 relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-r from-primary-dark to-primary text-white' 
          : 'bg-gray-50 text-gray-800'
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isDark ? (
          // Dark variant background elements
          <>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary-light/20 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-primary-light/10 translate-y-1/3 -translate-x-1/4"></div>
            <div 
              className="absolute inset-0 opacity-10"
              style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            ></div>
          </>
        ) : (
          // Light variant background elements
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
            Potencialize o seu negócio hoje mesmo
          </h2>
          <p className={`text-xl mb-8 ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
            Descubra como os nossos serviços de ciência de dados podem transformar a sua empresa
          </p>
          <a 
            href={`mailto:${ContactData.general.email}`} 
            className={`inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg ${
              isDark 
                ? 'bg-white text-primary hover:bg-gray-100 hover:shadow-white/25' 
                : 'bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25'
            }`}
          >
            Agende uma consulta gratuita
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;