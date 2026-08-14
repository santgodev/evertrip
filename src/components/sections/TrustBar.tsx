"use client";

import type { Locale } from "@/i18n/config";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const content = {
  es: [
    "Solo vehículos premium",
    "Servicio puerta a puerta",
    "Soporte bilingüe",
    "Sin costos ocultos",
    "Seguimiento de vuelo",
    "Seguro y confiable",
    "Conductores profesionales",
    "Reserva fácil por WhatsApp",
  ],
  en: [
    "Premium Vehicles Only",
    "Door-to-Door Service",
    "Bilingual Support",
    "No Hidden Fees",
    "Flight Tracking",
    "Safe & Reliable",
    "Professional Drivers",
    "Easy WhatsApp Booking",
  ],
};

export default function TrustBar({ locale }: { locale: Locale }) {
  const indicators = content[locale] || content.es;
  const duplicatedIndicators = [...indicators, ...indicators, ...indicators, ...indicators];

  return (
    <div className="bg-brand-secondary-bg border-y border-white/5 py-4 overflow-hidden flex whitespace-nowrap">
      <motion.div
        className="flex items-center gap-12 px-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
      >
        {duplicatedIndicators.map((text, i) => (
          <div key={i} className="flex items-center gap-12">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-brand-accent/70 text-sm" />
              <span className="text-brand-text-secondary font-medium text-xs tracking-[0.2em] uppercase">{text}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-white/10"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
