export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Get a Quick Quote",
      desc: "Message us on WhatsApp with your travel dates, route, and number of passengers. We reply within minutes."
    },
    {
      num: "02",
      title: "Confirm Your Transfer",
      desc: "Review your quote and confirm. We'll send you a booking summary and instructions for your pickup."
    },
    {
      num: "03",
      title: "Meet Your Driver",
      desc: "Your professional driver will be waiting for you at the airport arrivals or your hotel lobby at the exact time."
    },
    {
      num: "04",
      title: "Enjoy the Ride",
      desc: "Sit back in our air-conditioned private van and enjoy a seamless journey to your destination."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-deep-blue text-brand-bone relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/40 -skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="mb-4">How it works</h2>
          <p className="text-brand-bone/80 text-lg">
            Zero friction, zero stress. Booking your private transfer should be as relaxing as a Caribbean sunset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[12%] right-[12%] h-[1px] bg-brand-gold/30"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              <div className="w-[90px] h-[90px] rounded-full bg-brand-navy border border-brand-gold/40 flex items-center justify-center mb-8 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="font-heading text-3xl text-brand-gold">{step.num}</span>
              </div>
              <h3 className="font-heading text-xl mb-3">{step.title}</h3>
              <p className="text-sm text-brand-bone/70 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
