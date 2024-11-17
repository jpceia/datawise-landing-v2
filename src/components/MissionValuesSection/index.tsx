'use client';

import Image from 'next/image';

const MVVPreview = () => {
  return (
    <section className="relative bg-[#1B1F3B] text-white py-24 overflow-hidden">
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/circuit-bg.jpg"
          alt="Circuit Background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 max-w-7xl mx-auto">
          {/* Missão */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/target.webp"
                alt="Missão Icon"
                width={96}
                height={96}
              />
            </div>
            <h3 className="text-4xl font-bold font-ubuntu">
              Missão
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
              Queremos transformar dados em decisões estratégicas, capacitando os 
              nossos clientes a operar com máxima eficiência.
            </p>
          </div>

          {/* Valores */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/handshake.webp"
                alt="Valores Icon"
                width={96}
                height={96}
              />
            </div>
            <h3 className="text-4xl font-bold font-ubuntu">
              Valores
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
              Valorizamos a inovação e o compromisso com resultados, entregando 
              soluções personalizadas que impulsionam o sucesso dos nossos clientes.
            </p>
          </div>

          {/* Visão */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/vision.webp"
                alt="Visão Icon"
                width={96}
                height={96}
              />
            </div>
            <h3 className="text-4xl font-bold font-ubuntu">
              Visão
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm mx-auto">
              Ambicionamos ser a referência em soluções de ciências de dados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVVPreview;