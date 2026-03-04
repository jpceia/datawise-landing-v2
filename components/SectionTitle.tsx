import React from 'react';
import Badge, { BadgeVariant } from './Badge';

interface SectionTitleProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  badgeVariant?: BadgeVariant;
  [key: string]: any;
}

const SectionTitle = ({ 
  badge, 
  title, 
  subtitle,
  className = '',
  badgeVariant = 'primary',
  ...props 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${className}`} {...props}>
      {badge && (
        <Badge variant={badgeVariant} className="mb-4">
          {badge}
        </Badge>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle; 