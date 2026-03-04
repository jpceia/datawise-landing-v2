import React, { ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'light' | 'dark';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  [x: string]: any;
}

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}: BadgeProps) => {
  const baseClasses = 'inline-block font-medium rounded-full';
  
  const variants = {
    primary: 'bg-primary/10 text-primary',
    light: 'bg-white/20 backdrop-blur-sm text-white',
    dark: 'bg-gray-800/80 backdrop-blur-sm text-white',
  };
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Badge; 