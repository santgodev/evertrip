import type { Metadata } from "next";
import { Marcellus, Public_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Private Transfers Santa Marta & Cartagena | EverTrip",
  description:
    "Private door-to-door transfers across Colombia's Caribbean coast. Airport pickup, English-friendly WhatsApp booking, comfortable vans for families and groups.",
  openGraph: {
    title: "Private Transfers Santa Marta & Cartagena | EverTrip",
    description:
      "Private door-to-door transfers across Colombia's Caribbean coast. Airport pickup, English-friendly WhatsApp booking, comfortable vans for families and groups.",
    siteName: "EverTrip",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Transfers Santa Marta & Cartagena | EverTrip",
    description:
      "Private door-to-door transfers across Colombia's Caribbean coast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${publicSans.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
