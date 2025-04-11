import React, { useState } from 'react';
import Image from 'next/image';

const TechMaturity = () => {
  const [activeStage, setActiveStage] = useState(0);
  
  const maturityStages = [
    {
      id: 1,
      title: 'Dados',
      subtitle: 'Fontes, Recolha e Armazenamento',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000',
      description: 'Nesta fase focamo-nos na identificação e organização das Fontes de Dados relevantes para o negócio. Estes podem incluir dados operacionais, financeiros, de clientes, entre outros.',
      features: [
        'Mapeamento de fontes de dados',
        'Integração de sistemas',
        'Infraestrutura de armazenamento',
        'Garantia de qualidade dos dados'
      ]
    },
    {
      id: 2,
      title: 'Investigação',
      subtitle: 'Analytics e Estatística Descritiva',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      imageUrl: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1000',
      description: 'A partir desta etapa começamos a explorar os dados que recolhemos. Através de Analytics e Estatística Descritiva, descobrimos padrões e tendências, ajudando-nos a identificar áreas de melhoria e otimização dentro da operação.',
      features: [
        'Análise exploratória de dados',
        'Visualização avançada',
        'Detecção de padrões e correlações',
        'Relatórios interativos'
      ]
    },
    {
      id: 3,
      title: 'Automação',
      subtitle: 'Inteligência Artificial e Algoritmos',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      imageUrl: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1000',
      description: 'Através de Inteligência Artificial, de Algoritmos e da Otimização garantimos a maximização de resultados com o mínimo de recursos, garantindo eficiência operacional e melhores resultados para os nossos clientes.',
      features: [
        'Algoritmos de machine learning',
        'Sistemas de decisão automatizados',
        'Otimização contínua',
        'Integração com sistemas existentes'
      ]
    },
  ];

  return (
    <section className="py-24 bg-gray-100 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            NOSSA METODOLOGIA
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Maturidade Tecnológica</h2>
          <p className="text-lg text-gray-600">
            Do levantamento de dados à automação: o nosso caminho para a inovação e transformação digital.
          </p>
        </div>
        
        {/* Timeline com botões fixos */}
        <div className="flex justify-center mb-10 relative">
          <div className="bg-gray-300 h-1 absolute top-1/2 left-0 right-0"></div>
          <div className="flex justify-between relative z-10 w-full max-w-3xl">
            {maturityStages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center">
                <button 
                  className={`bg-white rounded-full focus:outline-none transition-all box-content
                             ${activeStage === index 
                                ? 'border-4 border-primary-light text-primary' 
                                : 'border-4 border-white text-gray-500 hover:text-gray-700'}`}
                  style={{width: '52px', height: '52px'}}
                  onClick={() => setActiveStage(index)}
                >
                  <svg 
                    className="w-6 h-6 mx-auto" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stage.icon}></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Títulos abaixo dos botões com altura fixa */}
        <div className="flex justify-between max-w-3xl mx-auto mb-16">
          {maturityStages.map((stage, index) => (
            <div key={`label-${stage.id}`} className="w-1/3 text-center px-4">
              {/* Contentor com altura fixa para evitar deslocamentos */}
              <div className="h-16">
                <h4 
                  className={`font-bold transition-all ${activeStage === index ? 'text-primary text-lg' : 'text-gray-500'}`}
                >
                  {stage.title}
                </h4>
                <p className={`text-sm transition-all ${activeStage === index ? 'text-gray-800' : 'text-gray-500'}`}>
                  {stage.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Conteúdo detalhado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                {maturityStages[activeStage].title}: {maturityStages[activeStage].subtitle}
              </h3>
              <p className="text-gray-600 mb-6">
                {maturityStages[activeStage].description}
              </p>
              
              <div className="space-y-4">
                {maturityStages[activeStage].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-1 mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Indicador de progresso */}
              <div className="mt-8 bg-gray-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full transition-all duration-500"
                  style={{ width: `${((activeStage + 1) / maturityStages.length) * 100}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-500">
                Fase {activeStage + 1} de {maturityStages.length}
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-dark/60"></div>
              <Image
                src={maturityStages[activeStage].imageUrl}
                alt={maturityStages[activeStage].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
              />
              
              {/* Icon overlay */}
              <div className="absolute top-6 right-6 bg-white/90 rounded-full p-4">
                <svg 
                  className="w-8 h-8 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={maturityStages[activeStage].icon}></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechMaturity;