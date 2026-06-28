export type VideoSource = {
  id: string;
  poster: string;
  webm: string;
  mp4: string;
  webmMobile: string;
  mp4Mobile: string;
};

// CLOUD_BASE is empty for now (local /public/video). Once videos are uploaded to Bunny.net,
// set this to your Bunny.net pull-zone base URL (e.g. "https://your-zone.b-cdn.net")
// and prefix every path below with it — nothing else in the codebase changes.
const CLOUD_BASE = "";

export const videoSources: Record<string, VideoSource> = {
  hero: {
    id: "hero",
    poster: "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,f_auto,w_1920/Golf_in_Morocco_ssfati.jpg",
    webm: "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,w_1920,vc_vp9/Golf_in_Morocco_ssfati.webm",
    mp4: "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,w_1920,vc_h264/Golf_in_Morocco_ssfati.mp4",
    webmMobile: "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,w_960,vc_vp9/Golf_in_Morocco_ssfati.webm",
    mp4Mobile: "https://res.cloudinary.com/dzgmvz6tc/video/upload/q_auto,w_960,vc_h264/Golf_in_Morocco_ssfati.mp4",
  },
  marrakech: { 
    id: "marrakech", 
    poster: "/images/posters/marrakech.jpg", 
    webm: `${CLOUD_BASE}/video/marrakech.webm`, 
    mp4: `${CLOUD_BASE}/video/marrakech.mp4`, 
    webmMobile: `${CLOUD_BASE}/video/marrakech-mobile.webm`, 
    mp4Mobile: `${CLOUD_BASE}/video/marrakech-mobile.mp4` 
  },
  agadir: { 
    id: "agadir", 
    poster: "/images/posters/agadir.jpg", 
    webm: `${CLOUD_BASE}/video/agadir.webm`, 
    mp4: `${CLOUD_BASE}/video/agadir.mp4`, 
    webmMobile: `${CLOUD_BASE}/video/agadir-mobile.webm`, 
    mp4Mobile: `${CLOUD_BASE}/video/agadir-mobile.mp4` 
  },
  rabat: { 
    id: "rabat", 
    poster: "/images/posters/rabat.jpg", 
    webm: `${CLOUD_BASE}/video/rabat.webm`, 
    mp4: `${CLOUD_BASE}/video/rabat.mp4`, 
    webmMobile: `${CLOUD_BASE}/video/rabat-mobile.webm`, 
    mp4Mobile: `${CLOUD_BASE}/video/rabat-mobile.mp4` 
  },
  imperial: { 
    id: "imperial", 
    poster: "/images/posters/imperial-cities.jpg", 
    webm: `${CLOUD_BASE}/video/imperial-cities.webm`, 
    mp4: `${CLOUD_BASE}/video/imperial-cities.mp4`, 
    webmMobile: `${CLOUD_BASE}/video/imperial-cities-mobile.webm`, 
    mp4Mobile: `${CLOUD_BASE}/video/imperial-cities-mobile.mp4` 
  },
};
