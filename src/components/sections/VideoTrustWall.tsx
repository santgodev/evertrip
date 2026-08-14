"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import type { Locale } from "@/i18n/config";
import { motion, AnimatePresence } from "framer-motion";

const content = {
  es: {
    heading: "TRANSPARENCIA TOTAL",
    title: "Conoce a tu equipo.",
    subtitle: "Personas reales al volante. Descubre por qué el lujo también reside en la confianza.",
    videos: [
      { id: "v1", title: "Nuestra Filosofía", description: "El estándar de oro en hospitalidad." },
      { id: "v2", title: "La Flota por Dentro", description: "Detalles que marcan la diferencia." },
      { id: "v3", title: "Operación", description: "Puntualidad suiza, calidez caribeña." },
    ],
  },
  en: {
    heading: "TOTAL TRANSPARENCY",
    title: "Meet your team.",
    subtitle: "Real people behind the wheel. Discover why luxury also lies in trust.",
    videos: [
      { id: "v1", title: "Our Philosophy", description: "The gold standard in hospitality." },
      { id: "v2", title: "Inside the Fleet", description: "Details that make the difference." },
      { id: "v3", title: "Operation", description: "Swiss punctuality, Caribbean warmth." },
    ],
  },
};

const thumbnails = [
  "/assets/lugares/real-suv.jpg",
  "/assets/lugares/real-bus-interior.jpg",
  "/assets/lugares/real-airport-transfer.jpg",
];

export default function VideoTrustWall({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;
  const [activeVid, setActiveVid] = useState(0);

  return (
    <section className="py-32 bg-brand-primary-bg relative border-t hairline-t overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-2xl">
            <p className="text-brand-accent tracking-[0.3em] text-[10px] font-semibold uppercase mb-4">{t.heading}</p>
            <h2 className="text-4xl md:text-6xl font-heading text-brand-text-primary uppercase tracking-widest mb-6">
              {t.title}
            </h2>
            <p className="text-brand-text-secondary text-lg font-light leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Main Video Display */}
          <div className="md:col-span-8 relative h-[500px] md:h-[700px] w-full group cursor-pointer overflow-hidden rounded-[32px] shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVid}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={thumbnails[activeVid]}
                  alt={t.videos[activeVid].title}
                  fill
                  className="object-cover editorial-image group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-brand-primary-bg/20"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-brand-text-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-brand-accent transition-colors duration-500">
                    <FaPlay className="text-brand-text-primary ml-1 group-hover:text-brand-accent transition-colors duration-500" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Video List */}
          <div className="md:col-span-4 flex flex-col justify-center space-y-8">
            {t.videos.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => setActiveVid(idx)}
                className={`text-left group flex flex-col gap-2 transition-opacity duration-300 ${activeVid === idx ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <span className="text-[10px] tracking-[0.2em] font-semibold text-brand-accent uppercase">
                  Capítulo 0{idx + 1}
                </span>
                <h3 className="text-2xl font-heading text-brand-text-primary transition-colors">
                  {vid.title}
                </h3>
                <div className={`h-[1px] bg-brand-text-primary/20 transition-all duration-500 mt-2 ${activeVid === idx ? 'w-full' : 'w-0 group-hover:w-12'}`}></div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
