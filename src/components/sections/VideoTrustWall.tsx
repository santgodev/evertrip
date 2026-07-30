"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const videos = [
  {
    id: "v1",
    title: "Welcome / who we are",
    description: "When you land, you'll know exactly who's picking you up.",
    thumbnail: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80",
  },
  {
    id: "v2",
    title: "How private transfers work",
    description: "Direct, private, door-to-door. See the van inside.",
    thumbnail: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
  },
  {
    id: "v3",
    title: "Airport pickup & booking",
    description: "Flight tracking and easy WhatsApp communication.",
    thumbnail: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80",
  },
  {
    id: "v4",
    title: "Why private transportation",
    description: "Safety, comfort, and zero stress with luggage.",
    thumbnail: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&q=80",
  },
];

export default function VideoTrustWall() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-bone">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-navy mb-4">Meet your local travel support before you book</h2>
          <p className="text-brand-carbon/80 text-lg">
            We are real people behind the wheel. Watch our short videos to see why travelers trust us across Colombia&apos;s Caribbean coast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((vid) => (
            <div key={vid.id} className="group cursor-pointer flex flex-col gap-4">
              <div 
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-brand-navy flex items-center justify-center"
                onClick={() => setActiveVideo(vid.id)}
              >
                {/* Facade pattern: Show image until clicked */}
                <Image
                  src={vid.thumbnail}
                  alt={vid.title}
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-brand-navy/10 transition-colors"></div>
                
                {/* Play Button */}
                <div className="absolute z-10 w-14 h-14 bg-brand-gold/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <FaPlay className="ml-1" />
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-xl text-brand-navy mb-2">{vid.title}</h3>
                <p className="text-sm text-brand-carbon/70">{vid.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
