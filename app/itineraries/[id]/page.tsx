import type { Metadata } from "next";
import ItineraryClient from "./ItineraryClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const seoData: Record<string, { title: string; description: string }> = {
    "1": {
      title: "Marrakech & Sahara Escape — 8-Day Luxury Morocco Tour | Majestic Experiences",
      description: "Private helicopter over the Atlas Mountains, Sahara desert glamping, and exclusive riad buyouts. Our signature 8-day Morocco itinerary from C$6,200 per person."
    },
    "2": {
      title: "Dubai & Abu Dhabi Oasis — 10-Day Luxury UAE Tour | Majestic Experiences",
      description: "Marina penthouse stays, private yacht charter, and Burj Khalifa suites. Our 10-day ultra-luxury Dubai and Abu Dhabi itinerary from C$8,250 per person."
    },
    "3": {
      title: "Sultanate of Oman Heritage — 12-Day Luxury Oman Tour | Majestic Experiences",
      description: "Mountain wadis, medieval forts, and a private Musandam dhow cruise. Discover Oman in depth with our 12-day all-inclusive itinerary from C$7,400 per person."
    },
    "4": {
      title: "AlUla & Red Sea Wonders — 14-Day Saudi Arabia Luxury Tour | Majestic Experiences",
      description: "Hegra tombs, luxury desert glamping, and a private Red Sea yacht. Experience the Kingdom of Saudi Arabia with our most exclusive 14-day itinerary from C$12,450 per person."
    }
  };

  const metadata = seoData[id] || {
    title: "Curated Luxury Itinerary | Majestic Experiences",
    description: "Bespoke ultra-luxury travel experiences designed for discerning Canadian travellers."
  };

  return {
    title: metadata.title,
    description: metadata.description
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  return <ItineraryClient id={resolvedParams.id} />;
}
export const dynamic = "force-dynamic";
