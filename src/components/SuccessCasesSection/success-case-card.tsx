'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SuccessCaseCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

const SuccessCaseCard = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  link 
}: SuccessCaseCardProps) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-custom hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900">
            {title}
          </h3>
          <p className="text-primary font-medium">
            {subtitle}
          </p>
        </div>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>

        <Link 
          href={link}
          className="
            inline-flex items-center gap-2 
            text-primary font-semibold 
            group pt-2
          "
        >
          <span className="transition-transform group-hover:-translate-y-1">
            Ler artigo
          </span>
          <span className="
            transition-all 
            group-hover:translate-x-1 
            group-hover:-translate-y-1
          ">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default SuccessCaseCard;