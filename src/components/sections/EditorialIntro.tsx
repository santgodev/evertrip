"use client";

import type { Locale } from "@/i18n/config";
import { motion } from "framer-motion";

const content = {
  es: {
    title: "La movilidad, redefinida.",
    text1: "No somos solo un traslado. Somos la tranquilidad de saber que tu viaje está en manos expertas. Desde el momento en que aterrizas hasta que llegas a tu destino en el Caribe colombiano.",
    text2: "Vehículos impecables. Conductores profesionales. Cero estrés.",
  },
  en: {
    title: "Mobility, redefined.",
    text1: "We are not just a transfer. We are the peace of mind knowing your journey is in expert hands. From the moment you land until you reach your destination in the Colombian Caribbean.",
    text2: "Immaculate vehicles. Professional drivers. Zero stress.",
  },
};

export default function EditorialIntro({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;

  return (
    <section className="py-32 md:py-48 bg-brand-primary-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <h2 className="text-4xl md:text-6xl font-heading text-brand-text-primary leading-tight">
              {t.title}
            </h2>
            <div className="w-12 h-[1px] bg-brand-accent mt-8"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col gap-6"
          >
            <p className="text-xl md:text-2xl text-brand-text-secondary font-light leading-relaxed">
              {t.text1}
            </p>
            <p className="text-sm font-semibold tracking-widest uppercase text-brand-accent">
              {t.text2}
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
