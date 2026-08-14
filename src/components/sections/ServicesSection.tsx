"use client";

import { motion } from "framer-motion";
import type { Locale } from "@/i18n/config";
import Image from "next/image";

const content = {
  es: {
    heading: "CURADURÍA DE VIAJE",
    subtitle: "SERVICIOS",
    services: [
      {
        title: "Aeropuerto VIP",
        desc: "Llegadas fluidas. Salidas sin estrés. Tu conductor te espera antes de que aterrices.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
        align: "left",
      },
      {
        title: "Rutas Privadas",
        desc: "El Caribe a tu ritmo. Privacidad absoluta en cada kilómetro de la carretera.",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80",
        align: "right",
      },
      {
        title: "Corporativo",
        desc: "Logística impecable para ejecutivos que valoran su tiempo por encima de todo.",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
        align: "center",
      }
    ]
  },
  en: {
    heading: "JOURNEY CURATION",
    subtitle: "SERVICES",
    services: [
      {
        title: "VIP Airport",
        desc: "Fluid arrivals. Stress-free departures. Your driver waits before you land.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
        align: "left",
      },
      {
        title: "Private Routes",
        desc: "The Caribbean at your pace. Absolute privacy on every kilometer of the road.",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80",
        align: "right",
      },
      {
        title: "Corporate",
        desc: "Impeccable logistics for executives who value their time above all else.",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
        align: "center",
      }
    ]
  }
};

export default function ServicesSection({ locale }: { locale: Locale }) {
  const t = content[locale] || content.es;

  return (
    <section className="py-32 bg-brand-primary-bg relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <p className="text-brand-accent tracking-[0.3em] text-[10px] font-semibold uppercase mb-4">{t.subtitle}</p>
            <h2 className="text-4xl md:text-6xl font-heading text-brand-text-primary uppercase tracking-widest max-w-xl">
              {t.heading}
            </h2>
          </div>
        </div>

        <div className="space-y-32 md:space-y-48">
          {t.services.map((service, idx) => {
            const isLeft = service.align === "left";
            const isRight = service.align === "right";
            const isCenter = service.align === "center";
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col ${
                  isLeft ? "md:items-start" : isRight ? "md:items-end" : "md:items-center"
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden w-full rounded-[32px] ${
                  isCenter ? "md:w-full h-[60vh]" : "md:w-[70%] h-[70vh]"
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover editorial-image hover:scale-105 transition-transform duration-[2s] ease-out"
                  />
                  <div className="absolute inset-0 bg-brand-primary-bg/20 mix-blend-multiply"></div>
                </div>

                {/* Overlapping Text Box */}
                <div className={`relative z-10 bg-brand-primary-bg p-8 md:p-12 w-[90%] md:w-[45%] -mt-20 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
                  isLeft ? "md:ml-auto md:-mt-32" : isRight ? "md:mr-auto md:-mt-32" : "md:-mt-24 text-center"
                }`}>
                  <span className="block text-brand-accent text-xs font-semibold tracking-widest uppercase mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-heading text-brand-text-primary mb-6">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-secondary font-light text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
