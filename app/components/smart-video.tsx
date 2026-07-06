'use client';

import React, { useState, useEffect, useRef } from "react";
import { VideoSource } from "../../data/videoSources";

interface SmartVideoProps {
  source: VideoSource;
  variant: "hero" | "tile";
  className?: string;
}

export default function SmartVideo({ source, variant, className = "" }: SmartVideoProps) {
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  // Resolved at runtime so SSR always matches client
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Detect prefers-reduced-motion + mobile width
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", listener);

    // Use screen width (not viewport) so tablet landscape is correctly classified
    setIsMobile(window.screen.width <= 768);

    return () => mq.removeEventListener("change", listener);
  }, []);

  // 2. Intersection Observer for tile lazy-loading
  useEffect(() => {
    if (variant === "hero") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "200px" }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [variant]);

  // 3. Play / pause on visibility change
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isInView) {
      vid.play().catch(() => { /* autoplay blocked — silently ignored */ });
    } else {
      vid.pause();
    }
  }, [isInView]);

  // 4. Re-load video when isMobile resolves (src changed)
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid || !isInView) return;
    vid.load();
    vid.play().catch(() => {});
  }, [isMobile]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLoadedData = () => setIsLoaded(true);
  const handleError = () => { setHasError(true); setIsLoaded(false); };

  const aspectClass = variant === "hero" ? "h-full w-full" : "aspect-video w-full";
  const shouldRenderVideo = isInView && !prefersReducedMotion && !hasError;

  // Pick the correct resolution based on actual device width
  const mp4Src  = isMobile ? source.mp4Mobile  : source.mp4;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectClass} ${className}`}
      style={{ backgroundColor: "#000" }}
    >
      {/* Poster — always visible, fades when video loads */}
      <img
        src={source.poster}
        alt={`${source.id} destination`}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-30" : "opacity-100"
        }`}
        style={{ filter: "brightness(0.95)" }}
      />

      {/* Video — rendered only when in-view, motion allowed, no error */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          key={isMobile ? "mobile" : "desktop"} /* remount on resolution switch */
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          // @ts-ignore — fetchpriority is a valid HTML attribute not yet in React types
          fetchpriority={variant === "hero" ? "high" : "auto"}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          {/* MP4 (H.264 — universal) */}
          <source src={mp4Src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
