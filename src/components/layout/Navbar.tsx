import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-brand-deep-blue/90 backdrop-blur-md text-brand-bone border-b border-brand-gold/20 shadow-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center">
          <Image 
            src="/assets/evertrip_logo_alta_resolucion.png" 
            alt="VIAJES Y TOURS EVERTRIP" 
            width={180} 
            height={50} 
            className="h-10 w-auto object-contain rounded-full"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#routes" className="hover:text-brand-gold transition-colors">Rutas</Link>
          <Link href="#how-it-works" className="hover:text-brand-gold transition-colors">Cómo funciona</Link>
          <Link href="#faq" className="hover:text-brand-gold transition-colors">Preguntas Frecuentes</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold hover:text-brand-gold transition-colors uppercase tracking-wider">
            ES <span className="opacity-50 mx-1">|</span> EN
          </button>
          
          <a
            href="https://wa.me/573147659756?text=Hi%20EverTrip,%20I%20would%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors shadow-sm font-medium"
          >
            <FaWhatsapp size={20} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
