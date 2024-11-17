'use client';

import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Otimização de Rotas',
    description: 'A nossa abordagem assegura que as rotas são otimizadas para maximizar o uso de recursos, minimizando tempos mortos e distâncias desnecessárias.',
    image: '/images/route-optimization.webp',
  },
  {
    id: 2,
    title: 'Definição de Preços',
    description: 'A partir de algoritmos avançados, auxiliamos as empresas a otimizar as políticas de preços, adaptado-as à procura.',
    image: '/images/pricing.webp',
  },
  {
    id: 3,
    title: 'Planeamento',
    description: 'O planeamento eficaz é crucial para garantir que todos os recursos – humanos, materiais e financeiros – são utilizados da melhor forma.',
    image: '/images/planning.webp',
  },
  {
    id: 4,
    title: 'Controlo de Gestão',
    description: 'Fornece-mos ferramentas para monitorizar e avaliar o desempenho operacional e financeiro da empresa em tempo real.',
    image: '/images/management-control.webp',
  },
  {
    id: 5,
    title: 'Gestão de Stocks',
    description: 'Oferecemos soluções que permitem às empresas gerir melhor os seu stock, garantindo um equilíbrio entre a oferta e a procura.',
    image: '/images/stock-management.webp',
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-ubuntu font-bold text-primary">
            Serviços
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções feitas à medida para otimizar as suas operações
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="
                bg-white rounded-2xl overflow-hidden 
                shadow-custom hover:shadow-lg
                transform hover:-translate-y-1
                transition-all duration-300
                group
              "
            >
              {/* Card Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;