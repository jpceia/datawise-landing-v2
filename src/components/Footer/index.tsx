'use client';

import Image from 'next/image';
import { Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1F3B] text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-300 text-center md:text-left">
            <p>© 2024</p>
            <p>Todos os direitos reservados</p>
          </div>

          {/* Center Logos */}
          <div className="flex items-center gap-6">
            <Image 
              src="/images/footer-iefp.png"
              alt="IEFP"
              width={200}
              height={80}
            />
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/company/datawise" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://facebook.com/datawise" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;