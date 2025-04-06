import React from 'react';
import Image from 'next/image';

const Technologies = () => {
  const technologies = [
    { 
      id: 1, 
      name: 'Python', 
      logo: '/tech-logos/python.png'
    },
    { 
      id: 2, 
      name: 'Jupyter', 
      logo: '/tech-logos/Jupyter_logo.svg.webp'
    },
    { 
      id: 3, 
      name: 'scikit-learn', 
      logo: '/tech-logos/Scikit_learn_logo_small.svg.png'
    },
    { 
      id: 4, 
      name: 'XGBoost', 
      logo: '/tech-logos/XGBoost_logo.png'
    },
    { 
      id: 5, 
      name: 'TensorFlow', 
      logo: '/tech-logos/Tensorflow_logo.svg.png'
    },
    { 
      id: 6, 
      name: 'Azure', 
      logo: '/tech-logos/Microsoft_Azure.svg.png'
    },
    { 
      id: 7, 
      name: 'Microsoft Cognitive Services', 
      logo: '/tech-logos/Microsoft_logo_(2012).svg.png'
    },
    { 
      id: 8, 
      name: 'OpenAI', 
      logo: '/tech-logos/openai-icon-2021x2048-4rpe5x7n.png'
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-0 top-0 h-full w-1/3" style={{ backgroundImage: 'radial-gradient(#0D47A1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="absolute right-0 top-0 h-full w-1/3" style={{ backgroundImage: 'radial-gradient(#0D47A1 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            NOSSAS FERRAMENTAS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            As tecnologias que nos permitem entregar resultados excecionais
          </h2>
          <p className="text-lg text-gray-600">
            Utilizamos as mais avançadas ferramentas e plataformas para desenvolver soluções de classe mundial.
          </p>
        </div>
        
        {/* Technology logos */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent z-10"></div>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl py-12 px-8 shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {technologies.map((tech) => (
                <div key={tech.id} className="group transform transition-all hover:scale-110">
                  <div className="h-24 flex items-center justify-center transition-all">
                    <div className="relative w-16 h-16">
                      <Image
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain"
                        priority={tech.id <= 4} // Priorizar carregamento das primeiras 4 imagens
                      />
                    </div>
                  </div>
                  <p className="text-center text-gray-700 mt-3 font-medium">{tech.name}</p>
                </div>
              ))}
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Soluções Seguras</h3>
                <p className="text-gray-600">Garantimos o mais alto nível de segurança para os seus dados e aplicações.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Alta Performance</h3>
                <p className="text-gray-600">Tecnologias otimizadas para garantir velocidade e eficiência nas análises.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Escalabilidade</h3>
                <p className="text-gray-600">Soluções que crescem com o seu negócio, adaptando-se às suas necessidades.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;