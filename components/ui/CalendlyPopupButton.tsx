import React, { useEffect } from 'react';
import Script from 'next/script';
import { sendGTMEvent } from '@next/third-parties/google';

interface CalendlyPopupButtonProps {
  children?: React.ReactNode;
  className?: string;
  buttonText?: string;
}

declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CalendlyPopupButton: React.FC<CalendlyPopupButtonProps> = ({
  children,
  className = '',
  buttonText = 'Marque uma consulta gratuita',
}) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  useEffect(() => {
    // Add Calendly styles
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Cleanup
      document.head.removeChild(link);
    };
  }, []);

  const handleClick = () => {
    if (window.Calendly) {

      // Sending Google Tag Manager Event
      sendGTMEvent({
        event: 'calendly_popup',
        value: 1
      })

      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    }
  };

  // Default button content if no children are provided
  const buttonContent = children || (
    <>
      {buttonText}
      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </>
  );

  // Determine the correct element to render and its classes
  const isCustomElement = !!children;
  const ElementType = isCustomElement ? 'span' : 'button';

  const elementClasses = isCustomElement
    ? className
    : `inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25 ${className}`;

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
      <ElementType
        onClick={handleClick}
        className={elementClasses}
        style={{ cursor: 'pointer' }} // Ensure cursor pointer for span elements
      >
        {buttonContent}
      </ElementType>
    </>
  );
};

export default CalendlyPopupButton;
