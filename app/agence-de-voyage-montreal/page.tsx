import type { Metadata } from "next";
import AgenceDeVoyageMontrealClient from "./AgenceDeVoyageMontrealClient";

export const metadata: Metadata = {
  title: "Agence de Voyage à Montréal & Mirabel — Golf, Luxe & MICE | Merveilles et Voyages",
  description: "Merveilles et Voyages est votre agence de voyage de prestige à Mirabel, desservant Montréal, Laval et la Rive-Nord. Découvrez nos forfaits golf d'exception au Maroc, voyages de luxe sur mesure et solutions MICE.",
  alternates: {
    canonical: "/agence-de-voyage-montreal",
  },
};

export default function AgenceDeVoyageMontrealPage() {
  return <AgenceDeVoyageMontrealClient />;
}

export const dynamic = "force-dynamic";
