import type { Metadata } from "next";
import CustomTripClient from "./CustomTripClient";

export const metadata: Metadata = {
  title: "Build Your Exclusive Journey — Custom Luxury Travel | Merveilles et Voyages",
  description: "Design your perfect luxury trip to Morocco. Select destinations, activities, and duration. Our bilingual concierge team will handle everything else.",
};

export default function CustomTripPage() {
  return <CustomTripClient />;
}
