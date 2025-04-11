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
      title: 'Modelos Preditivos',
      icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z',
      description: 'Desenvolvemos modelos que antecipam tendências e comportamentos, permitindo decisões proativas baseadas em previsões de qualidade.',
    },
    {
      id: 2,
      title: 'Inteligência Artificial Generativa',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      description: 'Criamos soluções baseadas em IA generativa para automatizar processos criativos, gerar conteúdo e desenvolver assistentes virtuais personalizados.',
    },
    {
      id: 3,
      title: 'Dashboards Analíticos',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      description: 'Desenvolvemos dashboards interativos e personalizados que transformam dados complexos em visualizações intuitivas para tomada de decisões.',
    },
    {
      id: 4,
      title: 'Otimização',
      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
      description: 'Utilizamos algoritmos avançados para otimizar recursos, maximizar a eficiência operacional e reduzir custos em toda a cadeia de valor do seu negócio.',
    },
    {
      id: 5,
      title: 'Definição de Preços',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'A partir de algoritmos avançados, auxiliamos as empresas a otimizar as políticas de preços, adaptando-as à procura e maximizando as margens.',
    },
    {
      id: 6,
      title: 'Planeamento',
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      description: 'O planeamento eficaz é crucial para garantir que todos os recursos – humanos, materiais e financeiros – são utilizados da melhor forma possível.',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary-light/10 text-primary rounded-full text-sm font-medium mb-4">
            OS NOSSOS SERVIÇOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Serviços</h2>
          <p className="text-lg text-gray-600">
            Soluções feitas à medida para otimizar as suas operações e impulsionar resultados tangíveis através da ciência de dados e inteligência artificial.
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