import React from 'react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

interface PortableTextContentProps {
  content: any[];
  className?: string;
}

const PortableTextContent: React.FC<PortableTextContentProps> = ({ content, className = '' }) => {
  const components = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;
        
        return (
          <div className="relative w-full h-80 my-8 rounded-lg overflow-hidden">
            <Image
              src={`https://cdn.sanity.io/images/if94fhok/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
              alt={value.alt || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              className="object-cover"
            />
          </div>
        );
      },
    },
    block: {
      h1: ({ children }: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-800">{children}</h1>,
      h2: ({ children }: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-primary">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">{children}</h3>,
      normal: ({ children }: any) => <p className="mb-6 text-gray-700">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>,
    },
    listItem: ({ children }: any) => <li className="text-gray-700">{children}</li>,
    marks: {
      link: ({ children, value }: any) => (
        <a 
          href={value?.href} 
          className="text-primary hover:underline" 
          target={value?.href?.startsWith('http') ? '_blank' : undefined}
          rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
      em: ({ children }: any) => <em className="italic">{children}</em>,
      code: ({ children }: any) => <code className="bg-gray-100 text-primary px-1 py-0.5 rounded text-sm">{children}</code>,
    },
  };

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  );
};

export default PortableTextContent; 