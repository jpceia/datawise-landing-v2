'use client';

import SuccessCaseCard from './success-case-card';

const successCases = [
  {
    title: 'Empresa de Aluguer de Auto-Caravanas',
    subtitle: 'Otimização de One-Way Fees',
    description: 'Este é um exemplo de sucesso de uma empresa de aluguer de auto-caravanas, onde conseguimos otimizar o processo de gestão de frota e, consequentemente, melhorar os seus resultados operacionais.',
    image: '/images/campervan-img.jpg',
    link: '/cases/caravan'
  },
  {
    title: 'Transportadora Last-Mile Delivery',
    subtitle: 'Planeamento de Rotas',
    description: 'Mais um caso de sucesso com uma transportadora especializada em last-mile delivery, onde ajudámos a resolver um desafio operacional bastante específico.',
    image: '/images/long-haul-img.jpg',
    link: '/cases/delivery'
  },
  {
    title: 'Empresa TVDE',
    subtitle: 'Dashboard de Rentabilidade',
    description: 'A história de como auxiliámos uma empresa de TVDE a resolver um desafio crítico relacionado com a visibilidade da rentabilidade.',
    image: '/images/tvde-img.webp',
    link: '/cases/tvde'
  }
];

const SuccessCasesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="success_stories">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-ubuntu font-bold text-gray-900">
            Casos de Sucesso
          </h2>
          <p className="text-gray-600 text-lg">
            Resultados reais de parcerias bem-sucedidas.
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successCases.map((successCase) => (
            <SuccessCaseCard
              key={successCase.title}
              {...successCase}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;