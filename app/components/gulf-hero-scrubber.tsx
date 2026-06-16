'use client';

import { motion } from "motion/react";
import { useLang } from "../context/lang-context";

export default function GulfHeroScrubber() {
  const { lang } = useLang();

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Render Cloudinary Video Embed Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          className="w-full h-full object-cover bg-black bg-center bg-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/dmnoikwb9/video/upload/q_auto,f_auto,w_1920/Morocco_Cinematic_Video_-_SONY_A7SIII_-_Chema_Balbuena_1080p_h264_kc6dcx.jpg')"
          }}
          poster="https://res.cloudinary.com/dmnoikwb9/video/upload/q_auto,f_auto,w_1920/Morocco_Cinematic_Video_-_SONY_A7SIII_-_Chema_Balbuena_1080p_h264_kc6dcx.jpg"
        >
          <source src="https://res.cloudinary.com/dmnoikwb9/video/upload/q_auto,w_1920,vc_vp9/Morocco_Cinematic_Video_-_SONY_A7SIII_-_Chema_Balbuena_1080p_h264_kc6dcx.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/dmnoikwb9/video/upload/q_auto,w_1920,vc_h264/Morocco_Cinematic_Video_-_SONY_A7SIII_-_Chema_Balbuena_1080p_h264_kc6dcx.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Cinematic Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-1" />

      {/* Centered Premium Logo */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-2 z-10 px-6 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl pointer-events-auto text-center"
        >
          <img
            src="/images/logo.png"
            alt="Majestic Experiences Logo"
            className="w-[200px] sm:w-[260px] md:w-[300px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
      
      {/* Bottom Subtext & Call to Actions */}
      <div className="absolute bottom-24 left-0 right-0 z-10 flex flex-col items-center px-6 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-4xl pointer-events-auto text-center space-y-6"
        >
          <h2 className="font-serif text-lg sm:text-xl md:text-2xl text-white tracking-[0.1em] uppercase font-light max-w-2xl leading-relaxed">
            {lang === "FR"
              ? "Concierge de Voyage de Prestige et Séjours de Golf au Maroc"
              : "Bespoke Travel Concierge & Premium Golf Experiences in Morocco"
            }
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md mx-auto">
            <a
              href="#itineraries"
              className="w-full border border-white bg-white hover:bg-transparent text-zinc-950 hover:text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-luxury rounded-full shadow-md hover:-translate-y-0.5 inline-block text-center min-w-[220px] cursor-pointer"
            >
              {lang === "FR" ? "Explorer les Itinéraires" : "Explore Itineraries"}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Highly Visible Mouse Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.95 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 text-white/80 pointer-events-none"
      >
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase mb-3">{lang === "FR" ? "Défiler pour Explorer" : "Scroll to Explore"}</span>
        <div className="w-[28px] h-[48px] rounded-full border-2 border-white/40 flex justify-center p-1.5 shadow-md">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}
