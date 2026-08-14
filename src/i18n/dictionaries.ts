import type { Locale } from "./config";

export interface Dictionary {
  nav: {
    routes: string;
    howItWorks: string;
    faq: string;
    book: string;
  };
  footer: {
    quickLinks: string;
    popularRoutes: string;
    howItWorks: string;
    faq: string;
    privacy: string;
    terms: string;
    cancellation: string;
    readyToBook: string;
    readyToBookCopy: string;
    getQuote: string;
    tagline: string;
    rights: string;
  };
  routePage: {
    home: string;
    transferDetails: string;
    from: string;
    to: string;
    duration: string;
    vehicle: string;
    vehiclePrivate: string;
    price: string;
    getQuoteOnWhatsapp: string;
    whatsIncluded: string;
    faqTitle: string;
    readyToBook: string;
    readyToBookCopy: string;
    bookThisTransfer: string;
    relatedRoutes: string;
    backToAllRoutes: string;
    priceByVehicle: string;
    quoteOnly: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      routes: "Rutas",
      howItWorks: "Cómo funciona",
      faq: "Preguntas frecuentes",
      book: "Reservar",
    },
    footer: {
      quickLinks: "Enlaces rápidos",
      popularRoutes: "Rutas populares",
      howItWorks: "Cómo funciona",
      faq: "Preguntas frecuentes",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      cancellation: "Política de cancelación",
      readyToBook: "¿Listo para reservar?",
      readyToBookCopy:
        "Escríbenos directo por WhatsApp. Normalmente respondemos en minutos con la cotización y confirmación de tu traslado privado.",
      getQuote: "Cotizar por WhatsApp",
      tagline: "Costa Caribe colombiana",
      rights: "Todos los derechos reservados.",
    },
    routePage: {
      home: "Inicio",
      transferDetails: "Detalles del traslado",
      from: "Origen",
      to: "Destino",
      duration: "Duración",
      vehicle: "Vehículo",
      vehiclePrivate: "Vehículo privado con A/C",
      price: "Precio",
      getQuoteOnWhatsapp: "Cotizar por WhatsApp",
      whatsIncluded: "Qué incluye",
      faqTitle: "Preguntas frecuentes",
      readyToBook: "¿Listo para reservar tu traslado privado?",
      readyToBookCopy: "Normalmente respondemos en minutos. Sin formularios, sin esperas: solo WhatsApp.",
      bookThisTransfer: "Reservar este traslado",
      relatedRoutes: "Rutas relacionadas",
      backToAllRoutes: "Volver a todas las rutas",
      priceByVehicle: "Precio según vehículo",
      quoteOnly: "Cotiza tu viaje",
    },
  },
  en: {
    nav: {
      routes: "Routes",
      howItWorks: "How it works",
      faq: "FAQ",
      book: "Book now",
    },
    footer: {
      quickLinks: "Quick Links",
      popularRoutes: "Popular Routes",
      howItWorks: "How It Works",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cancellation: "Cancellation Policy",
      readyToBook: "Ready to book?",
      readyToBookCopy:
        "Message us directly on WhatsApp. We usually reply within minutes to provide you with a quote and confirm your private transfer.",
      getQuote: "Get a quote on WhatsApp",
      tagline: "Colombian Caribbean Coast",
      rights: "All rights reserved.",
    },
    routePage: {
      home: "Home",
      transferDetails: "Transfer Details",
      from: "From",
      to: "To",
      duration: "Duration",
      vehicle: "Vehicle",
      vehiclePrivate: "Private A/C vehicle",
      price: "Price",
      getQuoteOnWhatsapp: "Get a Quote on WhatsApp",
      whatsIncluded: "What's included",
      faqTitle: "Frequently Asked Questions",
      readyToBook: "Ready to book your private transfer?",
      readyToBookCopy: "We usually reply within minutes. No forms, no waiting — just WhatsApp.",
      bookThisTransfer: "Book This Transfer",
      relatedRoutes: "Related Routes",
      backToAllRoutes: "Back to all routes",
      priceByVehicle: "Price by vehicle",
      quoteOnly: "Get a quote",
    },
  },
};
