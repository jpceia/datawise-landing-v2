"use client";

import Image from "next/image";
import { Linkedin, Twitter } from "lucide-react";

const LINKS = {
  product: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Preços", href: "#precos" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "Sobre a Datawise", href: "https://www.datawise.pt", external: true },
    { label: "Blog", href: "#" },
    { label: "Contacto", href: "mailto:hello@datawise.pt", external: true },
  ],
  legal: [
    { label: "Termos de Serviço", href: "#" },
    { label: "Política de Privacidade", href: "#" },
    { label: "RGPD", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--landing-border)] bg-[var(--landing-bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/landing" className="inline-block mb-4">
              <Image
                src="/logo_secondary.png"
                alt="Datawise Lex"
                width={120}
                height={26}
              />
            </a>
            <p className="text-sm text-[var(--landing-text-muted)] leading-relaxed mb-4 max-w-[220px]">
              A inteligência artificial jurídica em que pode confiar — fundamentada em legislação, verificável na fonte.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/datawise-pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] flex items-center justify-center text-[var(--landing-text-muted)] hover:text-[var(--landing-accent-gold)] hover:border-[rgba(201,165,90,0.3)] transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com/datawise_pt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[var(--landing-bg-surface)] border border-[var(--landing-border)] flex items-center justify-center text-[var(--landing-text-muted)] hover:text-[var(--landing-accent-gold)] hover:border-[rgba(201,165,90,0.3)] transition-colors"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>

          {/* Produto */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--landing-text-muted)] uppercase tracking-widest mb-4">
              Produto
            </h4>
            <ul className="space-y-2.5">
              {LINKS.product.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--landing-text-secondary)] hover:text-[var(--landing-accent-gold)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--landing-text-muted)] uppercase tracking-widest mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              {LINKS.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[var(--landing-text-secondary)] hover:text-[var(--landing-accent-gold)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--landing-text-muted)] uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {LINKS.legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-[var(--landing-text-secondary)] hover:text-[var(--landing-accent-gold)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--landing-border)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--landing-text-muted)]">
            © 2026 Datawise. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--landing-text-muted)]">
            Desenvolvido pela{" "}
            <a
              href="https://www.datawise.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--landing-accent-gold)] hover:underline"
            >
              Datawise
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
