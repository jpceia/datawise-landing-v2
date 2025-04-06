import React from 'react';
import IconCircle from './IconCircle';

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  className = '',
  iconVariant = 'primary',
  iconSize = 'md',
  ...props 
}) => {
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