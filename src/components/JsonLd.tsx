export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "TaxiService"],
        "@id": "https://evertrip.co/#business",
        name: "VIAJES Y TOURS EVERTRIP",
        url: "https://evertrip.co",
        telephone: "+573147659756",
        priceRange: "$$",
        description:
          "Private door-to-door transfers across Colombia's Caribbean coast. Airport pickup, English-friendly WhatsApp booking, comfortable vans for families and groups.",
        areaServed: [
          { "@type": "City", name: "Santa Marta" },
          { "@type": "City", name: "Cartagena" },
          { "@type": "Place", name: "Palomino" },
          { "@type": "Place", name: "Tayrona" },
          { "@type": "Place", name: "Minca" },
          { "@type": "City", name: "Barranquilla" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+573147659756",
          contactType: "customer service",
          availableLanguage: ["English", "Spanish"],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I book a transfer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Booking is simple: just click any WhatsApp button on our site. Send us your travel dates, route, and number of passengers, and we'll reply within minutes with a quote and confirmation.",
            },
          },
          {
            "@type": "Question",
            name: "Are the prices per person or per vehicle?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our prices are per vehicle, not per person. This makes our private transfers an excellent value for couples, families, and groups.",
            },
          },
          {
            "@type": "Question",
            name: "Will I share the van with other people?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. All our transfers are 100% private. It will just be you, your group, and the driver.",
            },
          },
          {
            "@type": "Question",
            name: "Do you track my flight for airport pickups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! When you book an airport pickup, we ask for your flight number. We track your flight in real-time and will be there when you land, even if you are delayed.",
            },
          },
          {
            "@type": "Question",
            name: "Do your drivers speak English?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We have bilingual support available via WhatsApp throughout your journey. Our support team is always connected to translate and assist.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide child seats?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, child seats are available upon request. Please let us know the age and weight of your child when booking.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
