import { FaCheckCircle } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    "No shared rides with strangers",
    "Door-to-door direct service",
    "English-speaking customer support",
    "Fixed prices, no hidden fees",
    "Flight tracking for delays",
    "Modern, air-conditioned vans",
    "Professional local drivers",
    "Flexible pick-up times",
    "Child seats upon request",
    "Secure payment options"
  ];

  return (
    <section className="py-24 bg-brand-navy border-t border-brand-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-bone mb-4">Why Choose EverTrip?</h2>
          <p className="text-brand-bone/70 text-lg">
            We focus on one thing: getting you to your destination safely and comfortably. Here is what makes our service different.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-deep-blue transition-colors">
                <FaCheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                <span className="text-brand-bone/90 font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
