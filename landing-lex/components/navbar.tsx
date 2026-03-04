"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 150);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <motion.header
      className="landing-navbar"
      animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" as const }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/landing" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo_secondary.png"
            alt="Datawise Lex"
            width={130}
            height={28}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="landing-btn-ghost text-sm">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#agendar-demo" className="landing-btn-outline text-sm py-2 px-4">
            Agendar Demo
          </a>
          <a href="/register" className="landing-btn-primary text-sm py-2 px-4">
            Começar Grátis
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[var(--landing-text-secondary)] hover:text-[var(--landing-text-primary)] transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--landing-border)] bg-[var(--landing-bg-primary)]"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="landing-btn-ghost text-sm py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-[var(--landing-border)] pt-3 mt-1 flex flex-col gap-2">
                <a href="#agendar-demo" className="landing-btn-outline text-sm text-center">
                  Agendar Demo
                </a>
                <a href="/register" className="landing-btn-primary text-sm text-center justify-center">
                  Começar Grátis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
