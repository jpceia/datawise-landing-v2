import React from 'react';
import Image from 'next/image';
import ContactData from '../../utils/ContactData';

const TransformBusiness = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-primary-dark to-primary text-white overflow-hidden relative">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M42.3,-68.8C53.4,-61.2,60.5,-47.1,68.2,-32.9C75.9,-18.8,84.2,-4.7,83.1,8.8C82,22.3,71.5,35.2,59.8,45.4C48.1,55.6,35.2,63.1,21,69.3C6.8,75.4,-8.8,80.1,-22.6,76.2C-36.4,72.3,-48.6,59.8,-57.5,46.2C-66.5,32.5,-72.3,17.6,-73.6,2.2C-74.9,-13.2,-71.7,-29,-64.1,-43.3C-56.5,-57.5,-44.5,-70.2,-30.9,-76.4C-17.2,-82.5,-2,-82.1,12.1,-78.5C26.3,-74.9,31.3,-76.3,42.3,-68.8Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforme o Seu Negócio</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Descubra como as nossas soluções personalizadas podem impulsionar a eficiência e a rentabilidade do seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aumente a Produtividade</h3>
                  <p>Automatize processos e reduza o tempo dedicado a tarefas repetitivas, permitindo que a sua equipa se concentre no que realmente importa.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Otimize Decisões</h3>
                  <p>Transforme dados em insights acionáveis que permitem tomar decisões mais inteligentes e estratégicas para o seu negócio.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform transition-all hover:scale-105 hover:bg-white/20 cursor-pointer">
              <div className="flex items-start">
                <div className="bg-primary-light rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Reduza Custos</h3>
                  <p>Identifique áreas de otimização e elimine desperdícios, aumentando a eficiência operacional e maximizando o retorno sobre o investimento.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <a 
                href={`mailto:${ContactData.general.email}`} 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Agende uma reunião
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative h-full">
            <div className="relative h-full w-full bg-white/5 rounded-2xl backdrop-blur-sm p-6 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full opacity-80">
                  <Image
                    src="/images/photo-1556514767-5c270b96a005.jpeg"
                    alt="Analytics dashboard"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary-light rounded-full opacity-30"></div>
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary-light rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformBusiness;