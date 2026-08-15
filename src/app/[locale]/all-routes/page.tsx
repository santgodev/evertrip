import type { Metadata } from "next";
import { routes, getPriceCards } from "@/data/routes";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";
import RouteCard from "@/components/RouteCard";

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
              <RouteCard
                key={route.slug}
                route={route}
                locale={locale}
                startingPrice={startingPrice}
                from={t.from}
                quote={t.quote}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
