"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { getWhatsAppLink } from "@/data/routes";

const vehicles = [
  {
    id: "suv",
    name: "Premium SUV",
    image: "/assets/carros/car-1.png", // Or high-end unsplash alternative if these are bad
    passengers: 4,
    luggage: 4,
    desc_es: "Discreción y máximo confort para ejecutivos y parejas.",
    desc_en: "Discretion and maximum comfort for executives and couples.",
  },
  {
    id: "van",
    name: "Executive Van",
    image: "/assets/carros/car-2.png",
    passengers: 8,
    luggage: 8,
    desc_es: "Espacio superior sin comprometer la elegancia.",
    desc_en: "Superior space without compromising elegance.",
  },
  {
    id: "minibus",
    name: "Luxury Minibus",
    image: "/assets/carros/car-3.png",
    passengers: 15,
    luggage: 15,
    desc_es: "Ideal para eventos y grupos corporativos.",
    desc_en: "Ideal for events and corporate groups.",
  }
];

const content = {
  es: {
    title: "Nuestra Flota",
    passengers: "PASAJEROS",
    luggage: "EQUIPAJE",
    book: "RESERVAR",
  },
  en: {
    title: "Our Fleet",
    passengers: "PASSENGERS",
    luggage: "LUGGAGE",
    book: "BOOK",
  }
};

export default function VehicleShowcase({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="vehicles" className="py-24 bg-brand-primary-bg relative border-t hairline-t">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading text-brand-text-primary uppercase tracking-wider"
          >
            {t.title}
          </motion.h2>
          <div className="flex gap-4 mt-6 md:mt-0">
            {vehicles.map((v, i) => (
              <button
                key={v.id}
                onClick={() => setActiveIndex(i)}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-500 pb-2 border-b-2 ${
                  activeIndex === i 
                    ? "text-brand-accent border-brand-accent" 
                    : "text-brand-text-secondary border-transparent hover:text-brand-text-primary"
                }`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[600px] md:h-[700px] w-full rounded-[32px] overflow-hidden group shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={vehicles[activeIndex].image}
                alt={vehicles[activeIndex].name}
                fill
                className="object-cover editorial-image"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-bg/90 via-brand-primary-bg/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center max-w-xl">
                <motion.h3 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl md:text-6xl font-heading text-brand-text-primary mb-6"
                >
                  {vehicles[activeIndex].name}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-brand-text-secondary text-lg font-light mb-12 max-w-sm"
                >
                  {locale === "es" ? vehicles[activeIndex].desc_es : vehicles[activeIndex].desc_en}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-wrap gap-12 border-t hairline-t pt-8"
                >
                  <div>
                    <span className="block text-[10px] tracking-widest text-brand-text-secondary mb-1">{t.passengers}</span>
                    <span className="text-2xl font-light text-brand-text-primary">{vehicles[activeIndex].passengers}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-widest text-brand-text-secondary mb-1">{t.luggage}</span>
                    <span className="text-2xl font-light text-brand-text-primary">{vehicles[activeIndex].luggage}</span>
                  </div>
                  <div className="ml-auto flex items-end">
                    <a
                      href={getWhatsAppLink(`Hola, deseo reservar el ${vehicles[activeIndex].name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold tracking-[0.2em] text-brand-accent hover:text-brand-text-primary transition-colors uppercase"
                    >
                      {t.book} &rarr;
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
