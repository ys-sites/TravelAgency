import type { Metadata } from "next";
import ItinerariesClient from "./ItinerariesClient";

export const metadata: Metadata = {
  title: "Curated Luxury Itineraries — Morocco Golf & Cultural Tours | Merveilles et Voyages",
  description: "Explore our signature luxury itineraries across Morocco: royal golf packages in Rabat, Marrakech, Agadir, and imperial culture & desert tours. All-inclusive, fully private, designed for discerning Canadian travellers.",
};

export default function ItinerariesPage() {
  return <ItinerariesClient />;
}
