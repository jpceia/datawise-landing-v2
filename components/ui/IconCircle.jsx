import React from 'react';

const IconCircle = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = 'rounded-full flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary/10 text-primary',
    light: 'bg-primary-light text-white',
    dark: 'bg-gray-800 text-white',
  };
  
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default IconCircle; 