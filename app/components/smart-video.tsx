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
  
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 1. Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // 2. Intersection Observer for tile-based lazy loading
  useEffect(() => {
    if (variant === "hero") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [variant]);

  // 3. Play or pause video when in view changes (for already mounted video element if we don't unmount)
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Ignore autoplay block errors
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  // Determine classes
  const aspectClass = variant === "hero" ? "h-full w-full" : "aspect-video w-full";
  const shouldRenderVideo = isInView && !prefersReducedMotion && !hasError;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${aspectClass} ${className}`}
      style={{
        backgroundColor: "#000",
      }}
    >
      {/* 1. Poster Image (always rendered, fades out slightly or stays under the video) */}
      <img
        src={source.poster}
        alt={`${source.id} background poster`}
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
          isLoaded ? "opacity-40" : "opacity-100"
        }`}
        style={{
          filter: "brightness(0.95)",
        }}
      />

      {/* 2. Responsive Video element */}
      {shouldRenderVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover z-1 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload={variant === "hero" ? "auto" : "metadata"}
          onLoadedData={handleLoadedData}
          onError={handleError}
        >
          {/* Mobile WebM */}
          <source src={source.webmMobile} type="video/webm" media="(max-width: 768px)" />
          {/* Mobile MP4 */}
          <source src={source.mp4Mobile} type="video/mp4" media="(max-width: 768px)" />
          
          {/* Desktop WebM */}
          <source src={source.webm} type="video/webm" />
          {/* Desktop MP4 */}
          <source src={source.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
