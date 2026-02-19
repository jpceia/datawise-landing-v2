import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../../types';
import CalendlyPopupButton from '../ui/CalendlyPopupButton';

interface NavbarProps {
  hasTopBanner?: boolean;
  variant?: 'dark' | 'light';
}

const Navbar: React.FC<NavbarProps> = ({ hasTopBanner = false, variant = 'dark' }) => {
  const t = useTranslations('Navbar');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('');
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const isDefault = variant === 'light';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isDefault) {
        // Landing page: hide navbar when scrolling past the hero section
        const heroSectionHeight = window.innerHeight;
        const topBannerHeight = hasTopBanner ? 44 : 0;
        if (currentScrollY > heroSectionHeight - topBannerHeight) {
          setVisible(false);
        } else {
          setVisible(true);
        }
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
  }, [lastScrollY, isDefault, hasTopBanner]);

  const navItems: NavItem[] = [
    { href: '/#about', label: t('aboutUs') },
    { href: '/#services', label: t('services') },
    { href: '/#success-cases', label: t('successCases') },
  ];

  // Style tokens per variant
  const navBg = isDefault
    ? scrolled
      ? 'bg-white shadow-md py-2'
      : 'bg-white shadow-sm py-4'
    : scrolled
      ? 'bg-gradient-to-r from-primary-dark to-primary shadow-lg py-2'
      : 'bg-gradient-to-r from-primary-dark to-primary py-4';

  const linkColor = isDefault
    ? 'text-gray-700 hover:text-primary'
    : 'text-white/90 hover:text-white';

  const linkHoverBg = isDefault
    ? 'bg-primary/10'
    : 'bg-white/10';

  const activeIndicatorColor = isDefault ? 'bg-primary' : 'bg-white';

  const hamburgerColor = isDefault ? 'bg-gray-700' : 'bg-white';

  const mobileMenuBg = isDefault
    ? 'bg-white border-t border-gray-100'
    : 'bg-gradient-to-r from-primary-dark to-primary border-t border-white/20';

  const mobileLinkColor = isDefault
    ? 'text-gray-700 hover:text-primary hover:bg-primary/10'
    : 'text-white/90 hover:text-white hover:bg-white/10';

  return (
    <motion.nav
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-40 transition-all duration-300 ${hasTopBanner ? 'top-11' : 'top-0'} ${navBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={isDefault ? '/Datawise_Principal.png' : '/Datawise_Secundario.png'}
              alt="Datawise"
              width={600}
              height={160}
              className="my-4 h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-colors rounded-md group ${linkColor}`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${activeIndicatorColor}`}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <div className={`absolute inset-0 ${linkHoverBg} scale-0 group-hover:scale-100 transition-transform rounded-md -z-10`} />
              </Link>
            ))}
            {isDefault ? (
              <CalendlyPopupButton className="ml-4 bg-primary text-white hover:bg-primary-dark px-6 py-2.5 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg active:scale-95">
                {t('contactUs')}
              </CalendlyPopupButton>
            ) : (
              <CalendlyPopupButton className="ml-4 bg-white text-primary hover:bg-white/90 px-6 py-2.5 rounded-md font-medium transition-all transform hover:scale-105 hover:shadow-lg active:scale-95">
                {t('contactUs')}
              </CalendlyPopupButton>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md focus:outline-none ${isDefault ? 'hover:bg-primary/10' : 'hover:bg-white/10'}`}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`w-full h-0.5 ${hamburgerColor} origin-left transition-all`}
              />
              <motion.div
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`w-full h-0.5 ${hamburgerColor} transition-all`}
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`w-full h-0.5 ${hamburgerColor} origin-left transition-all`}
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
            className={`lg:hidden overflow-hidden ${mobileMenuBg}`}
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map(item => (
                <motion.div key={item.href} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                  <Link
                    href={item.href}
                    className={`block w-full py-2 px-3 rounded-md font-medium transition-colors ${mobileLinkColor}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                {isDefault ? (
                  <CalendlyPopupButton className="block w-full bg-primary text-white hover:bg-primary-dark py-3 px-3 rounded-md font-medium text-center transition-colors">
                    {t('contactUs')}
                  </CalendlyPopupButton>
                ) : (
                  <CalendlyPopupButton className="block w-full bg-white text-primary hover:bg-white/90 py-3 px-3 rounded-md font-medium text-center transition-colors">
                    {t('contactUs')}
                  </CalendlyPopupButton>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
