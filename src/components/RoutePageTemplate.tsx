import { FaWhatsapp, FaClock, FaUsers, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

interface FAQ {
  q: string;
  a: string;
}

interface RoutePageProps {
  title: string;
  h1: string;
  metaDesc: string;
  duration: string;
  idealFor: string;
  from: string;
  to: string;
  waMessage: string;
  description: string;
  highlights: string[];
  faqs: FAQ[];
  relatedRoutes: { label: string; slug: string }[];
}

export default function RoutePageTemplate({
  title,
  h1,
  duration,
  idealFor,
  from,
  to,
  waMessage,
  description,
  highlights,
  faqs,
  relatedRoutes,
}: RoutePageProps) {
  return (
    <main className="bg-brand-bone">
      {/* Hero Banner */}
      <section className="bg-brand-navy text-brand-bone pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-brand-bone/60 mb-8">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-brand-gold">{title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white mb-6 leading-tight">{h1}</h1>
              <p className="text-brand-bone/80 text-lg leading-relaxed mb-8">{description}</p>

              <div className="flex flex-wrap gap-4 text-sm mb-10">
                <div className="flex items-center gap-2 bg-brand-deep-blue px-4 py-2 rounded-full">
                  <FaClock className="text-brand-gold" /> {duration}
                </div>
                <div className="flex items-center gap-2 bg-brand-deep-blue px-4 py-2 rounded-full">
                  <FaUsers className="text-brand-gold" /> {idealFor}
                </div>
              </div>

              <a
                href={`https://wa.me/573147659756?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg font-medium text-lg"
              >
                <FaWhatsapp size={24} />
                Get a Quote on WhatsApp
              </a>
            </div>

            <div className="bg-brand-deep-blue/60 rounded-2xl p-8 border border-brand-gold/20">
              <h3 className="font-heading text-xl mb-6 text-brand-gold">Transfer Details</h3>
              <div className="space-y-4 text-brand-bone/90">
                <div className="flex justify-between border-b border-brand-bone/10 pb-3">
                  <span className="text-brand-bone/60">From</span>
                  <span className="font-medium">{from}</span>
                </div>
                <div className="flex justify-between border-b border-brand-bone/10 pb-3">
                  <span className="text-brand-bone/60">To</span>
                  <span className="font-medium">{to}</span>
                </div>
                <div className="flex justify-between border-b border-brand-bone/10 pb-3">
                  <span className="text-brand-bone/60">Duration</span>
                  <span className="font-medium">{duration}</span>
                </div>
                <div className="flex justify-between border-b border-brand-bone/10 pb-3">
                  <span className="text-brand-bone/60">Vehicle</span>
                  <span className="font-medium">Private AC Van</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-bone/60">Price</span>
                  <span className="font-medium text-brand-gold">Get quote on WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-brand-sand">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-brand-navy mb-10">What&apos;s included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-brand-bone rounded-xl shadow-sm">
                <FaCheckCircle className="text-brand-green shrink-0 mt-1" />
                <span className="text-brand-carbon">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-bone">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-brand-navy mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-brand-navy/10 pb-6">
                <h3 className="font-heading text-xl text-brand-navy mb-3">{faq.q}</h3>
                <p className="text-brand-carbon/80 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Related Routes */}
      <section className="py-20 bg-brand-deep-blue text-brand-bone">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="mb-4">Ready to book your private transfer?</h2>
          <p className="text-brand-bone/80 text-lg mb-8">
            We usually reply within minutes. No forms, no waiting — just WhatsApp.
          </p>
          <a
            href={`https://wa.me/573147659756?text=${encodeURIComponent(waMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-green text-white px-10 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg font-medium text-lg mb-16"
          >
            <FaWhatsapp size={24} />
            Book This Transfer
          </a>

          {relatedRoutes.length > 0 && (
            <div>
              <h3 className="font-heading text-xl mb-6 text-brand-gold">Related Routes</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {relatedRoutes.map((route) => (
                  <Link
                    key={route.slug}
                    href={`/${route.slug}`}
                    className="px-6 py-2.5 bg-brand-navy text-brand-bone rounded-full hover:bg-brand-bone hover:text-brand-navy transition-colors text-sm font-medium"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12">
            <Link href="/" className="flex items-center justify-center gap-2 text-brand-bone/60 hover:text-brand-gold transition-colors text-sm">
              <FaArrowLeft size={14} />
              Back to all routes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
