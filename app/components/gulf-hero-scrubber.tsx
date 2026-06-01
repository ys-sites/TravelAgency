'use client';

import { useScroll, motion, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/lang-context";

const IMAGES = [
  "/images/gulf-city-skyline.png",
  "/images/gulf-desert-sunset.png",
  "/images/morocco-sahara-dunes.png",
  "/images/morocco-marrakech-riad.png",
  "/images/oman-wadi-canyon.png",
  "/images/saudi-alula-canyon.png"
];

const t = {
  slide1: {
    welcome: { EN: "WELCOME TO THE ARABIAN FRONTIER", FR: "BIENVENUE SUR LA FRONTIÈRE ARABE" },
    title: { EN: "WonderLand Gulf", FR: "WonderLand Gulf" },
    desc: { EN: "Bespoke travel concierge services across the Arabian Gulf & Morocco.", FR: "Services de conciergerie de voyage sur mesure à travers le Golfe et le Maroc." }
  },
  slide2: {
    welcome: { EN: "THE SOVEREIGN PASSAGE", FR: "LE PASSAGE SOUVERAIN" },
    title: { EN: "Morocco & Beyond", FR: "Le Maroc & Au-Delà" },
    desc: { EN: "From the golden dunes of the Sahara to the red palaces of Marrakech.", FR: "Des dunes dorées du Sahara aux palais rouges de Marrakech." }
  },
  slide3: {
    welcome: { EN: "YOUR PRIVATE CHARTER AWAITS", FR: "VOTRE CHARTE PRIVÉE VOUS ATTEND" },
    title: { EN: "Bespoke Sanctums", FR: "Sanctuaires Exclusifs" },
    desc: { EN: "Secure pre-built itineraries or customize your premium escape.", FR: "Sécurisez des itinéraires pré-conçus ou personnalisez votre évasion de prestige." }
  },
  scrollPrompt: {
    EN: "Scroll to Explore",
    FR: "Faites défiler pour explorer"
  }
};

export default function GulfHeroScrubber() {
  const { lang } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedImagesRef = useRef<HTMLImageElement[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate values for text anim based on scroll progress
  // Slide 1 opacity: fades out by 0.3
  const s1Opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.25], [0, -50]);

  // Slide 2 opacity: fades in at 0.3, out at 0.65
  const s2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [30, 0, 0, -30]);

  // Slide 3 opacity: fades in at 0.65
  const s3Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const s3Y = useTransform(scrollYProgress, [0.65, 0.75], [30, 0]);

  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    IMAGES.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        loadedImages[idx] = img;
        if (loadedCount === IMAGES.length) {
          loadedImagesRef.current = loadedImages;
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback to avoid locks
        loadedCount++;
        if (loadedCount === IMAGES.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Frame Scrubbing Canvas Loop
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: false, colorSpace: 'display-p3' });
    if (!context) return;

    const render = (progress: number) => {
      const totalImages = IMAGES.length;
      const rawIndex = progress * (totalImages - 1);
      const index = Math.floor(rawIndex);
      const nextIndex = Math.min(index + 1, totalImages - 1);
      const progressBetween = rawIndex - index;

      const img1 = loadedImagesRef.current[index];
      const img2 = loadedImagesRef.current[nextIndex];

      if (!img1) return;

      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.scale(dpr, dpr);

      // Helper function to draw an image covering the canvas (object-cover style)
      // with custom opacity and zoom/pan scale factor
      const drawCover = (img: HTMLImageElement, alpha: number, scaleFactor: number) => {
        context.globalAlpha = alpha;
        
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        
        let drawWidth = width * scaleFactor;
        let drawHeight = height * scaleFactor;
        
        if (imgRatio > canvasRatio) {
          drawWidth = height * imgRatio * scaleFactor;
        } else {
          drawHeight = (width / imgRatio) * scaleFactor;
        }

        const offsetX = (width - drawWidth) / 2;
        const offsetY = (height - drawHeight) / 2;

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      // Clear
      context.fillStyle = "#0c0c0c";
      context.fillRect(0, 0, width, height);

      // Draw the first image with zoom out effect as we scroll
      const scale1 = 1.05 - (progressBetween * 0.05);
      drawCover(img1, 1 - progressBetween, scale1);

      // Draw the next image blending in with zoom in effect
      if (img2 && progressBetween > 0.001) {
        const scale2 = 1.0 + ((1 - progressBetween) * 0.05);
        drawCover(img2, progressBetween, scale2);
      }
    };

    // Render initial frame
    render(0);

    // Bind to scroll progress
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Limit latest to 0-1 range
      const progress = Math.max(0, Math.min(1, latest));
      requestAnimationFrame(() => render(progress));
    });

    // Resize handler
    const handleResize = () => {
      const progress = scrollYProgress.get();
      render(progress);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesLoaded, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[#0c0c0c]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Render Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none"
          style={{ filter: "contrast(1.05) saturate(1.05)" }}
        />
        
        {/* Cinematic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />

        {/* Dynamic Typography Overlays */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 z-10 select-none pointer-events-none">
          {/* Slide 1 */}
          <motion.div
            style={{ opacity: s1Opacity, y: s1Y }}
            className="absolute flex flex-col items-center max-w-5xl"
          >
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.35em] uppercase mb-4">
              {t.slide1.welcome[lang]}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-8xl text-white tracking-[0.05em] uppercase leading-none font-bold text-gradient-gold pb-4">
              {t.slide1.title[lang]}
            </h1>
            <p className="text-white/60 font-body text-[12px] sm:text-base tracking-wider mt-4 font-light max-w-2xl">
              {t.slide1.desc[lang]}
            </p>
          </motion.div>

          {/* Slide 2 */}
          <motion.div
            style={{ opacity: s2Opacity, y: s2Y }}
            className="absolute flex flex-col items-center max-w-4xl"
          >
            <span className="text-white/40 font-mono text-[10px] md:text-[12px] tracking-[0.3em] uppercase mb-4">
              {t.slide2.welcome[lang]}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white tracking-[0.05em] uppercase leading-none font-light">
              {t.slide2.title[lang]}
            </h2>
            <p className="text-brand-gold font-body text-[11px] sm:text-sm tracking-[0.2em] uppercase mt-6 font-medium">
              {t.slide2.desc[lang]}
            </p>
          </motion.div>

          {/* Slide 3 */}
          <motion.div
            style={{ opacity: s3Opacity, y: s3Y }}
            className="absolute flex flex-col items-center max-w-4xl pointer-events-auto"
          >
            <span className="text-brand-gold font-mono text-[10px] md:text-[12px] tracking-[0.35em] uppercase mb-4">
              {t.slide3.welcome[lang]}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl text-white tracking-[0.05em] uppercase leading-none font-light">
              {t.slide3.title[lang]}
            </h2>
            <p className="text-white/50 font-body text-[12px] sm:text-base tracking-wider mt-4 font-light max-w-xl">
              {t.slide3.desc[lang]}
            </p>
            <div className="mt-8">
              <a
                href="#portfolios"
                className="border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md px-8 py-3.5 text-white hover:text-black font-body text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:border-white transition-luxury rounded-full cursor-pointer inline-block"
              >
                {lang === "FR" ? "Découvrir la Collection" : "Discover Portfolios"}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          style={{ opacity: scrollPromptOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 text-white/40 pointer-events-none"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3">
            {t.scrollPrompt[lang]}
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
