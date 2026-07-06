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
  title: "Merveilles et Voyages — Golf & Voyage de Prestige au Maroc",
  description: "Explore the beauty of Morocco with premium golf packages and exclusive curated experiences organized by Merveilles et Voyages.",
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

