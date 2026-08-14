import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FaClock, FaUsers, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { routes, getPriceCards } from "@/data/routes";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";

const content = {
  es: {
    title: "Todas las rutas de transporte privado | EverTrip",
    description:
      "Todas las rutas de traslado privado puerta a puerta por la costa Caribe colombiana: Barranquilla, Santa Marta, Cartagena, Palomino y Valledupar.",
    heading: "Todas las rutas",
    subtitle: "Elige tu ruta y cotiza tu traslado privado por WhatsApp.",
    from: "Desde",
    quote: "Cotizar",
  },
  en: {
    title: "All Private Transfer Routes | EverTrip",
    description:
      "All private door-to-door transfer routes across the Colombian Caribbean coast: Barranquilla, Santa Marta, Cartagena, Palomino and Valledupar.",
    heading: "All Routes",
    subtitle: "Choose your route and get a quote for your private transfer on WhatsApp.",
    from: "From",
    quote: "Get a quote",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = content[locale];

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${locale}/all-routes`,
      languages: { es: "/es/all-routes", en: "/en/all-routes", "x-default": "/es/all-routes" },
    },
  };
}

export default async function AllRoutesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const t = content[locale];

  return (
    <div className="bg-[#F3F6F8] min-h-screen pt-40 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-brand-navy font-bold text-4xl md:text-5xl font-sans mb-4">{t.heading}</h1>
          <p className="text-brand-carbon/70 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => {
            const priceCards = getPriceCards(route);
            const startingPrice = priceCards[0]?.price;

            return (
              <div key={route.slug} className="relative h-80 md:h-[22rem] rounded-3xl overflow-hidden group shadow-md">
                {route.image && (
                  <Image
                    src={route.image}
                    alt={route.h1[locale]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-4 py-2 rounded-full z-10 shadow-sm">
                  {startingPrice ? `${t.from} ${startingPrice}` : t.quote}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h2 className="font-bold text-xl mb-2 font-sans leading-tight">{route.h1[locale]}</h2>
                  
                  <div className="flex items-center text-xs text-white/90 gap-3 mb-3">
                    <span className="flex items-center gap-1.5"><FaUsers className="text-white/70" /> {route.idealFor[locale]}</span>
                    <span className="text-white/30">|</span>
                    <span className="flex items-center gap-1.5"><FaClock className="text-white/70" /> {route.duration[locale]}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-red-400" /> Costa Caribe
                    </span>
                    <span className="flex items-center gap-1 text-brand-gold font-semibold"><FaStar /> 4.8</span>
                  </div>
                </div>

                <Link href={`/${locale}/${route.slug}`} className="absolute inset-0 z-20">
                  <span className="sr-only">{route.h1[locale]}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
