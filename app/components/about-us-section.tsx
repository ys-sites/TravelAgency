'use client';

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useLang, translate } from "../context/lang-context";
import { videoAsset } from "@/data/videoSources";

const t = {
  heading: {
    EN: "Our Mission",
    FR: "Notre Mission"
  },
  subheading: {
    EN: "Morocco Specialists & Passionate Golfers",
    FR: "Spécialistes du Maroc & Golfeurs Passionnés"
  },
  paragraph1: {
    EN: "At Merveilles et Voyages, we specialize exclusively in Morocco. Because we focus on a single destination, we know it more deeply than anyone else—from its most prestigious royal golf courses to its finest hidden gems. As passionate golfers ourselves, we understand exactly what players expect: perfect tee times, seamless logistics, and exceptional service on and off the course.",
    FR: "Chez Merveilles et Voyages, nous nous spécialisons exclusivement au Maroc. En nous concentrant sur une seule destination, nous la connaissons plus profondément que quiconque—de ses parcours de golf royaux les plus prestigieux à ses joyaux cachés. En tant que golfeurs passionnés, nous comprenons exactement ce que les joueurs attendent : des départs parfaits, une logistique fluide et un service exceptionnel sur le parcours et en dehors."
  },
  paragraph2: {
    EN: "Driven by our deep knowledge of Morocco and our commitment to excellence, we accompany you throughout your journey with personalized guidance and local expertise. We take you beyond the guidebooks, beyond the landmarks, and beyond expectations. From breathtaking landscapes to authentic cultural encounters, our goal is not simply to show you Morocco—it is to make you feel it, live it, and return home forever changed.",
    FR: "Guidés par notre connaissance approfondie du Maroc et notre engagement envers l'excellence, nous vous accompagnons tout au long de votre voyage avec des conseils personnalisés et une expertise locale. Nous vous emmenons au-delà des guides, au-delà des monuments et au-delà des attentes. Des paysages à couper le souffle aux rencontres culturelles authentiques, notre but n'est pas seulement de vous faire découvrir le Maroc—c'est de vous le faire ressentir, vivre et de vous faire revenir transformé à jamais."
  },
  credential1Label: {
    EN: "15+",
    FR: "15+"
  },
  credential1Desc: {
    EN: "Years of combined regional expertise",
    FR: "Années d'expertise régionale combinée"
  },
  credential2Label: {
    EN: "Elite",
    FR: "Élite"
  },
  credential2Desc: {
    EN: "Curated packages designed by Pros",
    FR: "Séjours d'exception conçus par des professionnels"
  },
  credential3Label: {
    EN: "24/7",
    FR: "24h/24"
  },
  credential3Desc: {
    EN: "24/7 Round-the-Clock Assistance Throughout Your Stay",
    FR: "Assistance 24h/24, 7j/7 tout au long de votre séjour"
  },
  cta: {
    EN: "Explore Our Packages →",
    FR: "Explorer Nos Forfaits →"
  }
};

const MAX_DURATION = 59; // Strictly capped at 59 seconds

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default function AboutUsSection() {
  const { lang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (currentTime >= MAX_DURATION) {
        videoRef.current.currentTime = 0;
        setCurrentTime(0);
      }
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    if (curr >= MAX_DURATION) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
    } else {
      setCurrentTime(curr);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    const seekTime = Math.min(val, MAX_DURATION);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
    setCurrentTime(seekTime);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* Main Grid: Left column (story) + Right column (explainer video slot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">
                {translate(t.heading, lang)}
              </h2>
              <p className="text-brand-gold font-serif italic text-[18px]">
                {translate(t.subheading, lang)}
              </p>
            </div>

            <div className="space-y-4 text-zinc-600 leading-relaxed font-light">
              <p className="text-[16px]">
                {translate(t.paragraph1, lang)}
              </p>
              <p className="text-[16px]">
                {translate(t.paragraph2, lang)}
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/itineraries"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 hover:bg-brand-gold hover:text-black text-white font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 transition-luxury shadow-md cursor-pointer hover:-translate-y-0.5"
              >
                {translate(t.cta, lang)}
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Custom 59-Second Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div 
              ref={containerRef}
              className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-950 shadow-md group cursor-pointer"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={videoRef}
                preload="metadata"
                poster={videoAsset("Golf_in_Morocco_New_tmjx9s").poster}
                className="absolute inset-0 w-full h-full object-cover"
                onTimeUpdate={handleTimeUpdate}
                onClick={togglePlay}
                playsInline
              >
                <source src={videoAsset("Golf_in_Morocco_New_tmjx9s").mp4} type="video/mp4" />
              </video>

              {/* Centered Large Play Button when Paused */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/35 flex items-center justify-center transition-opacity duration-300"
                >
                  <div className="w-16 h-16 rounded-full bg-[#C5A880] text-zinc-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Custom Bottom Control Bar locked strictly to 0:59 max */}
              <div 
                className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 flex flex-col gap-2 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Scrubber track */}
                <input
                  type="range"
                  min={0}
                  max={MAX_DURATION}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#C5A880] focus:outline-none"
                />

                {/* Control Action Buttons & Time Display */}
                <div className="flex items-center justify-between text-white text-xs font-mono pt-1">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay} 
                      className="hover:text-[#C5A880] transition-colors cursor-pointer"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>

                    <button 
                      onClick={toggleMute} 
                      className="hover:text-[#C5A880] transition-colors cursor-pointer"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>

                    <span className="text-[11px] tracking-wider text-zinc-300 select-none">
                      {formatTime(currentTime)} / 0:59
                    </span>
                  </div>

                  <button 
                    onClick={toggleFullscreen} 
                    className="hover:text-[#C5A880] transition-colors cursor-pointer"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Credentials Row below: 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-8 border-t border-zinc-100"
        >
          {/* Credential Card 1 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential1Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential1Desc, lang)}
            </p>
          </div>

          {/* Credential Card 2 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential2Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential2Desc, lang)}
            </p>
          </div>

          {/* Credential Card 3 */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 space-y-3 hover:border-brand-gold/30 transition-colors duration-300">
            <div className="text-4xl md:text-5xl font-bold text-brand-gold font-serif">
              {translate(t.credential3Label, lang)}
            </div>
            <p className="text-zinc-700 font-light text-[15px]">
              {translate(t.credential3Desc, lang)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
