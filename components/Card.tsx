import React, { ReactNode } from 'react';
import Image from 'next/image';

interface CardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
  children?: ReactNode;
  [key: string]: any;
}

const Card = ({ 
  title, 
  subtitle,
  description, 
  imageUrl, 
  imageAlt = 'Card image',
  className = '',
  children,
  ...props 
}: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`} {...props}>
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
        {subtitle && <h4 className="text-sm text-gray-500 mb-3">{subtitle}</h4>}
        {description && <p className="text-gray-700">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;