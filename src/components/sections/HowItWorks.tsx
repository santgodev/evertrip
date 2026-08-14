"use client";

import type { Locale } from "@/i18n/config";
import { motion } from "framer-motion";
import { Map, Coffee, ShieldCheck } from "lucide-react";

const content = {
  es: {
    sectionTag: "POR QUÉ ELEGIRNOS",
    heading: "La forma inteligente de viajar",
    features: [
      {
        icon: <Map className="w-8 h-8 text-brand-accent" />,
        title: "Te esperamos en el aeropuerto",
        desc: "Sin filas, sin negociar con taxis. Un conductor profesional te recibirá con un cartel y una sonrisa apenas aterrices."
      },
      {
        icon: <Coffee className="w-8 h-8 text-brand-accent" />,
        title: "Paradas Flexibles",
        desc: "¿Hambre en el camino? ¿Quieres tomar una foto? Tú mandas. Hacemos paradas sin costo adicional para que disfrutes."
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
        title: "Flota Moderna y Segura",
        desc: "Vehículos climatizados, cómodos y mantenidos bajo los más altos estándares. Tu seguridad es nuestra absoluta prioridad."
      }
    ]
  },
  en: {
    sectionTag: "WHY CHOOSE US",
    heading: "The smarter way to travel",
    features: [
      {
        icon: <Map className="w-8 h-8 text-brand-accent" />,
        title: "We wait for you at the airport",
        desc: "No lines, no haggling with taxis. A professional driver will greet you with a sign and a smile as soon as you land."
      },
      {
        icon: <Coffee className="w-8 h-8 text-brand-accent" />,
        title: "Flexible Stops",
        desc: "Hungry on the road? Want to take a photo? You are the boss. We make stops at no extra cost so you can enjoy."
      },
      {
        icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
        title: "Modern & Safe Fleet",
        desc: "Air-conditioned, comfortable vehicles maintained to the highest standards. Your safety is our absolute priority."
      }
    ]
  }
};

export default function HowItWorks({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;

  return (
    <section className="py-24 bg-brand-primary-bg relative border-t border-slate-100" id="how-it-works">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-brand-accent tracking-[0.2em] text-xs font-semibold uppercase mb-4">{t.sectionTag}</p>
          <h2 className="text-4xl md:text-5xl font-heading text-brand-text-primary mb-4">{t.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {t.features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              
              <h3 className="font-heading text-2xl text-brand-text-primary mb-4">{feature.title}</h3>
              <p className="text-base text-brand-text-secondary leading-relaxed max-w-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
