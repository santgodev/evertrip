import { FaPlane, FaWhatsapp } from "react-icons/fa";
import type { Locale } from "@/i18n/config";
import { getWhatsAppLink } from "@/data/routes";

const content = {
  es: {
    heading: "¿Llegando a Colombia?",
    copy: "No dejes tu recogida en el aeropuerto al azar. Reserva con anticipación y te estaremos esperando con un cartel, siguiendo tu vuelo en tiempo real.",
    pickupAt: "Recogida en",
    other: "Otra consulta",
    messages: {
      smr: "Hola, necesito una recogida en el aeropuerto de Santa Marta",
      ctg: "Hola, necesito una recogida en el aeropuerto de Cartagena",
      baq: "Hola, necesito una recogida en el aeropuerto de Barranquilla",
      other: "Hola, necesito una recogida personalizada en el aeropuerto",
    },
  },
  en: {
    heading: "Arriving in Colombia?",
    copy: "Don't leave your airport pickup to chance. Book ahead and we will be waiting for you with a sign, tracking your flight in real-time.",
    pickupAt: "Pickup at",
    other: "Other Inquiry",
    messages: {
      smr: "I need a pickup from Santa Marta airport",
      ctg: "I need a pickup from Cartagena airport",
      baq: "I need a pickup from Barranquilla airport",
      other: "I need a custom airport pickup",
    },
  },
};

const airports = [
  { name: "Santa Marta (SMR)", key: "smr" as const },
  { name: "Cartagena (CTG)", key: "ctg" as const },
  { name: "Barranquilla (BAQ)", key: "baq" as const },
];

export default function ArrivalBlock({ locale }: { locale: Locale }) {
  const t = content[locale];

  return (
    <section className="py-24 bg-brand-sand relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-brand-bone rounded-3xl p-8 md:p-12 shadow-xl border border-brand-gold/20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-brand-navy mb-4 text-3xl">{t.heading}</h2>
            <p className="text-brand-carbon/80 text-lg mb-6">{t.copy}</p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {airports.map((apt, i) => (
                <div key={i} className="flex items-center gap-2 bg-brand-sand px-4 py-2 rounded-full text-sm font-semibold text-brand-navy border border-brand-navy/10">
                  <FaPlane className="text-brand-gold" />
                  {apt.name}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {airports.map((apt) => (
                <a
                  key={apt.key}
                  href={getWhatsAppLink(t.messages[apt.key])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-deep-blue text-brand-bone py-3 px-6 rounded-lg hover:bg-brand-navy transition-colors shadow-sm font-medium text-sm"
                >
                  <FaWhatsapp size={16} className="text-brand-green" />
                  {t.pickupAt} {apt.key.toUpperCase()}
                </a>
              ))}
              <a
                href={getWhatsAppLink(t.messages.other)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-green text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-sm font-medium text-sm"
              >
                <FaWhatsapp size={16} />
                {t.other}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
