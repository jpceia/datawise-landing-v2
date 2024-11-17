'use client';

import Image from 'next/image';
import Link from 'next/link';

const SiteInfoSection = () => {
  return (
    <section className="relative bg-[#1B1F3B] text-white py-16 overflow-hidden">
      {/* Background D */}
      <div className="absolute right-0 top-0 h-full w-auto opacity-10">
        <Image
          src="/images/d-background.png"
          alt="Background D"
          width={500}
          height={500}
          className="h-full w-auto object-contain"
          priority
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Menu Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Menu</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/servicos"
                className="hover:text-gray-300 transition-colors"
              >
                Serviços
              </Link>
              <Link 
                href="/casos-de-sucesso"
                className="hover:text-gray-300 transition-colors"
              >
                Casos de Sucesso
              </Link>
              <Link 
                href="/recrutamento"
                className="hover:text-gray-300 transition-colors"
              >
                Recrutamento
              </Link>
            </nav>
          </div>

          {/* Information Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Informações</h3>
            <div className="space-y-3 text-gray-300">
              <p>DATAWISE, UNIPESSOAL LDA</p>
              <p>Av. Infante D. Henrique, nº 77, 7350-100</p>
              <p>Elvas</p>
              <p className="pt-2">+351 967341421</p>
              <a 
                href="mailto:geral@datawise.pt"
                className="block hover:text-white transition-colors"
              >
                geral@datawise.pt
              </a>
            </div>
          </div>

          {/* Policies Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Políticas & Termos</h3>
            <div className="flex flex-col space-y-3">
              <Link 
                href="/privacidade"
                className="hover:text-gray-300 transition-colors"
              >
                Política de Privacidade e Proteção de Dados
              </Link>
              <Link 
                href="/termos"
                className="hover:text-gray-300 transition-colors"
              >
                Termos de Utilização
              </Link>
              <Link 
                href="/seguranca"
                className="hover:text-gray-300 transition-colors"
              >
                Política de Segurança de Informação
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteInfoSection;