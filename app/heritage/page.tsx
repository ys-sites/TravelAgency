import type { Metadata } from "next";
import HeritageClient from "./HeritageClient";

export const metadata: Metadata = {
  title: "Morocco Heritage & Cultural Passages — One Destination, Endless Expertise | Merveilles et Voyages",
  description: "Explore Morocco's rich architectural heritage, UNESCO world heritage sites, pristine Atlantic coastlines, and luxury riads. Multi-city North American departure flights & bespoke concierge itineraries.",
};

export default function HeritagePage() {
  return <HeritageClient />;
}

export const dynamic = "force-dynamic";
