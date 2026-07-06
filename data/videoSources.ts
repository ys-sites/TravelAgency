export type VideoSource = {
  id: string;
  poster: string;
  webm: string;
  mp4: string;
  webmMobile: string;
  mp4Mobile: string;
};

// Cloudflare R2 CDN base (bucket: ysmarketingsolution)
export const CDN =
  process.env.NEXT_PUBLIC_CDN_URL ?? "https://cdn.mevoyages.com";

// All variants are pre-encoded and stored at videos/{assetId}/{variant}
export const videoAsset = (assetId: string): VideoSource => ({
  id: assetId,
  poster: `${CDN}/videos/${assetId}/poster.jpg`,
  webm: `${CDN}/videos/${assetId}/desktop.webm`,
  mp4: `${CDN}/videos/${assetId}/desktop.mp4`,
  webmMobile: `${CDN}/videos/${assetId}/mobile.webm`,
  mp4Mobile: `${CDN}/videos/${assetId}/mobile.mp4`,
});

// Map of site keys -> R2 asset folders (original public IDs)
const ASSETS: Record<string, string> = {
  hero: "Golf_in_Morocco_New_tmjx9s",
  marrakech: "Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv",
  agadir: "Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad",
  rabat: "Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw",
  fez: "Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u",
  chefchaouen: "Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt",
  tangier: "Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc",
  casablanca: "Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb",
  dakhla: "Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8",
  ouarzazate: "Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj",
  essaouira: "Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz",
};

export const videoSources: Record<string, VideoSource> = Object.fromEntries(
  Object.entries(ASSETS).map(([key, assetId]) => [
    key,
    { ...videoAsset(assetId), id: key },
  ])
);
