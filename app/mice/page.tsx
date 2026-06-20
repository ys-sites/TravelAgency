import type { Metadata } from "next";
import MiceClient from "@/app/mice/MiceClient";

export const metadata: Metadata = {
  title: "MICE Corporate Services Morocco — Meetings & Events | Majestic Experiences",
  description: "Exclusive corporate meetings, incentive travel programs, conferences, company retreats, and product launches in Morocco. Seamless end-to-end event management by M.E. Voyages.",
};

export default function MicePage() {
  return <MiceClient />;
}

export const dynamic = "force-dynamic";
