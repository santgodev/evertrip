"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "How do I book a transfer?",
    a: "Booking is simple: just click any WhatsApp button on our site. Send us your travel dates, route, and number of passengers, and we'll reply within minutes with a quote and confirmation."
  },
  {
    q: "Are the prices per person or per vehicle?",
    a: "Our prices are per vehicle, not per person. This makes our private transfers an excellent value for couples, families, and groups."
  },
  {
    q: "Will I share the van with other people?",
    a: "No. All our transfers are 100% private. It will just be you, your group, and the driver."
  },
  {
    q: "Do you track my flight for airport pickups?",
    a: "Yes! When you book an airport pickup, we ask for your flight number. We track your flight in real-time and will be there when you land, even if you are delayed."
  },
  {
    q: "Where exactly will the driver meet me at the airport?",
    a: "Your driver will be waiting in the arrivals area holding a sign with your name. We'll also send you a WhatsApp message when you land to ensure a smooth meeting."
  },
  {
    q: "Do your drivers speak English?",
    a: "We have bilingual support available via WhatsApp throughout your journey. While some of our local professional drivers speak basic English, our support team is always connected to translate and assist."
  },
  {
    q: "What kind of vehicles do you use?",
    a: "We use modern, spacious vans that are fully air-conditioned and rigorously maintained for safety and comfort."
  },
  {
    q: "Do you provide child seats?",
    a: "Yes, child seats are available upon request. Please let us know the age and weight of your child when booking."
  },
  {
    q: "How much luggage can we bring?",
    a: "Our vans can comfortably hold up to a certain number of large suitcases and carry-ons. When booking, let us know how much luggage you have so we ensure the right vehicle."
  },
  {
    q: "Can we make a stop along the way?",
    a: "Absolutely. Since the transfer is private, we can arrange short stops for restrooms or snacks. Just let us know in advance or inform the driver."
  },
  {
    q: "How do I pay?",
    a: "We offer secure and flexible payment options which we will confirm with you via WhatsApp during the booking process."
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand plans change. We offer flexible cancellations up to a certain time before your trip. Please review our full cancellation policy or ask us on WhatsApp."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-deep-blue text-brand-bone">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-brand-bone/80 text-lg">
            Everything you need to know about our private transfers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="bg-brand-navy rounded-xl border border-brand-gold/10 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-heading text-lg pr-8">{faq.q}</span>
                <FaChevronDown 
                  className={`text-brand-gold transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-brand-bone/70 leading-relaxed border-t border-brand-bone/10 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-brand-bone/80 mb-4">Still have questions?</p>
          <a
            href="https://wa.me/573147659756"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-brand-gold font-semibold hover:text-white transition-colors underline underline-offset-4"
          >
            Ask us directly on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
