'use client';

import Image from 'next/image';

const technologies = [
  {
    name: 'Python',
    image: '/images/python.png',
    width: 120,
  },
  {
    name: 'Jupyter',
    image: '/images/jupyter.jpg',
    width: 100,
  },
  {
    name: 'Scikit Learn',
    image: '/images/scikit-learn.png',
    width: 160,
  },
  {
    name: 'XGBoost',
    image: '/images/xgboost.webp',
    width: 140,
  },
  {
    name: 'TensorFlow',
    image: '/images/tensorflow.webp',
    width: 140,
  },
  {
    name: 'Google Cloud',
    image: '/images/google-cloud.webp',
    width: 160,
  },
  {
    name: 'Microsoft Cognitive Services',
    image: '/images/microsoft-cognitive.gif',
    width: 160,
  }
];

const TechStackSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-ubuntu font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            As tecnologias que nos permitem entregar resultados excepcionais
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 items-center justify-items-center place-items-center max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                width={tech.width}
                height={(tech.width * 0.6)} // Mantém proporção aproximada
                className="w-auto h-auto"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;