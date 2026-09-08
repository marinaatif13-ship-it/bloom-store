'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const occasions = [
{
  label: 'Birthday',
  emoji: '🎂',
  image: "https://images.unsplash.com/photo-1729298134763-22963844a27e",
  alt: 'Vibrant pink and yellow birthday bouquet with colorful ribbons on pastel background, bright joyful lighting',
  color: '#F9D8E0'
},
{
  label: 'Anniversary',
  emoji: '💕',
  image: "https://images.unsplash.com/photo-1719897113248-fb70cefb9f1b",
  alt: 'Romantic deep red roses with baby breath in elegant white box, candlelit warm atmosphere',
  color: '#F9E0D8'
},
{
  label: 'Sympathy',
  emoji: '🕊️',
  image: "https://images.unsplash.com/photo-1599889279555-b87bf9059bdc",
  alt: 'Gentle white lilies and soft lavender arrangement in muted grey-green vase, quiet peaceful light',
  color: '#E8EDF0'
},
{
  label: 'Wedding',
  emoji: '💍',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4e142f2-1772259180429.png",
  alt: 'Bridal bouquet of ivory garden roses and eucalyptus on white lace fabric, soft dreamy natural light',
  color: '#F5F0E8'
},
{
  label: 'Just Because',
  emoji: '🌸',
  image: "https://images.unsplash.com/photo-1721946432578-87d43c1469fd",
  alt: 'Cheerful mixed wildflower bouquet with sunflowers and daisies wrapped in brown kraft paper',
  color: '#FFF3D8'
}];


export default function OccasionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.scroll-reveal').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="occasions" ref={sectionRef} className="py-16 md:py-20 px-4 sm:px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 scroll-reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Every Moment Deserves Flowers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Shop by Occasion
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-md mx-auto">
            Find the perfect arrangement for whatever life is celebrating.
          </p>
        </div>

        {/* Occasion cards — horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:overflow-visible">
          {occasions?.map((occ, idx) =>
          <div
            key={occ?.label}
            className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 5)} group flex-shrink-0 w-44 sm:w-auto cursor-pointer`}>

              <div
              className="relative rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              style={{ background: occ?.color }}>

                <div className="overflow-hidden h-44 sm:h-52">
                  <AppImage
                  src={occ?.image}
                  alt={occ?.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-107"
                  style={{ filter: 'grayscale(5%)' }} />

                </div>
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-base">{occ?.emoji}</span>
                    <span className="text-sm font-bold text-white">{occ?.label}</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground text-center font-medium">
                Shop {occ?.label} →
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}