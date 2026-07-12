"use client";

import * as React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export function Hero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".hero-image", {
        scale: 1.05,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] min-h-[600px] w-full bg-brand-onyx overflow-hidden">
      <div className="absolute inset-0 w-full h-full hero-image">
        <Image
          src="/photos/WhatsApp Image 2026-07-08 at 3.55.35 PM.jpeg"
          alt="GLAMMYN Hero"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-onyx/80 via-transparent to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-end pb-24">
        <div ref={textRef} className="max-w-2xl text-white">
          <p className="hero-text font-body text-xs md:text-sm font-medium tracking-[2px] uppercase text-brand-gold mb-6">
            Timeless Elegance
          </p>
          <h1 className="hero-text font-display text-5xl md:text-7xl font-light leading-[1.1] mb-8">
            Understated Luxury for the Modern Woman
          </h1>
          <div className="hero-text">
            <Button variant="goldGradient" size="lg" className="tracking-widest">
              Discover the Collection
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
