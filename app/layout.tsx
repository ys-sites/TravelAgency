import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/lang-context";
import CallFloatingButton from "./components/CallFloatingButton";
import PageTransition from "./components/page-transition";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mevoyages.com"),
  title: {
    default: "Merveilles et Voyages — Golf & Voyage de Prestige au Maroc",
    template: "%s | Merveilles et Voyages",
  },
  description:
    "Explore the beauty of Morocco with premium golf packages and exclusive curated experiences organized by Merveilles et Voyages.",
  applicationName: "Merveilles et Voyages",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Merveilles et Voyages",
    url: "https://www.mevoyages.com",
    title: "Merveilles et Voyages — Golf & Voyage de Prestige au Maroc",
    description:
      "Premium golf packages and exclusive curated experiences in Morocco by Merveilles et Voyages.",
    locale: "fr_CA",
    alternateLocale: ["en_CA"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.mevoyages.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.mevoyages.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Merveilles et Voyages",
                  alternateName: "MEV",
                  url: "https://www.mevoyages.com",
                },
                {
                  "@type": "TravelAgency",
                  name: "Merveilles et Voyages",
                  url: "https://www.mevoyages.com",
                  logo: "https://www.mevoyages.com/images/logo.png",
                  areaServed: ["MA", "CA"],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LangProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CallFloatingButton />
        </LangProvider>
      </body>
    </html>
  );
}

