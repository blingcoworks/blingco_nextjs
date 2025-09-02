"use client";
import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * VideoShowcaseSection
 * ------------------------------------------------------
 * A production-ready, single-file Next.js section that showcases a video
 * with an immersive hero, sticky controls, and scene thumbnails that scrub
 * the video. Tailwind-only styling; no external UI kit required.
 *
 * How to use
 * 1) Place your video file in /public (e.g., /public/product.mp4)
 * 2) (Optional) Place generated thumbnails in /public/thumbs (e.g., /public/thumbs/thumb_00.png ...)
 * 3) Import and use <VideoShowcaseSection /> in any page/component.
 *
 * Props below are prefilled with sensible defaults – you can inline-edit.
 */

export default function VideoShowcaseSection() {
  // ==== Editable content (auto-filled from analysis) ======================
  const palette = {
    bg: "#fefefe",          // dominant background
    text: "#5f6054",        // deep neutral accent (readable on light bg)
    soft: "#b1b0a9",        // soft warm gray
    line: "#dbdbda"         // hairline color
  } as const;

  // 1600x1200 (4:3) video inferred – you can change aspect below if needed
  const aspectClass = "aspect-[4/3]";

  // Provide your own file names in /public
  const videoSrc = "/original-dbd7448d4f0cdd00b4987a6ad1e63fe4.mp4"; // rename if you copy
  const poster = undefined; // e.g., "/poster.jpg"

  // Optional scene thumbnails (time in seconds)
  const sceneThumbs: { src: string; time: number; label?: string }[] = [
    { src: "/thumbs/thumb_00.png", time: 0, label: "Intro" },
    { src: "/thumbs/thumb_01.png", time: 2 },
    { src: "/thumbs/thumb_02.png", time: 4 },
    { src: "/thumbs/thumb_03.png", time: 6 },
    { src: "/thumbs/thumb_04.png", time: 8 },
    { src: "/thumbs/thumb_05.png", time: 10 },
    { src: "/thumbs/thumb_06.png", time: 12 },
    { src: "/thumbs/thumb_07.png", time: 14 },
    { src: "/thumbs/thumb_08.png", time: 16 },
    { src: "/thumbs/thumb_09.png", time: 18 },
    { src: "/thumbs/thumb_10.png", time: 20 },
  ];

  const heading = {
    overline: "Product Film",
    title: "Subtle Shine, Everyday.",
    subtitle:
      "Neutral studio tones and soft gradients emphasize the product's calm elegance.",
    ctaLabel: "Shop the Collection",
    ctaHref: "#shop",
  };

  // ==== Component state & refs ============================================
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0); // 0..1
  const [duration, setDuration] = useState(0);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  // Pause when out of view
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!videoRef.current) return;
          if (e.isIntersecting) {
            if (isPlaying) videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [isPlaying]);

  // Wire timeupdate
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => setProgress(v.currentTime / (v.duration || 1));
    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      } else if (e.key.toLowerCase() === "m") {
        toggleMute();
      } else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const v = videoRef.current;
        if (!v) return;
        const delta = e.key === "ArrowRight" ? 1.5 : -1.5;
        const nextTime = (v.currentTime || 0) + delta;
        v.currentTime = Math.max(0, Math.min(nextTime, duration || 0));
        if (v.paused && isPlaying) v.play().catch(() => {});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [duration, isPlaying]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const seekTo = (t: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(t, duration || 0));
    if (v.paused && isPlaying) v.play().catch(() => {});
  };



  const onScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    seekTo((duration || 0) * ratio);
  };

  const onScrubMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setHoverTime((duration || 0) * ratio);
  };

  const onScrubLeave = () => setHoverTime(null);

  const timeFmt = (t: number) => {
    const mm = Math.floor(t / 60);
    const ss = Math.floor(t % 60);
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  };

  // ==== UI ================================================================
  return (
    <section
      ref={containerRef}
      style={
        {
          // expose palette as CSS variables for easy theming
          "--bg": palette.bg,
          "--fg": palette.text,
          "--muted": palette.soft,
          "--line": palette.line,
        } as React.CSSProperties & Record<string, string>
      }
      className="relative w-full bg-[var(--bg)] text-[var(--fg)]"
    >
      {/* HERO */}
      <div className={`relative w-full ${aspectClass} overflow-hidden`}>
        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          poster={poster}
          playsInline
          muted={isMuted}
          autoPlay
          loop
        />

        {/* Soft gradient wash derived from palette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(241,241,241,0.2) 0%, rgba(254,254,254,0.85) 75%, rgba(254,254,254,1) 100%)",
          }}
        />

        {/* Headline content */}
        <div className="absolute inset-0 flex items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full p-6 md:p-10 lg:p-14"
          >
            <div className="max-w-6xl mx-auto">
              <p className="text-xs tracking-[0.22em] uppercase text-[var(--muted)] mb-2">
                {heading.overline}
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                {heading.title}
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-[var(--muted)]">
                {heading.subtitle}
              </p>
              <div className="mt-5">
                <a
                  href={heading.ctaHref}
                  className="inline-flex items-center gap-2 rounded-2xl border border-[var(--line)] bg-white/80 px-4 py-2 backdrop-blur-sm transition hover:bg-white"
                >
                  <span className="text-sm font-medium">{heading.ctaLabel}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/>
                    <path d="M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls bar (floating) */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 pb-2">
          <div className="pointer-events-auto mx-auto w-[min(94%,1120px)] rounded-2xl border border-[var(--line)] bg-white/80 shadow-sm backdrop-blur-md">
            <div className="px-4 py-2">
              <div
                className="group relative h-1.5 w-full cursor-pointer rounded-full bg-[var(--line)]"
                onMouseMove={onScrubMove}
                onMouseLeave={onScrubLeave}
                onClick={onScrub}
              >
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-[var(--fg)]"
                  style={{ width: `${progress * 100}%` }}
                />
                {hoverTime !== null && (
                  <div
                    className="absolute -top-8 -translate-x-1/2 select-none whitespace-nowrap rounded-md border border-[var(--line)] bg-white/95 px-2 py-1 text-[10px] shadow-sm"
                    style={{ left: `${((hoverTime || 0) / (duration || 1)) * 100}%` }}
                  >
                    {timeFmt(hoverTime || 0)}
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-[var(--muted)]">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white/80 px-2.5 py-1.5 hover:bg-white"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="4" width="4" height="16"/>
                        <rect x="14" y="4" width="4" height="16"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                      </svg>
                    )}
                    <span className="hidden sm:inline">{isPlaying ? "Pause" : "Play"}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white/80 px-2.5 py-1.5 hover:bg-white"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 9v6h4l5 5V4l-5 5H9z"/>
                        <line x1="3" y1="3" x2="21" y2="21"/>
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                        <path d="M19 5a7 7 0 0 1 0 14"/>
                        <path d="M15 8a4 4 0 0 1 0 8"/>
                      </svg>
                    )}
                    <span className="hidden sm:inline">{isMuted ? "Unmute" : "Mute"}</span>
                  </button>

                  <span className="tabular-nums">{timeFmt((videoRef.current?.currentTime) || 0)} / {timeFmt(duration || 0)}</span>
                </div>
                <span>Press <kbd className="rounded border border-[var(--line)] bg-white px-1">Space</kbd> to play/pause</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCENE STRIP */}
      <div className="mx-auto w-[min(94%,1120px)] py-6">
        <div className="flex items-center justify-between py-2">
          <h3 className="text-base font-medium">Scenes</h3>
          <span className="text-xs text-[var(--muted)]">Click a thumbnail to jump</span>
        </div>
        <div className="no-scrollbar relative -mx-2 flex snap-x snap-mandatory gap-3 overflow-x-auto px-2 pb-2">
          {sceneThumbs.map((t, i) => (
            <button
              key={i}
              className="group relative h-28 w-44 shrink-0 snap-start overflow-hidden rounded-xl border border-[var(--line)] bg-white shadow-sm"
              onClick={() => seekTo(t.time)}
              aria-label={`Jump to ${timeFmt(t.time)}`}
            >
              <Image
                src={t.src}
                alt={`Scene ${i + 1}`}
                fill
                sizes="176px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-1 left-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] text-[var(--fg)] shadow">
                {timeFmt(t.time)}
              </div>
              {t.label && (
                <div className="pointer-events-none absolute left-1 top-1 rounded bg-white/90 px-1.5 py-0.5 text-[10px] text-[var(--fg)] shadow">
                  {t.label}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* DETAIL GRID (optional marketing copy) */}
      <div className="mx-auto w-[min(94%,1120px)] py-10 border-t border-[var(--line)]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Studio Neutral",
              body: "A calm, high-key palette (#fefefe / #b1b0a9) keeps the focus on form and finish.",
            },
            {
              title: "Soft Contrast",
              body: "Fine lines and gentle shadows create depth without overpowering the scene.",
            },
            {
              title: "Everyday Elegance",
              body: "Designed to feel subtle yet premium – perfect for contemporary product pages.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="rounded-2xl border border-[var(--line)] bg-white p-6 shadow-sm"
            >
              <h4 className="text-sm font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-[var(--muted)]">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
