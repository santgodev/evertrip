import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { locales, isLocale, defaultLocale, type Locale } from "@/i18n/config";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://evertrip.co";

const metaByLocale: Record<Locale, { title: string; description: string; locale: string }> = {
  es: {
    title: "Transporte privado puerta a puerta | Barranquilla, Santa Marta, Palomino | EverTrip",
    description:
      "Traslados privados puerta a puerta por la costa Caribe: Barranquilla, Santa Marta, Cartagena, Palomino y Valledupar. Reserva por WhatsApp en minutos.",
    locale: "es_CO",
  },
  en: {
    title: "Private Door-to-Door Transfers | Barranquilla, Santa Marta, Palomino | EverTrip",
    description:
      "Private door-to-door transfers across the Caribbean coast: Barranquilla, Santa Marta, Cartagena, Palomino and Valledupar. Book on WhatsApp in minutes.",
    locale: "en_US",
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
  const meta = metaByLocale[locale];

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    icons: {
      icon: "/assets/icon-round.svg",
      apple: "/assets/icon-round.svg",
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        es: "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: "EverTrip",
      locale: meta.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar locale={locale} />
        <main className="flex-grow">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
