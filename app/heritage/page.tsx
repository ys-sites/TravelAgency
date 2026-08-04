import type { Metadata } from "next";
import HeritageClient from "./HeritageClient";

export const metadata: Metadata = {
  title: "Morocco Heritage & Cultural Passages — 9 UNESCO World Heritage Sites | Merveilles et Voyages",
  description: "Discover Morocco's 9 UNESCO World Heritage Sites, 4 Imperial Capitals, architectural mastercrafts (zellige, tadelakt), luxury riads, and multi-city departure flights across North America with dedicated concierge service.",
};

export default function HeritagePage() {
  return <HeritageClient />;
}
