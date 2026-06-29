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

// Quality and streaming optimization parameters
const DQ = "q_auto:best,fl_progressive,w_1920,du_60"; // desktop quality + progressive stream + 1 min limit
const MQ = "q_auto,fl_progressive,w_960,du_60";        // mobile quality + 1 min limit
const PQ = "q_auto,f_auto,w_1920";              // poster (desktop JPEG/WebP)

export const videoSources: Record<string, VideoSource> = {
  hero: {
    id: "hero",
    poster:      `${CLD}/${PQ}/Golf_in_Morocco_New_tmjx9s.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Golf_in_Morocco_New_tmjx9s.webm`,
    mp4:         `${CLD}/${DQ}/Golf_in_Morocco_New_tmjx9s.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Golf_in_Morocco_New_tmjx9s.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Golf_in_Morocco_New_tmjx9s.mp4`,
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
  fez: {
    id: "fez",
    poster:      `${CLD}/${PQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Fez_Hero_16x9_UpdatedLogo_z5b24u.mp4`,
  },
  chefchaouen: {
    id: "chefchaouen",
    poster:      `${CLD}/${PQ}/Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Chefchaouen_Hero_16x9_Final.mov_eushqt.mp4`,
  },
  tangier: {
    id: "tangier",
    poster:      `${CLD}/${PQ}/Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Tangier_Hero_16x9_UpdatedLogo_f9kwsc.mp4`,
  },
  casablanca: {
    id: "casablanca",
    poster:      `${CLD}/${PQ}/Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Casablanca_Hero_16x9_UpdatedLogo_htz5pb.mp4`,
  },
  dakhla: {
    id: "dakhla",
    poster:      `${CLD}/${PQ}/Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Dakhla_Hero_16x9_UpdatedLogo_cijwv8.mp4`,
  },
  ouarzazate: {
    id: "ouarzazate",
    poster:      `${CLD}/${PQ}/Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Ouarzazate_Hero_16x9_UpdatedLogo_jhmnuj.mp4`,
  },
  essaouira: {
    id: "essaouira",
    poster:      `${CLD}/${PQ}/Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz.jpg`,
    webm:        `${CLD}/${DQ},vc_vp9/Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz.webm`,
    mp4:         `${CLD}/${DQ}/Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz.mp4`,
    webmMobile:  `${CLD}/${MQ},vc_vp9/Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz.webm`,
    mp4Mobile:   `${CLD}/${MQ}/Morocco_Essaouira_Hero_16x9_UpdatedLogo_k4v9gz.mp4`,
  },
};
