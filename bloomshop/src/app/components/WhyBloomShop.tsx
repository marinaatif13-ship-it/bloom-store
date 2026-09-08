'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const promises = [
{
  icon: 'TruckIcon' as const,
  title: 'Same-Day Delivery',
  desc: 'Order before 2pm for same-day delivery in your area. Tracked door-to-door.'
},
{
  icon: 'SparklesIcon' as const,
  title: 'Farm-Direct Freshness',
  desc: 'Flowers cut within 24 hours and shipped directly from partner farms.'
},
{
  icon: 'HeartIcon' as const,
  title: 'Happiness Guarantee',
  desc: "Not completely delighted? We\'ll replace or refund — no questions asked."
},
{
  icon: 'GiftIcon' as const,
  title: 'Free Gift Wrapping',
  desc: 'Every order arrives beautifully wrapped with a handwritten note option.'
}];


const stats = [
{ value: '50k+', label: 'Bouquets delivered' },
{ value: '98%', label: 'On-time delivery' },
{ value: '4.9★', label: 'Customer rating' },
{ value: '12', label: 'Partner farms' }];


export default function WhyBloomShop() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
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
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-bloomshop"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #F5EDE6 0%, #FAF7F4 60%, #F0E8E0 100%)' }}>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 md:gap-14 items-center">

          {/* Left — image (2/5 width) */}
          <div className="lg:col-span-2 scroll-reveal relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(196,82,106,0.15) 0%, rgba(232,168,124,0.12) 100%)',
                filter: 'blur(20px)',
                transform: 'scale(0.93) translateY(10px)'
              }} />

            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-xl">
              <AppImage
                src="https://images.unsplash.com/photo-1712560631952-cb35d4a3872a"
                alt="Florist arranging pastel pink roses and greenery on bright white table in sunlit studio"
                width={560}
                height={680}
                className="w-full h-[380px] sm:h-[480px] object-cover" />

              {/* Stats overlay card */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-border p-4 grid grid-cols-2 gap-3">
                  {stats.map((stat) =>
                  <div key={stat.label} className="text-center">
                      <div className="text-xl font-extrabold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right — content (3/5 width) */}
          <div className="lg:col-span-3 flex flex-col gap-8 justify-between h-full">
            <div className="scroll-reveal scroll-reveal-delay-1">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                <Icon name="CheckCircleIcon" size={14} className="text-primary" />
                Why BloomShop
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Freshness you can{' '}
                <span className="text-primary">feel</span>
                {' '}the moment your door opens.
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-lg">
                We skip the middleman. Our flowers travel directly from family-run farms to your hands — staying fresher, longer, and more vibrant than anything from a grocery store.
              </p>
            </div>

            {/* Promise grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {promises.map((p, i) =>
              <div
                key={p.title}
                className={`scroll-reveal scroll-reveal-delay-${i + 2} bg-white rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 group`}>

                  <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'rgba(196,82,106,0.1)' }}>

                    <Icon name={p.icon} size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-1">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              )}
            </div>

            <div className="scroll-reveal scroll-reveal-delay-5">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-sm">

                Shop Our Collection
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}