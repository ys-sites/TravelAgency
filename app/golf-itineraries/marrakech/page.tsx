import type { Metadata } from "next";
import MarrakechGolfClient from "@/app/golf-itineraries/marrakech/MarrakechGolfClient";

export const metadata: Metadata = {
  title: "Premium Marrakech Golf Packages — Elite Travel Morocco | Merveilles et Voyages",
  description: "Book our exclusive golf itineraries in Marrakech, Morocco. Stay at Hotel du Golf or Jaal Riad Hotel with round-trip flights, transfers, and championship golf.",
};

export default function MarrakechGolfPage() {
  return <MarrakechGolfClient />;
}

export const dynamic = "force-dynamic";
