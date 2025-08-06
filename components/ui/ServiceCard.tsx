import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => (
  <Link href={link} className="block h-full">
    <div className="bg-gradient-to-r from-primary/80 to-primary-light/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group h-full cursor-pointer">
      <div className="p-6 text-white">
        <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="opacity-90">{description}</p>
      </div>
    </div>
  </Link>
);

export default ServiceCard; 