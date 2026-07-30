"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaPlaneArrival } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/assets/White_van_driving_coastal_highway_202607061555.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-brand-navy/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl flex flex-col items-center"
        >
          <div className="mb-6 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1.5 bg-brand-sand text-brand-navy rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
              Traslados Privados Premium
            </span>
          </div>

          <h1 className="text-white mb-6 text-balance font-medium leading-tight">
            Traslados privados puerta a puerta que puedes reservar por WhatsApp desde cualquier lugar.
          </h1>
          
          <p className="text-lg md:text-2xl text-brand-bone/90 mb-10 max-w-2xl leading-relaxed font-light">
            Experimenta la costa Caribe de Colombia con transporte seguro, confiable y cómodo. Sin buses compartidos, sin esperas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://wa.me/573147659756?text=Necesito%20un%20traslado"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-green text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-medium text-lg group"
            >
              <FaWhatsapp size={24} className="group-hover:scale-110 transition-transform" />
              <span>Reserva por WhatsApp</span>
            </a>
            
            <a
              href="#routes"
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all shadow-md font-medium text-lg"
            >
              <FaPlaneArrival size={20} />
              <span>Ver Rutas</span>
            </a>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-bone font-medium">
            <div className="flex items-center gap-2">
              <span className="text-brand-gold text-xl">★</span> 5.0 Reseñas en Google
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/80 hidden sm:block"></div>
            <div>Conductores Locales Profesionales</div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/80 hidden sm:block"></div>
            <div>Vans con Aire Acondicionado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
