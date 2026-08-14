import Image from "next/image";
import { FaWhatsapp, FaClock, FaUsers, FaCheckCircle, FaArrowLeft, FaCarSide, FaRoute, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { RouteDefinition, PriceCard } from "@/data/routes";
import { getWhatsAppLink } from "@/data/routes";
import { dictionaries } from "@/i18n/dictionaries";

interface RoutePageProps {
  locale: Locale;
  route: RouteDefinition;
  priceCards: PriceCard[];
  relatedRoutes: { label: string; slug: string }[];
}

export default function RoutePageTemplate({ locale, route, priceCards, relatedRoutes }: RoutePageProps) {
  const dict = dictionaries[locale].routePage;
  const waLink = getWhatsAppLink(route.waMessage[locale]);
  const headlinePrice = priceCards[0]?.price;

  return (
    <main className="bg-white">
      {/* Clean Hero Section */}
      <section className="bg-[#F8FAFC] pt-32 pb-24 border-b border-gray-100 relative overflow-hidden">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <nav className="flex items-center gap-2 text-sm text-brand-carbon/60 mb-10 font-medium">
            <Link href={`/${locale}`} className="hover:text-brand-navy transition-colors">{dict.home}</Link>
            <span>/</span>
            <span className="text-brand-gold">{route.title[locale]}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-navy font-bold text-xs tracking-[0.15em] uppercase mb-6 shadow-sm border border-gray-100">
                <FaRoute className="text-brand-gold text-sm" /> Traslado Privado
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6 leading-tight font-sans">
                {route.h1[locale]}
              </h1>
              
              <p className="text-brand-carbon/80 text-lg leading-relaxed mb-10">
                {route.description[locale]}
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium mb-12">
                <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-2xl text-brand-navy shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                    <FaClock className="text-brand-gold" />
                  </div>
                  {route.duration[locale]}
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-2xl text-brand-navy shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                    <FaUsers className="text-brand-gold" />
                  </div>
                  {route.idealFor[locale]}
                </div>
                <div className="flex items-center gap-3 bg-white border border-gray-100 px-5 py-3 rounded-2xl text-brand-navy shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center shrink-0">
                    <FaShieldAlt className="text-brand-gold" />
                  </div>
                  Seguro Incluido
                </div>
              </div>

              {/* Framed Image - Maintaining original aspect ratio */}
              {route.image && (
                <div className="relative w-full aspect-[16/10] md:aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white">
                  <Image
                    src={route.image}
                    alt={route.h1[locale]}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>

            {/* Right Booking Card Column */}
            <div className="lg:col-span-5 xl:col-span-5 relative">
              <div className="sticky top-28 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(27,42,71,0.08)] border border-gray-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-[40px] pointer-events-none"></div>
                
                <h3 className="font-sans font-bold text-2xl mb-8 text-brand-navy relative z-10">{dict.transferDetails}</h3>
                
                <div className="space-y-6 relative z-10 mb-10">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-brand-carbon/60 font-medium">{dict.duration}</span>
                    <span className="font-bold text-brand-navy">{route.duration[locale]}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-brand-carbon/60 font-medium">{dict.vehicle}</span>
                    <span className="font-bold text-brand-navy">{dict.vehiclePrivate}</span>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="text-brand-carbon/60 font-medium">{dict.price}</span>
                    <div className="text-right">
                      <span className="block text-sm text-brand-gold mb-1 font-bold">{dict.quoteOnly || "Desde"}</span>
                      <span className="font-bold text-4xl text-brand-navy tracking-tight">
                        {headlinePrice ?? dict.quoteOnly}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center gap-3 bg-[#25D366] text-white w-full py-4 md:py-5 rounded-2xl hover:bg-[#1EBE5D] transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)] font-bold text-lg hover:-translate-y-1"
                >
                  <FaWhatsapp size={26} />
                  {dict.getQuoteOnWhatsapp}
                </a>
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-brand-carbon/50 font-medium uppercase tracking-wider">Sin pagos adelantados</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-5xl">
            <h2 className="text-brand-navy font-bold text-3xl mb-10 font-sans">{dict.whatsIncluded}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {route.highlights[locale].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 hover:border-brand-gold/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center shrink-0">
                    <FaCheckCircle className="text-brand-green" />
                  </div>
                  <span className="text-brand-navy font-medium pt-1 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Cards */}
      {priceCards.length > 0 && (
        <section className="py-20 bg-[#F8FAFC] border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-5xl">
              <h2 className="text-brand-navy font-bold text-3xl mb-10 font-sans">{dict.priceByVehicle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {priceCards.map((card, i) => (
                  <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-5">
                      <FaCarSide size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2 font-sans">{card.label[locale]}</h3>
                    <div className="my-3">
                      <span className="text-3xl font-bold text-brand-gold">{card.price}</span>
                    </div>
                    {card.note && <p className="text-sm text-brand-carbon/60">{card.note[locale]}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl">
              <h2 className="text-brand-navy font-bold text-3xl mb-10 font-sans">{dict.faqTitle}</h2>
              <div className="space-y-4">
                {route.faqs.map((faq, i) => (
                  <div key={i} className="bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border border-gray-100">
                    <h3 className="font-bold text-lg text-brand-navy mb-3 font-sans flex items-start gap-3">
                      <span className="text-brand-gold">Q.</span>
                      {faq.q[locale]}
                    </h3>
                    <p className="text-brand-carbon/80 leading-relaxed pl-7 text-sm md:text-base">{faq.a[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA + Related Routes */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">{dict.readyToBook}</h2>
          <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">{dict.readyToBookCopy}</p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl hover:bg-[#1EBE5D] transition-all shadow-lg font-bold text-lg hover:-translate-y-1 mb-16"
          >
            <FaWhatsapp size={24} />
            {dict.bookThisTransfer}
          </a>

          {relatedRoutes.length > 0 && (
            <div className="border-t border-white/10 pt-16">
              <h3 className="font-sans font-bold text-xl mb-8 text-white/90">{dict.relatedRoutes}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedRoutes.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/${locale}/${r.slug}`}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/90 rounded-full hover:bg-white hover:text-brand-navy transition-all text-sm font-medium"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <Link href={`/${locale}`} className="inline-flex items-center gap-2 text-white/50 hover:text-brand-gold transition-colors text-sm font-medium">
              <FaArrowLeft size={14} />
              {dict.backToAllRoutes}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
