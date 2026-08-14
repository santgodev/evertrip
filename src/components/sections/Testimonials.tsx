"use client";

import { motion } from "framer-motion";
import { FaStar, FaGoogle, FaQuoteRight } from "react-icons/fa";
import type { Locale } from "@/i18n/config";

const testimonials = [
  {
    name: "John & Sarah M.",
    type: "Aeropuerto a Hotel",
    text: "The transfer from Santa Marta to Cartagena was seamless. The driver was punctual, the van was spotless, and we felt safe the entire journey.",
  },
  {
    name: "David L.",
    type: "Viaje Corporativo",
    text: "Booking through WhatsApp was incredibly easy. They tracked our delayed flight and were waiting for us with a sign. Excellent English support.",
  },
  {
    name: "Emily R.",
    type: "Tour por la Costa",
    text: "We used them for a custom route to Palomino. Professional service, very comfortable van with AC, and safe driving on the coastal roads.",
  },
];

const content = {
  es: {
    heading: "Lo que dicen nuestros viajeros",
    rated: "Calificación 5.0 en Google",
    readMore: "Ver todas las reseñas",
  },
  en: {
    heading: "What Our Travelers Say",
    rated: "Rated 5.0 on Google",
    readMore: "Read all reviews",
  },
};

export default function Testimonials({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;

  return (
    <section className="py-24 bg-brand-primary-bg relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-text-secondary mb-4"
          >
            <FaGoogle className="text-brand-text-primary" />
            <span className="text-sm tracking-wide">{t.rated}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light text-brand-text-primary"
          >
            {t.heading}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t2, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-panel p-10 rounded-[32px] flex flex-col relative group"
            >
              <FaQuoteRight className="absolute top-10 right-10 text-white/5 text-4xl group-hover:text-brand-accent/20 transition-colors duration-500" />
              
              <div className="flex gap-1 text-brand-accent mb-6">
                {[1, 2, 3, 4, 5].map((star) => <FaStar key={star} size={14} />)}
              </div>
              <p className="text-brand-text-primary font-light text-lg mb-8 leading-relaxed flex-grow">
                &quot;{t2.text}&quot;
              </p>
              
              <div className="pt-6 border-t border-white/5">
                <p className="font-medium text-brand-text-primary">{t2.name}</p>
                <p className="text-xs text-brand-text-secondary tracking-wider uppercase mt-1">{t2.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-text-secondary font-medium hover:text-brand-text-primary transition-colors border-b border-white/20 pb-1 hover:border-white/60"
          >
            {t.readMore} <span className="text-brand-accent">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
