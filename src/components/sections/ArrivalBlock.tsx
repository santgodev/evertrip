import { FaPlane, FaWhatsapp } from "react-icons/fa";

export default function ArrivalBlock() {
  const airports = [
    { name: "Santa Marta (SMR)", code: "SMR" },
    { name: "Cartagena (CTG)", code: "CTG" },
    { name: "Barranquilla (BAQ)", code: "BAQ" }
  ];

  return (
    <section className="py-24 bg-brand-sand relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-brand-bone rounded-3xl p-8 md:p-12 shadow-xl border border-brand-gold/20 flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-brand-navy mb-4 text-3xl">Arriving in Colombia?</h2>
            <p className="text-brand-carbon/80 text-lg mb-6">
              Don&apos;t leave your airport pickup to chance. Book ahead and we will be waiting for you with a sign, tracking your flight in real-time.
            </p>
            
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
              <a
                href="https://wa.me/573147659756?text=I%20need%20a%20pickup%20from%20Santa%20Marta%20airport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-deep-blue text-brand-bone py-3 px-6 rounded-lg hover:bg-brand-navy transition-colors shadow-sm font-medium text-sm"
              >
                <FaWhatsapp size={16} className="text-brand-green" />
                Pickup at SMR
              </a>
              <a
                href="https://wa.me/573147659756?text=I%20need%20a%20pickup%20from%20Cartagena%20airport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-deep-blue text-brand-bone py-3 px-6 rounded-lg hover:bg-brand-navy transition-colors shadow-sm font-medium text-sm"
              >
                <FaWhatsapp size={16} className="text-brand-green" />
                Pickup at CTG
              </a>
              <a
                href="https://wa.me/573147659756?text=I%20need%20a%20pickup%20from%20Barranquilla%20airport"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-deep-blue text-brand-bone py-3 px-6 rounded-lg hover:bg-brand-navy transition-colors shadow-sm font-medium text-sm"
              >
                <FaWhatsapp size={16} className="text-brand-green" />
                Pickup at BAQ
              </a>
              <a
                href="https://wa.me/573147659756?text=I%20need%20a%20custom%20airport%20pickup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand-green text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors shadow-sm font-medium text-sm"
              >
                <FaWhatsapp size={16} />
                Other Inquiry
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
