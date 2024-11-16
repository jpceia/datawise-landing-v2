
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-80 duration-300">
          <Image
            src="/images/logo.png"
            alt="Datawise Logo"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            href="#services"
            className="text-gray-800 hover:-translate-y-1 transition-transform duration-1000"
          >
            Serviços
          </Link>
          
          <Link 
            href="#success_stories"
            className="text-gray-800 hover:-translate-y-1 transition-transform duration-1000"
          >
            Casos de Sucesso
          </Link>
          
          <a 
            href="mailto:geral@datawise.pt"
            className="text-gray-800 hover:-translate-y-1 transition-transform duration-1000"
          >
            Carreiras
          </a>
          
          <Link 
            href="#contactos"
            className="border-2 border-gray-800 px-4 py-2 rounded hover:-translate-y-1 transition-transform duration-1000"
          >
            Contacte-nos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;