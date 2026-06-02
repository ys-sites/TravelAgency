'use client';

import { motion } from "motion/react";

export default function GulfHeroScrubber() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Render Cloudinary Video Embed Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dmnoikwb9&public_id=Morocco_Cinematic_Video_-_SONY_A7SIII_-_Chema_Balbuena_1080p_h264_kc6dcx&autoplay=true&muted=true&loop=true&controls=false"
          className="absolute top-1/2 left-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-110"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      </div>
      
      {/* Cinematic Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none z-1" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none z-1" />

      {/* Centered Premium Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-6 select-none pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-5xl"
        >
          <img
            src="/images/logo.png"
            alt="WonderLand Logo"
            className="w-[280px] sm:w-[420px] md:w-[540px] h-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 text-white/50 pointer-events-none"
      >
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}
