import type { MetadataRoute } from "next";
import { itinerariesData } from "@/data/itineraries";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mevoyages.com";

  // Static routes
  const staticRoutes = [
    "",
    "/itineraries",
    "/mice",
    "/golf-itineraries/agadir",
    "/golf-itineraries/marrakech",
    "/travel-stories",
    "/custom-trip",
    "/conditions",
    "/agence-de-voyage-montreal",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route === "/agence-de-voyage-montreal" ? 0.9 : 0.8,
  }));

  // Dynamic routes based on itineraries
  const dynamicEntries = Object.keys(itinerariesData).map((key) => ({
    url: `${baseUrl}/itineraries/${key}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...dynamicEntries];
}
