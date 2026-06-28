export type VideoSource = {
  id: string;
  poster: string;
  webm: string;
  mp4: string;
  webmMobile: string;
  mp4Mobile: string;
};

// Cloudinary base
const CLD = "https://res.cloudinary.com/dzgmvz6tc/video/upload";

// Desktop: q_auto:best = highest quality Cloudinary will serve without artefacts
//          fl_progressive = moov atom moved to front → browser starts playing in <1s
//          w_1920 = full HD — no downscaling on large monitors
// Mobile:  q_auto = adaptive quality, w_960 = 720p-equivalent → half the bandwidth
const DQ = "q_auto:best,fl_progressive,w_1920"; // desktop quality
const MQ = "q_auto,fl_progressive,w_960";        // mobile quality
const PQ = "q_auto,f_auto,w_1920";              // poster (desktop JPEG/WebP)
const PMQ = "q_auto,f_auto,w_960";              // poster (mobile)

export const videoSources: Record<string, VideoSource> = {
  hero: {
    id: "hero",
    poster:      `${CLD}/${PQ}/Golf_in_Morocco_ssfati.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Golf_in_Morocco_ssfati.webm`,
    mp4:         `${CLD}/${DQ}/Golf_in_Morocco_ssfati.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Golf_in_Morocco_ssfati.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Golf_in_Morocco_ssfati.mp4`,
  },
  marrakech: {
    id: "marrakech",
    poster:      `${CLD}/${PQ}/Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Marrakech_Hero_16x9_UpdatedLogo_wv2yxv.mp4`,
  },
  agadir: {
    id: "agadir",
    poster:      `${CLD}/${PQ}/Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Agadir_Hero_16x9_UpdatedLogo_btpcad.mp4`,
  },
  rabat: {
    id: "rabat",
    poster:      `${CLD}/${PQ}/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Rabat_Hero_16x9_UpdatedLogo_m8pybw.mp4`,
  },
  // Imperial = Fez video (ids 6, 7, 9 — Fez, Chefchaouen, Imperial Cities)
  imperial: {
    id: "imperial",
    poster:      `${CLD}/${PQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.mp4`,
  },
};
