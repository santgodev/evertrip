export default function TrustBar() {
  const indicators = [
    "Private Vehicles Only",
    "Door-to-Door Service",
    "Bilingual Support",
    "No Hidden Fees",
    "Flight Tracking",
    "Safe & Reliable",
    "Air Conditioned",
    "Easy WhatsApp Booking"
  ];

  return (
    <div className="bg-brand-sand border-y border-brand-gold/20 py-4 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* We use a simple flex wrap or marquee for indicators */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-brand-navy font-semibold text-sm tracking-wide uppercase">
          {indicators.map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <span>{text}</span>
              {/* Dot separator, hide on the last item in a row context if we were using a fixed grid, but here just hide the last one */}
              {i < indicators.length - 1 && (
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/60 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
