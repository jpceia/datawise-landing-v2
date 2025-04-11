import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-light/80 opacity-90 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative p-6 text-white z-10">
        <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Otimização de Rotas',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      description: 'A nossa abordagem assegura que as rotas são otimizadas para maximizar o uso de recursos, minimizando tempos mortos e distâncias desnecessárias.',
    },
    {
      id: 2,
      title: 'Definição de Preços',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'A partir de algoritmos avançados, auxiliamos as empresas a otimizar as políticas de preços, adaptado-as à procura.',
    },
    {
      id: 3,
      title: 'Planeamento',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      description: 'O planeamento eficaz é crucial para garantir que todos os recursos – humanos, materiais e financeiros – são utilizados da melhor forma.',
    },
    {
      id: 4,
      title: 'Controlo de Gestão',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      description: 'Fornece-mos ferramentas para monitorizar e avaliar o desempenho operacional e financeiro da empresa em tempo real.',
    },
    {
      id: 5,
      title: 'Gestão de Stocks',
      icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
      description: 'Oferecemos soluções que permitem às empresas gerir melhor os seu stock, garantindo um equilíbrio entre a oferta e a procura.',
    },
    {
      id: 6,
      title: 'Análise Preditiva',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: 'Desenvolvemos modelos preditivos que permitem antecipar tendências de mercado e comportamentos de clientes.',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gray-50">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary-light/10 text-primary rounded-full text-sm font-medium mb-4">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Serviços</h2>
          <p className="text-lg text-gray-600">
            Soluções feitas à medida para otimizar as suas operações e impulsionar resultados tangíveis através da ciência de dados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;