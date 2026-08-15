"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaUsers, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import type { RouteDefinition } from "@/data/routes";
import type { Locale } from "@/i18n/config";

interface Props {
  route: RouteDefinition;
  locale: Locale;
  startingPrice: string | undefined;
  from: string;
  quote: string;
}

const EASE = "0.42s cubic-bezier(0.4, 0, 0.2, 1)";

export default function RouteCard({ route, locale, startingPrice, from, quote }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef   = useRef<HTMLDivElement>(null);
  const dividerRef  = useRef<HTMLDivElement>(null);
  const activeRef   = useRef(false); // true while mouse is inside

  /* ── Direct DOM helpers (no React state → no re-render lag) ── */
  const applyClip = (pct: number, animated: boolean) => {
    const el = revealRef.current;
    if (!el) return;
    el.style.transition = animated ? `clip-path ${EASE}` : "none";
    el.style.clipPath    = `inset(0 ${100 - pct}% 0 0)`;
  };

  const applyDivider = (pct: number, animated: boolean) => {
    const el = dividerRef.current;
    if (!el) return;
    el.style.transition = animated ? `left ${EASE}, opacity ${EASE}` : "none";
    el.style.left       = `${pct}%`;
    el.style.opacity    = pct > 2 ? "1" : "0";
  };

  /* ── Event handlers ── */
  const handleMouseEnter = useCallback(() => {
    if (!route.image2) return;
    activeRef.current = true;
    applyClip(50, true);      // slide origin image in from left → 50/50
    applyDivider(50, true);   // show divider at center
  }, [route.image2]);          // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!route.image2 || !activeRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct  = Math.min(Math.max(((e.clientX - rect.left) / rect.width) * 100, 5), 95);
    applyClip(pct, false);    // instant — follows cursor
    applyDivider(pct, false); // instant — follows cursor
  }, [route.image2]);          // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseLeave = useCallback(() => {
    if (!route.image2) return;
    activeRef.current = false;
    applyClip(0, true);       // slide origin image back to left
    applyDivider(0, true);    // hide divider
  }, [route.image2]);          // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={containerRef}
      className="relative h-80 md:h-[22rem] rounded-3xl overflow-hidden shadow-md"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Images ── */}
      {route.image2 ? (
        <>
          {/* Base: destination — always full width */}
          <Image
            src={route.image2}
            alt={route.h1[locale] + " – destino"}
            fill
            className="object-cover"
            draggable={false}
            priority
          />

          {/* Reveal: origin — clipped from right, slides in from left */}
          <div
            ref={revealRef}
            className="absolute inset-0"
            style={{ clipPath: "inset(0 100% 0 0)" }} /* start fully hidden */
          >
            <Image
              src={route.image!}
              alt={route.h1[locale] + " – origen"}
              fill
              className="object-cover"
              draggable={false}
            />
          </div>

          {/* Divider line + handle — always in DOM, opacity-controlled */}
          <div
            ref={dividerRef}
            className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
            style={{ left: "50%", opacity: 0, transform: "translateX(-50%)" }}
          >
            <div className="w-[2px] h-full bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
            <div
              className="absolute w-9 h-9 rounded-full bg-white flex items-center justify-center"
              style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.4)" }}
            >
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M5 5L1 2.5M1 2.5L5 0M1 2.5H8" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 5L15 7.5M15 7.5L11 10M15 7.5H8" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </>
      ) : route.image ? (
        <Image
          src={route.image}
          alt={route.h1[locale]}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      ) : null}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Price badge */}
      <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-4 py-2 rounded-full z-10 shadow-sm pointer-events-none">
        {startingPrice ? `${from} ${startingPrice}` : quote}
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10 pointer-events-none">
        <h2 className="font-bold text-xl mb-2 font-sans leading-tight">{route.h1[locale]}</h2>
        <div className="flex items-center text-xs text-white/90 gap-3 mb-3">
          <span className="flex items-center gap-1.5"><FaUsers className="text-white/70" /> {route.idealFor[locale]}</span>
          <span className="text-white/30">|</span>
          <span className="flex items-center gap-1.5"><FaClock className="text-white/70" /> {route.duration[locale]}</span>
        </div>
        <div className="flex items-center justify-between text-xs text-white/80">
          <span className="flex items-center gap-1.5"><FaMapMarkerAlt className="text-red-400" /> Costa Caribe</span>
          <span className="flex items-center gap-1 text-brand-gold font-semibold"><FaStar /> 4.8</span>
        </div>
      </div>

      {/* Navigation link */}
      <Link href={`/${locale}/${route.slug}`} className="absolute inset-0 z-30">
        <span className="sr-only">{route.h1[locale]}</span>
      </Link>
    </div>
  );
}
