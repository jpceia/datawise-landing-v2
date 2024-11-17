"use client";

import { useEffect } from 'react';

export default function Hero() {
  // Add Ubuntu font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h1 className="font-ubuntu text-5xl md:text-6xl font-bold text-primary leading-tight">
              Transforme seus dados em resultados reais
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl">
              Soluções personalizadas de análise de dados que impulsionam 
              o crescimento do seu negócio de forma inteligente e eficiente.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#schedule"
                className="
                  bg-primary text-white 
                  px-8 py-3 rounded-md 
                  font-semibold 
                  transform hover:-translate-y-1 
                  transition-all duration-300
                  shadow-button hover:shadow-lg
                "
              >
                Agende uma reunião
              </a>
              
              <a 
                href="#learn-more"
                className="
                  border-2 border-primary text-primary 
                  px-8 py-3 rounded-md 
                  font-semibold 
                  transform hover:-translate-y-1 
                  transition-all duration-300
                  shadow-button hover:shadow-lg
                "
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Right Column - Globe Placeholder */}
          <div className="aspect-square bg-gray-100 rounded-lg">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Globo 3D
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
