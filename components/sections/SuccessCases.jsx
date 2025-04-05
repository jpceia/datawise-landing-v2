import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SuccessCases = () => {
  const [activeCase, setActiveCase] = useState(0);

  const cases = [
    {
      id: 1,
      title: 'Empresa de Aluguer de Auto-Caravanas',
      subtitle: 'Otimização de One-Way Fees',
      imageUrl: 'https://images.unsplash.com/photo-1515876305430-f06edab8282a?q=80&w=1000',
      stats: [
        { value: '32%', label: 'Aumento de rentabilidade' },
        { value: '45%', label: 'Redução em custos logísticos' },
        { value: '28%', label: 'Melhoria na taxa de ocupação' },
      ],
      description: 'Este é um exemplo de sucesso de uma empresa de aluguer de auto-caravanas, onde conseguimos otimizar o processo de gestão de frota e, consequentemente, melhorar os seus resultados operacionais.',
      link: '/casos/auto-caravanas',
    },
    {
      id: 2,
      title: 'Transportadora Last-Mile Delivery',
      subtitle: 'Planeamento de Rotas',
      imageUrl: 'https://images.unsplash.com/photo-1586323287528-81d965080672?q=80&w=1000',
      stats: [
        { value: '47%', label: 'Redução no tempo de entrega' },
        { value: '39%', label: 'Economia de combustível' },
        { value: '86%', label: 'Aumento na satisfação do cliente' },
      ],
      description: 'Mais um caso de sucesso com uma transportadora especializada em last-mile delivery, onde ajudámos a resolver um desafio operacional bastante específico.',
      link: '/casos/last-mile',
    },
    {
      id: 3,
      title: 'Empresa TVDE',
      subtitle: 'Dashboard de Rentabilidade',
      imageUrl: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000',
      stats: [
        { value: '58%', label: 'Aumento na rentabilidade por motorista' },
        { value: '24%', label: 'Otimização de horas de trabalho' },
        { value: '35%', label: 'Redução de custos operacionais' },
      ],
      description: 'A história de como auxiliámos uma empresa de TVDE a resolver um desafio crítico relacionado com a visibilidade da rentabilidade.',
      link: '/casos/tvde',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M39.9,-65.7C52.8,-60.5,65.2,-52.1,72.6,-39.8C79.9,-27.5,82.2,-11.3,80.3,3.9C78.4,19.1,72.3,33.2,63.2,45.1C54,57,41.8,66.6,28.5,70.8C15.1,75,0.7,73.8,-15.2,72.2C-31.2,70.6,-48.8,68.7,-59.3,59C-69.9,49.3,-73.4,31.7,-76.3,14.5C-79.2,-2.7,-81.5,-19.4,-76.1,-33.3C-70.7,-47.2,-57.5,-58.2,-43.6,-63C-29.6,-67.7,-14.8,-66.1,-0.5,-65.2C13.9,-64.4,27.1,-70.9,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            RESULTADOS REAIS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Sucesso</h2>
          <p className="text-lg opacity-80">
            Transformações reais de negócios através de parcerias bem-sucedidas com a nossa equipa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Case selector */}
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden mb-8">
              <div className="grid grid-cols-3">
                {cases.map((caseItem, index) => (
                  <button
                    key={caseItem.id}
                    className={`py-4 px-3 text-center transition-all ${activeCase === index ? 'bg-primary-light text-white font-medium' : 'bg-transparent hover:bg-white/5'}`}
                    onClick={() => setActiveCase(index)}
                  >
                    {caseItem.subtitle}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">{cases[activeCase].title}</h3>
              <p className="text-white/70 mb-8">{cases[activeCase].description}</p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                {cases[activeCase].stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-primary-light">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <Link 
                href={cases[activeCase].link}
                className="inline-flex items-center text-white bg-primary-light/20 hover:bg-primary-light/30 px-5 py-3 rounded-lg transition-colors"
              >
                Ler artigo completo
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Case image */}
          <div className="relative">
            <div className="relative h-[450px] w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 to-transparent z-10"></div>
              <Image
                src={cases[activeCase].imageUrl}
                alt={cases[activeCase].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              
              {/* Badges */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Data Analysis</span>
                  <span className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Optimization</span>
                  <span className="bg-primary-light/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;