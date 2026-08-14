"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { getWhatsAppLink } from "@/data/routes";
import { faqsByLocale } from "@/data/faq";

const content = {
  es: {
    heading: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre nuestros traslados privados.",
    stillQuestions: "¿Aún tienes preguntas?",
    ask: "Pregúntanos por WhatsApp",
    waMessage: "Hola, tengo una pregunta sobre los traslados.",
  },
  en: {
    heading: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our private transfers.",
    stillQuestions: "Still have questions?",
    ask: "Ask us on WhatsApp",
    waMessage: "Hi, I have a question about the transfers.",
  },
};

export default function FAQ({ locale }: { locale: Locale }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = content[locale] || content.es;
  const faqs = faqsByLocale[locale] || faqsByLocale.es;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-brand-text-primary mb-4">{t.heading}</h2>
          <p className="text-brand-text-secondary text-lg">{t.subtitle}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 rounded-[24px] overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-brand-text-primary text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`text-brand-accent transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>

              <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                <p className="text-brand-text-secondary leading-relaxed border-t border-slate-200 pt-5">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-slate-50 border border-slate-100 rounded-[24px] p-8">
          <p className="text-brand-text-primary font-semibold mb-2">{t.stillQuestions}</p>
          <a
            href={getWhatsAppLink(t.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand-accent font-semibold hover:text-brand-accent-light transition-colors"
          >
            {t.ask} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
