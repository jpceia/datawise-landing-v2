// components/ServiceCard.tsx
import Image from 'next/image';

// types/service.ts
export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div
      className={`
        bg-white rounded-2xl overflow-hidden 
        shadow-custom hover:shadow-lg
        transform hover:-translate-y-1
        transition-all duration-300
        group
        w-full
        max-w-md
        ${index >= 3 ? 'lg:col-span-1.5' : ''}
      `}
    >
      {/* Card Image */}
      <div className="aspect-[21/9] relative overflow-hidden bg-gray-200">
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
  );
};

export default ServiceCard;