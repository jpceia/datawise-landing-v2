import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Recruitment = () => {
  const benefits = [
    { 
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Ambiente Inovador',
      description: 'Trabalhe com as mais recentes tecnologias em ciência de dados e machine learning.'
    },
    { 
      icon: 'M12 14l9-5-9-5-9 5 9 5z',
      title: 'Desenvolvimento Contínuo',
      description: 'Oferecemos formação e oportunidades de aprendizagem constantes para a sua evolução.'
    },
    { 
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
      title: 'Projetos Globais',
      description: 'Participe em projetos desafiantes com impacto real em diversas indústrias.'
    },
    { 
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      title: 'Equipa Excepcional',
      description: 'Junte-se a um grupo diversificado de profissionais talentosos e apaixonados.'
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-primary-light/20 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              JUNTE-SE A NÓS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Queres trabalhar connosco?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Procuramos talentos apaixonados por dados e análises que queiram fazer parte de uma equipa inovadora.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 transform transition-all hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon}></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" className="flex-1">
                Envia-nos o teu CV
              </Button>
              <Button variant="outline" size="lg" className="flex-1 text-primary">
                Ver oportunidades
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary-light rounded-full animate-pulse opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-primary rounded-full animate-pulse opacity-20"></div>
            
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-[500px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
                  alt="Team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Uma cultura de excelência</h3>
                  <p className="text-white/90">
                    Valorizamos a criatividade, colaboração e aprendizagem contínua em todas as nossas equipas.
                  </p>
                  
                  <div className="flex mt-6 space-x-2">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">Data Science</div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">Engineering</div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white">Business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;