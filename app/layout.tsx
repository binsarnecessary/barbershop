import type { Metadata } from "next";
import { Oswald, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const h = Oswald({ subsets: ["latin"], variable: "--font-h" });
const b = Jost({ subsets: ["latin"], variable: "--font-b" });

export const metadata: Metadata = {
  title: "Crown Barber \u2014 Premium Barbershop | Jakarta",
  description: "Crown Barber adalah premium barbershop dengan barber berpengalaman, booking online, dan suasana klasik maskulin. Haircut, shaving, grooming lengkap.",
  openGraph: {
    title: "Crown Barber \u2014 Look Sharp, Feel Royal",
    description: "Crown Barber adalah premium barbershop dengan barber berpengalaman, booking online, dan suasana klasik maskulin. Haircut, shaving, grooming lengkap.",
    type: "website",
    locale: "id_ID",
  },
};

const jsonLd = {"@context": "https://schema.org", "@type": "HairSalon", "name": "Crown Barber", "description": "Premium barbershop dengan barber berpengalaman", "priceRange": "Rp75.000 - Rp350.000"};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${h.variable} ${b.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
