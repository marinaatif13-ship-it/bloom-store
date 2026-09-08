'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const FILTERS = ['All', 'Roses', 'Seasonal', 'Tropical', 'Wildflower'];

/*
BENTO GRID AUDIT
Array has 5 cards: [GrandBouquet(hero), RosesCard, SunflowerCard, OrchidCard, SeasonalCard]

Desktop grid-cols-4:
Row 1: [col-1+2: GrandBouquet cs-2 rs-2] [col-3: RosesCard cs-1] [col-4: SunflowerCard cs-1]
Row 2: [col-1+2: GrandBouquet(continued)] [col-3: OrchidCard cs-1] [col-4: SeasonalCard cs-1]

Placed 5/5 cards ✓

Mobile grid-cols-1: all cards full width ✓
Tablet grid-cols-2: GrandBouquet col-span-2, others col-span-1 ✓
*/

const products = [
{
  id: 1,
  name: 'Grand Petal Bouquet',
  price: '$68',
  tag: 'Best Seller',
  category: 'Seasonal',
  image: "https://images.unsplash.com/photo-1727013988543-a2449224b7f0",
  alt: 'Grand arrangement of pink peonies and white roses on cream background, editorial soft lighting',
  hero: true
},
{
  id: 2,
  name: 'Crimson Rose Dozen',
  price: '$48',
  tag: 'Classic',
  category: 'Roses',
  image: "https://images.unsplash.com/photo-1709881758135-cd2dea72dc4b",
  alt: 'Dozen deep red roses tightly wrapped in kraft paper, warm studio lighting',
  hero: false
},
{
  id: 3,
  name: 'Sunshine Sunflowers',
  price: '$38',
  tag: 'Cheerful',
  category: 'Wildflower',
  image: "https://images.unsplash.com/photo-1722929916846-1792fdb18adb",
  alt: 'Bright yellow sunflowers in rustic vase on wooden table, natural daylight',
  hero: false
},
{
  id: 4,
  name: 'White Orchid Stem',
  price: '$55',
  tag: 'Elegant',
  category: 'Tropical',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_105b14928-1772835906155.png",
  alt: 'Single white phalaenopsis orchid stem in minimalist white pot, bright airy background',
  hero: false
},
{
  id: 5,
  name: 'Spring Garden Mix',
  price: '$42',
  tag: 'Seasonal',
  category: 'Seasonal',
  image: "https://images.unsplash.com/photo-1629322256214-5eb0fd4302a6",
  alt: 'Mixed spring wildflower bouquet with lavender tulips and white daisies on light pink background',
  hero: false
}];


export default function FeaturedCollection() {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filtered = activeFilter === 'All' ?
  products :
  products?.filter((p) => p?.category === activeFilter);

  // Ensure hero card always shows if present in filtered
  const heroCard = filtered?.find((p) => p?.hero);
  const regularCards = filtered?.filter((p) => !p?.hero);

  return (
    <section id="collection" ref={sectionRef} className="py-16 md:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="scroll-reveal">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              <Icon name="SparklesIcon" size={14} className="text-primary" />
              Fresh This Week
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Curated Arrangements
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="scroll-reveal scroll-reveal-delay-2 flex items-center gap-1.5 bg-secondary rounded-xl p-1.5 border border-border overflow-x-auto">
            {FILTERS?.map((f) =>
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
              activeFilter === f ?
              'bg-white text-foreground shadow-sm' :
              'text-muted-foreground hover:text-foreground hover:bg-white/50'}`
              }>

                {f}
              </button>
            )}
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">

          {/* Hero card — col-span-2 row-span-2 */}
          {heroCard && (
          /* BENTO col-1+2: GrandBouquet cs-2 rs-2 */
          <div className="scroll-reveal md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[360px] md:min-h-[480px]">
              <AppImage
              src={heroCard?.image}
              alt={heroCard?.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter-none"
              style={{ filter: 'grayscale(8%)' }} />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {heroCard?.tag}
                </span>
              </div>
              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{heroCard?.name}</h3>
                    <p className="text-white/80 text-sm mt-1">Most gifted this season</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-2xl font-extrabold text-white">{heroCard?.price}</span>
                    <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200 shadow-md">
                      <Icon name="ShoppingBagIcon" size={18} className="text-foreground group-hover:text-primary-foreground" />
                    </button>
                  </div>
                </div>
              </div>
            </div>)
          }

          {/* Regular cards */}
          {regularCards?.map((product, idx) => (
          /* BENTO col-3 or col-4: regular cards cs-1 */
          <div
            key={product?.id}
            className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 2, 5)} group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer flex flex-col`}>

              <div className="overflow-hidden h-44 sm:h-52">
                <AppImage
                src={product?.image}
                alt={product?.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                style={{ filter: 'grayscale(5%)' }} />

              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-1">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {product?.tag}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-sm mt-1">{product?.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="text-lg font-extrabold text-foreground">{product?.price}</span>
                  <button className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <Icon name="PlusIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>)
          )}

          {/* If filter returns no hero card, show all regular */}
          {!heroCard && regularCards?.length === 0 && filtered?.map((product, idx) =>
          <div
            key={product?.id}
            className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 5)} group relative rounded-2xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 cursor-pointer flex flex-col`}>

              <div className="overflow-hidden h-44 sm:h-52">
                <AppImage
                src={product?.image}
                alt={product?.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />

              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full w-fit">{product?.tag}</span>
                <h3 className="font-bold text-foreground text-sm mt-2">{product?.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span className="text-lg font-extrabold text-foreground">{product?.price}</span>
                  <button className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                    <Icon name="PlusIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* View all */}
        <div className="mt-10 text-center scroll-reveal">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors border-b border-primary/30 pb-0.5">

            View full collection
            <Icon name="ArrowRightIcon" size={16} />
          </a>
        </div>
      </div>
    </section>);

}