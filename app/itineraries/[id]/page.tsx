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
      case "8": return itinerariesData["8"];
      case "9": return itinerariesData["9"];
      case "10": return itinerariesData["10"];
      case "11": return itinerariesData["11"];
      case "12": return itinerariesData["12"];
      case "13": return itinerariesData["13"];
      case "14": return itinerariesData["14"];
      case "15": return itinerariesData["15"];
      case "16": return itinerariesData["16"];
      default: return null;
    }
  })();

  if (!itinerary) {
    return {
      title: "Curated Luxury Itinerary | Majestic Experiences",
      description: "Exclusive ultra-luxury travel experiences designed for discerning travellers."
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
