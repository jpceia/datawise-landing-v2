
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm w-full px-6 py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="transition-all duration-300 hover:opacity-75">
        <Image 
            src="/images/logo.png"
            alt="DATAWISE Logo"
            width={260}
            height={48}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="#services"
            className="text-primary font-bold transition-all duration-300 transform hover:-translate-y-1"
          >
            Serviços
          </Link>
          
          <Link 
            href="#success_stories"
            className="text-primary font-bold transition-all duration-300 transform hover:-translate-y-1"
          >
            Casos de Sucesso
          </Link>
          
          <Link 
            href="mailto:geral@datawise.pt"
            className="text-primary font-bold transition-all duration-300 transform hover:-translate-y-1"
          >
            Carreiras
          </Link>
          
          <Link 
            href="#contactos"
            className="border-2 border-primary text-primary font-bold px-5 py-2 rounded transition-all duration-300 transform hover:-translate-y-1 shadow-custom"
          >
            Contacte-nos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;