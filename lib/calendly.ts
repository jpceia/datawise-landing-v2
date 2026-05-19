declare global {
  interface Window {
    Calendly: {
      initPopupWidget: (options: {
        url: string;
        prefill?: {
          name?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          customAnswers?: Record<string, string>;
        };
      }) => void;
    };
  }
}

let calendlyLoaderPromise: Promise<void> | null = null;

export function ensureCalendlyLoaded(): Promise<void> {
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
      existingScript.addEventListener('load', () => resolve(), { once: true });
      existingScript.addEventListener('error', () => reject(new Error('Failed to load Calendly script')), { once: true });
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
