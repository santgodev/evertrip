import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-bone py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & NAP */}
        <div>
          <h3 className="font-heading text-2xl tracking-widest text-brand-gold mb-6">EVERTRIP</h3>
          <address className="not-italic text-brand-bone/80 space-y-2 text-sm">
            <p><strong>VIAJES Y TOURS EVERTRIP</strong></p>
            <p>Santa Marta, Cartagena, Palomino, Tayrona, Minca</p>
            <p>Colombia&apos;s Caribbean Coast</p>
            <p className="mt-4 flex items-center gap-2">
              <FaWhatsapp className="text-brand-green" size={18} />
              <a href="https://wa.me/573147659756" className="hover:text-brand-gold transition-colors">
                +57 314 765 9756
              </a>
            </p>
          </address>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-xl mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-brand-bone/80">
            <li><Link href="#routes" className="hover:text-brand-gold transition-colors">Popular Routes</Link></li>
            <li><Link href="#how-it-works" className="hover:text-brand-gold transition-colors">How It Works</Link></li>
            <li><Link href="#faq" className="hover:text-brand-gold transition-colors">FAQ</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link></li>
            <li><Link href="/cancellation-policy" className="hover:text-brand-gold transition-colors">Cancellation Policy</Link></li>
          </ul>
        </div>

        {/* Final CTA */}
        <div>
          <h4 className="font-heading text-xl mb-6">Ready to book?</h4>
          <p className="text-sm text-brand-bone/80 mb-6 leading-relaxed">
            Message us directly on WhatsApp. We usually reply within minutes to provide you with a quote and confirm your private transfer.
          </p>
          <a
            href="https://wa.me/573147659756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors shadow-md font-medium"
          >
            <FaWhatsapp size={22} />
            <span>Get a quote on WhatsApp</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-brand-bone/10 text-center text-xs text-brand-bone/60">
        &copy; {new Date().getFullYear()} VIAJES Y TOURS EVERTRIP. All rights reserved.
      </div>
    </footer>
  );
}
