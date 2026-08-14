import { notFound } from "next/navigation";
import type { Metadata } from "next";
import RoutePageTemplate from "@/components/RoutePageTemplate";
import RouteJsonLd from "@/components/RouteJsonLd";
import { routes, getRouteBySlug, getPriceCards } from "@/data/routes";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return locales.flatMap((locale) => routes.map((route) => ({ locale, slug: route.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const route = getRouteBySlug(slug);
  if (!route) return {};

  return {
    title: route.title[locale],
    description: route.metaDescription[locale],
    alternates: {
      canonical: `/${locale}/${slug}`,
      languages: {
        es: `/es/${slug}`,
        en: `/en/${slug}`,
        "x-default": `/es/${slug}`,
      },
    },
    openGraph: {
      title: route.title[locale],
      description: route.metaDescription[locale],
      type: "website",
    },
  };
}

export default async function RoutePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const route = getRouteBySlug(slug);
  if (!route) notFound();

  const priceCards = getPriceCards(route);
  const relatedRoutes = routes
    .filter((r) => r.slug !== route.slug)
    .slice(0, 4)
    .map((r) => ({ label: r.h1[locale], slug: r.slug }));

  return (
    <>
      <RouteJsonLd locale={locale} route={route} priceCards={priceCards} />
      <RoutePageTemplate locale={locale} route={route} priceCards={priceCards} relatedRoutes={relatedRoutes} />
    </>
  );
}
