'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function HeroSection() {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = badgeRef?.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
        'linear-gradient(135deg, #FAF7F4 0%, #F5EDE6 40%, #FAF7F4 100%)'
      }}>

      {/* Atmospheric blobs */}
      <div
        className="absolute top-20 left-8 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,82,106,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }} />

      <div
        className="absolute bottom-20 right-16 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,168,124,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)'
        }} />

      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,82,106,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left — Text content */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Eyebrow badge */}
            <div className="animate-slide-in-blur-1">
              <span className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Free delivery on orders over $45
              </span>
            </div>

            {/* Headline */}
            <div className="animate-slide-in-blur-2">
              <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight leading-[1.0] text-foreground">
                Flowers that{' '}
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, #C4526A 0%, #E8A87C 60%, #C4526A 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>

                  say it all.
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="animate-slide-in-blur-3 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              Farm-fresh bouquets curated by expert florists. Same-day delivery to your door — for every moment that matters.
            </p>

            {/* CTAs */}
            <div className="animate-slide-in-blur-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#collection"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg">

                Shop Bouquets
                <Icon
                  name="ArrowRightIcon"
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-200" />

              </a>
              <a
                href="#occasions"
                className="inline-flex items-center justify-center gap-2 bg-white border border-border text-foreground px-7 py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-secondary transition-all duration-200">

                Browse by Occasion
              </a>
            </div>

            {/* Trust micro-stats */}
            <div className="animate-slide-in-blur-4 flex items-center gap-6 pt-2">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">50k+</span>
                <span className="text-xs text-muted-foreground">Happy customers</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">4.9★</span>
                <span className="text-xs text-muted-foreground">Average rating</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">Same day</span>
                <span className="text-xs text-muted-foreground">Delivery available</span>
              </div>
            </div>
          </div>

          {/* Right — Cinematic photo */}
          <div className="relative animate-scale-in-blur">
            {/* Atmospheric glow behind image */}
            <div
              className="absolute inset-0 rounded-3xl transition-all duration-700"
              style={{
                background: 'linear-gradient(135deg, rgba(196,82,106,0.18) 0%, rgba(232,168,124,0.18) 100%)',
                filter: 'blur(24px)',
                transform: 'scale(0.95) translateY(8px)'
              }} />


            {/* Main image */}
            <div className="relative group rounded-3xl overflow-hidden border border-border/50 shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_125a053a1-1772160906200.png"
                alt="Lush pink and white peony bouquet in warm sunlit studio, soft cream background, dreamy editorial lighting"
                width={700}
                height={800}
                priority
                className="w-full h-[420px] sm:h-[520px] md:h-[600px] object-cover transition-all duration-700 group-hover:scale-105" />

              {/* Subtle scrim at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating badge — Farm Fresh */}
            <div
              ref={badgeRef}
              className="absolute -bottom-5 -left-4 sm:-left-8 bg-white rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3 animate-float"
              style={{
                opacity: 0,
                transform: 'translateY(12px)',
                transition: 'opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)'
              }}>

              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(196,82,106,0.1)' }}>

                <Icon name="SparklesIcon" size={22} className="text-primary" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Farm Direct</div>
                <div className="text-xs text-muted-foreground">Cut within 24hrs</div>
              </div>
            </div>

            {/* Floating badge — Rating */}
            <div
              className="absolute -top-4 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl border border-border p-3 flex items-center gap-2 animate-float"
              style={{ animationDelay: '1.5s' }}>

              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5]?.map((s) =>
                <Icon key={s} name="StarIcon" size={12} variant="solid" className="text-accent" />
                )}
              </div>
              <span className="text-xs font-semibold text-foreground">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}