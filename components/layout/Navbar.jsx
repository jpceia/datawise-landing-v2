import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/datawise-logo.webp" 
              alt="DataWise" 
              width={300} 
              height={80} 
              className="h-20 w-auto" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#servicos" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Serviços
            </Link>
            <Link href="#casos-sucesso" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Casos de Sucesso
            </Link>
            <Link href="#tecnologias" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Tecnologias
            </Link>
            <Link href="#sobre" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Sobre Nós
            </Link>
            <Link href="#contacto" className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md font-medium transition-colors">
              Contacte-nos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="container mx-auto px-4 py-4 space-y-3">
          <Link href="#servicos" 
            className="block text-gray-700 hover:text-blue-700 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </Link>
          <Link href="#casos-sucesso" 
            className="block text-gray-700 hover:text-blue-700 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Casos de Sucesso
          </Link>
          <Link href="#tecnologias" 
            className="block text-gray-700 hover:text-blue-700 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Tecnologias
          </Link>
          <Link href="#sobre" 
            className="block text-gray-700 hover:text-blue-700 hover:bg-gray-50 py-2 px-3 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sobre Nós
          </Link>
          <Link href="#contacto" 
            className="block bg-blue-700 hover:bg-blue-800 text-white py-2 px-3 rounded-md font-medium transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contacte-nos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;