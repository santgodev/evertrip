"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface SplitImageCardProps {
  /** Left image — origin city (revealed on hover) */
  src1: string;
  /** Right image — destination city (always visible as base) */
  src2: string;
  alt: string;
}

export default function SplitImageCard({ src1, src2, alt }: SplitImageCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // splitPct = 0 means src1 fully hidden; 100 = fully visible
  const [splitPct, setSplitPct] = useState(0);
  const [hovered, setHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95);
      setSplitPct(pct);
    });
  }, []);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setHovered(true);
    // Initialise at cursor position immediately so there's no jump
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setSplitPct(Math.min(Math.max((x / rect.width) * 100, 5), 95));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    setSplitPct(0); // slide origin image back out
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base layer — destination image (always full width) */}
      <Image
        src={src2}
        alt={alt + " – destino"}
        fill
        className="object-cover"
        draggable={false}
        priority
      />

      {/* Reveal layer — origin image, clipped to [splitPct]% from left */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          width: `${splitPct}%`,
          transition: hovered ? "none" : "width 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Inner div keeps the image at full card width so object-cover works correctly */}
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: containerRef.current?.offsetWidth ?? 400 }}
        >
          <Image
            src={src1}
            alt={alt + " – origen"}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>

      {/* Divider line + handle — only visible when hovered */}
      {hovered && (
        <div
          className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${splitPct}%`, transform: "translateX(-50%)" }}
        >
          {/* Line */}
          <div className="w-[2px] h-full bg-white/80 shadow-[0_0_8px_rgba(0,0,0,0.5)]" />
          {/* Circle handle */}
          <div
            className="absolute w-8 h-8 rounded-full bg-white flex items-center justify-center"
            style={{ boxShadow: "0 2px 14px rgba(0,0,0,0.4)" }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M4 5L1 2.5M1 2.5L4 0M1 2.5H6" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 5L13 7.5M13 7.5L10 10M13 7.5H8" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
