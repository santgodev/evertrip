import Image from "next/image";
import Link from "next/link";
import { FaClock, FaStar, FaWhatsapp } from "react-icons/fa";

const routes = [
  {
    title: "Santa Marta ↔ Cartagena",
    time: "4.5 hours",
    idealFor: "Couples & Families",
    benefit: "Scenic door-to-door comfort",
    image: "https://images.unsplash.com/photo-1583508460613-2895105b4b1a?auto=format&fit=crop&q=80",
    slug: "private-transfer-santa-marta-cartagena",
    message: "Hi! I need a transfer between Santa Marta and Cartagena."
  },
  {
    title: "Santa Marta Airport ↔ City",
    time: "30-40 mins",
    idealFor: "All Travelers",
    benefit: "Flight tracking included",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80",
    slug: "santa-marta-airport-transfer",
    message: "Hi! I need an airport pickup in Santa Marta."
  },
  {
    title: "Cartagena Airport ↔ Santa Marta",
    time: "4.5 hours",
    idealFor: "International Arrivals",
    benefit: "Direct transfer upon landing",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80",
    slug: "cartagena-airport-to-santa-marta",
    message: "Hi! I need a transfer from Cartagena Airport to Santa Marta."
  },
  {
    title: "Santa Marta ↔ Palomino",
    time: "1.5 hours",
    idealFor: "Backpackers & Couples",
    benefit: "Spacious van for luggage",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80",
    slug: "santa-marta-to-palomino",
    message: "Hi! I need a transfer to Palomino."
  },
  {
    title: "Santa Marta ↔ Tayrona",
    time: "45 mins",
    idealFor: "Nature Enthusiasts",
    benefit: "Early drop-offs available",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80",
    slug: "santa-marta-to-tayrona",
    message: "Hi! I need a transfer to Tayrona Park."
  },
  {
    title: "Santa Marta ↔ Minca",
    time: "45 mins",
    idealFor: "Mountain Retreats",
    benefit: "Safe driving on steep roads",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
    slug: "santa-marta-to-minca",
    message: "Hi! I need a transfer to Minca."
  },
  {
    title: "Cartagena ↔ Barranquilla",
    time: "2.5 hours",
    idealFor: "Business & Events",
    benefit: "Punctual & professional",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
    slug: "cartagena-to-barranquilla",
    message: "Hi! I need a transfer between Cartagena and Barranquilla."
  },
  {
    title: "Custom Routes",
    time: "Flexible",
    idealFor: "Large Groups",
    benefit: "Tailored to your itinerary",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    slug: "custom-private-routes",
    message: "Hi! I want a quote for a custom route."
  }
];

export default function RoutesGrid() {
  return (
    <section id="routes" className="py-24 bg-brand-sand">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-navy mb-4">Popular Private Transfers</h2>
          <p className="text-brand-carbon/80 text-lg">
            Travel seamlessly across Colombia&apos;s Caribbean coast. No sharing with strangers, just comfort and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {routes.map((route, i) => (
            <div key={i} className="bg-brand-bone rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-brand-gold/10 group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-brand-navy/90 text-brand-bone text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                  <FaClock className="text-brand-gold" /> {route.time}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl text-brand-navy mb-3">{route.title}</h3>
                
                <div className="space-y-2 mb-6 text-sm text-brand-carbon/80">
                  <div className="flex items-center gap-2">
                    <FaStar className="text-brand-gold" />
                    <span><strong>Ideal for:</strong> {route.idealFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/80 ml-1"></div>
                    <span className="ml-[3px]">{route.benefit}</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-brand-navy/5 flex items-center justify-between gap-4">
                  <Link 
                    href={`/${route.slug}`} 
                    className="text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors whitespace-nowrap"
                  >
                    View Details →
                  </Link>
                  <a
                    href={`https://wa.me/573147659756?text=${encodeURIComponent(route.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white p-3 rounded-full transition-colors shrink-0"
                    aria-label="Book on WhatsApp"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
