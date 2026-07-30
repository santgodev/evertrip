import { FaStar, FaGoogle } from "react-icons/fa";

export default function Testimonials() {
  // Placeholders based on strategy doc
  const testimonials = [
    {
      name: "John & Sarah M.",
      date: "Last month",
      text: "[Replace with real testimonial] The transfer from Santa Marta to Cartagena was seamless. The driver was punctual, the van was spotless, and we felt safe the entire journey. Highly recommend EverTrip for a stress-free trip!"
    },
    {
      name: "David L.",
      date: "2 months ago",
      text: "[Replace with real testimonial] Booking through WhatsApp was incredibly easy. They tracked our delayed flight and were waiting for us with a sign. Excellent English support."
    },
    {
      name: "Emily R.",
      date: "3 months ago",
      text: "[Replace with real testimonial] We used them for a custom route to Palomino. Professional service, very comfortable van with AC, and safe driving on the coastal roads."
    }
  ];

  return (
    <section className="py-24 bg-brand-bone relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-navy mb-4">What Our Travelers Say</h2>
          <div className="flex items-center justify-center gap-2 text-brand-carbon/80">
            <FaGoogle className="text-brand-gold" />
            <span>Rated 5.0 on Google Business Profile</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-brand-navy/5">
              <div className="flex gap-1 text-brand-gold mb-6">
                {[1, 2, 3, 4, 5].map(star => <FaStar key={star} />)}
              </div>
              <p className="text-brand-carbon/80 mb-6 italic leading-relaxed">
                &quot;{t.text}&quot;
              </p>
              <div>
                <p className="font-heading text-lg text-brand-navy">{t.name}</p>
                <p className="text-sm text-brand-carbon/50">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Placeholder for GBP link - Update URL when GBP is ready */}
        <div className="text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-gold transition-colors underline underline-offset-4"
          >
            Read more reviews on Google <span className="no-underline">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
