import React, { ReactNode } from 'react';
import IconCircle, { IconCircleVariant, IconCircleSize } from './IconCircle';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  iconVariant?: IconCircleVariant;
  iconSize?: IconCircleSize;
  [key: string]: any;
}

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  className = '',
  iconVariant = 'primary',
  iconSize = 'md',
  ...props 
}: FeatureCardProps) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 transform transition-all hover:shadow-lg hover:-translate-y-1 ${className}`} {...props}>
      <IconCircle variant={iconVariant} size={iconSize} className="mb-4">
        {icon}
      </IconCircle>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard; 