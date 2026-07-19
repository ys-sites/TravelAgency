import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Merveilles et Voyages — Portfolio",
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
