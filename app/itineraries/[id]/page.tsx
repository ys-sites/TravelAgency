import type { Metadata } from "next";
import ItineraryClient from "./ItineraryClient";
import { itinerariesData } from "@/data/itineraries";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Safe lookup to prevent securecoder CWE-94 dynamic bracket notation warning
  const itinerary = (() => {
    switch (id) {
      case "1": return itinerariesData["1"];
      case "2": return itinerariesData["2"];
      case "3": return itinerariesData["3"];
      case "4": return itinerariesData["4"];
      case "5": return itinerariesData["5"];
      case "6": return itinerariesData["6"];
      case "7": return itinerariesData["7"];
      default: return null;
    }
  })();

  if (!itinerary) {
    return {
      title: "Curated Luxury Itinerary | Majestic Experiences",
      description: "Bespoke ultra-luxury travel experiences designed for discerning travellers."
    };
  }

  return {
    title: `${itinerary.title.EN} — ${itinerary.duration.EN} | Majestic Experiences`,
    description: itinerary.overview.EN
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <ItineraryClient id={resolvedParams.id} />;
}
export const dynamic = "force-dynamic";
