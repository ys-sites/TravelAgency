import type { Metadata } from "next";
import TravelStoriesClient from "./TravelStoriesClient";

export const metadata: Metadata = {
  title: "Travel Stories — Curated Journey Journals | Merveilles et Voyages",
  description: "Read authentic stories, journals, and experiences from our privileged travellers exploring Morocco with Merveilles et Voyages.",
};

export default function TravelStoriesPage() {
  return <TravelStoriesClient />;
}
