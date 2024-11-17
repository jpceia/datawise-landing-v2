'use client';

import Image from 'next/image';
import Link from 'next/link';

const TransformSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/circuit-bg.jpg"
          alt="Circuit Background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white space-y-6">
            <h2 className="font-ubuntu text-4xl md:text-5xl font-bold leading-tight">
              Transforme o Seu<br />Negócio
            </h2>
            
            <p className="text-gray-200 text-lg md:text-xl max-w-xl">
              Descubra como as nossas soluções personalizadas podem
              impulsionar a eficiência e a rentabilidade do seu negócio.
            </p>
            
            <div className="pt-4">
              <Link 
                href="#schedule"
                className="
                  inline-block
                  bg-white text-primary 
                  px-8 py-3 rounded-md 
                  font-semibold 
                  transform hover:-translate-y-1 
                  transition-all duration-300
                  shadow-button hover:shadow-lg
                "
              >
                Agende uma reunião
              </Link>
            </div>
          </div>

          {/* Right Column - Laptop Image */}
          <div className="relative lg:ml-auto">
            <Image
              src="/images/analytics-laptop.png"
              alt="Analytics Dashboard"
              width={600}
              height={400}
              className="
                w-full max-w-2xl 
                mx-auto lg:mx-0 
                drop-shadow-2xl
                rounded-lg
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;