import React from 'react';
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

let calendlyLoaderPromise: Promise<void> | null = null;

function ensureCalendlyLoaded(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.resolve();
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyLoaderPromise) {
    return calendlyLoaderPromise;
  }

  calendlyLoaderPromise = new Promise((resolve, reject) => {
    if (!document.querySelector('link[data-calendly-css="true"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      link.setAttribute('data-calendly-css', 'true');
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector('script[data-calendly-widget="true"]') as HTMLScriptElement | null;
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(), {once: true});
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Calendly script')), {once: true});
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.defer = true;
    script.setAttribute('data-calendly-widget', 'true');
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Calendly script'));
    document.body.appendChild(script);
  });

  return calendlyLoaderPromise;
}

const CalendlyPopupButton: React.FC<CalendlyPopupButtonProps> = ({
  children,
  className = '',
  buttonText = 'Marque uma consulta gratuita',
}) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '';

  const handleClick = async () => {
    if (!calendlyUrl) {
      return;
    }

    try {
      await ensureCalendlyLoaded();

      if (!window.Calendly) {
        return;
      }

      sendGTMEvent({
        event: 'calendly_popup',
        value: 1
      });

      window.Calendly.initPopupWidget({
        url: calendlyUrl,
      });
    } catch {
      // Fail silently to avoid blocking UI interaction.
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

  const elementClasses = children
    ? className
    : `inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium text-lg transition-all transform hover:scale-105 shadow-lg bg-primary text-white hover:bg-primary-dark hover:shadow-primary/25 ${className}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={elementClasses}
    >
      {buttonContent}
    </button>
  );
};

export default CalendlyPopupButton;
