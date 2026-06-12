import type { Metadata } from "next";
import ItinerariesClient from "./ItinerariesClient";

export const metadata: Metadata = {
  title: "Curated Luxury Itineraries — Morocco, Dubai, Oman & Saudi Arabia | Majestic Experiences",
  description: "Explore our signature luxury itineraries to Morocco, Dubai & Abu Dhabi, Oman, and AlUla. All-inclusive, fully private, designed for discerning Canadian travellers.",
};

export default function ItinerariesPage() {
  return <ItinerariesClient />;
}
