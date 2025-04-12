import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';
import ContactData from '../../utils/ContactData';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if we should show/hide navbar based on scroll position
      const heroSectionHeight = window.innerHeight; // Assuming hero is full viewport height
      
      // Hide navbar when scrolling past the hero section
      if (currentScrollY > heroSectionHeight) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      // Change navbar style when scrolled
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['servicos', 'casos-sucesso', 'tecnologias', 'sobre', 'contacto'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems: NavItem[] = [
    // { href: '#home', label: 'Início' },
    
    { href: '/#about', label: 'Sobre Nós' },
    { href: '/#services', label: 'Serviços' },
    { href: '/#success-cases', label: 'Casos de Sucesso' },
    // { href: '#technologies', label: 'Tecnologias' },
    // { href: '#methodology', label: 'Metodologia' },
    // { href: '#values', label: 'Valores' },
    // { href: '#careers', label: 'Carreiras' },
  ];

  return (
    <motion.nav 
      animate={{ 
        opacity: visible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Rest of the navbar component remains the same */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/Datawise_Principal.png" 
              alt="DataWise" 
              width={600}
              height={160} 
              className="my-4 h-12 w-auto" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-md group"
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <div className="absolute inset-0 bg-blue-50 scale-0 group-hover:scale-100 transition-transform rounded-md -z-10" />
              </Link>
            ))}
            <Link 
              href={`mailto:${ContactData.general.email}`} 
              className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              Contacte-nos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-600 origin-left transition-all"
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-600 transition-all"
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-600 origin-left transition-all"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                >
                  <Link
                    href={item.href}
                    className="block w-full text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-2 px-3 rounded-md font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
              >
                <Link
                  href={`mailto:${ContactData.general.email}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-3 rounded-md font-medium text-center transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacte-nos
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;