import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./context/lang-context";
import CallFloatingButton from "./components/CallFloatingButton";
import PageTransition from "./components/page-transition";
import Script from "next/script";

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
      lang="fr"
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
                  "@id": "https://www.mevoyages.com/#agency",
                  "name": "Merveilles et Voyages",
                  "url": "https://www.mevoyages.com",
                  "logo": "https://www.mevoyages.com/images/logo.png",
                  "telephone": "+15149196381",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "14050 rue des Saules",
                    "addressLocality": "Mirabel",
                    "addressRegion": "QC",
                    "postalCode": "J7N 3G3",
                    "addressCountry": "CA"
                  },
                  "areaServed": ["Montréal", "Laval", "Mirabel", "Grand Montréal", "QC", "MA"],
                  "priceRange": "$$$",
                  "sameAs": ["GBP_MAPS_URL_PLACEHOLDER", "INSTAGRAM_URL_PLACEHOLDER"],
                  "knowsAbout": ["Forfaits golf Maroc", "Voyages de luxe", "MICE", "Voyages sur mesure Dubaï Oman Arabie Saoudite"]
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8ZK4FGP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <LangProvider>
          <PageTransition>
            {children}
          </PageTransition>
          <CallFloatingButton />
        </LangProvider>

        {/* Google Analytics GA4 — G-WEM88RMSG9 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WEM88RMSG9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WEM88RMSG9');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W8ZK4FGP');
          `}
        </Script>
      </body>
    </html>
  );
}

