import type { Metadata } from "next";
import AgadirGolfClient from "./AgadirGolfClient";

export const metadata: Metadata = {
  title: "Premium Agadir Golf Packages — Elite Travel Morocco | Merveilles et Voyages",
  description: "Book our exclusive golf itineraries in Agadir, Morocco. Stay at Hilton Taghazout or White Beach Hotel with round-trip flights, transfers, and 4 rounds of championship golf.",
};

export default function AgadirGolfPage() {
  return <AgadirGolfClient />;
}

export const dynamic = "force-dynamic";
