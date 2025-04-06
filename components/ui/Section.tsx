import React, { ReactNode } from 'react';

type BackgroundType = 'white' | 'gray' | 'dark' | 'primary' | 'gradient';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: BackgroundType;
  [key: string]: any;
}

const Section = ({ 
  children, 
  className = '',
  id,
  background = 'white',
  ...props 
}: SectionProps) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-secondary-dark text-white',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-r from-primary-dark to-primary',
  };
  
  return (
    <section 
      id={id}
      className={`py-16 ${backgrounds[background]} ${className}`}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default Section;