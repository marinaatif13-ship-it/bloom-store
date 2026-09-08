'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const perks = [
'Fresh bouquet every week or bi-weekly',
'Up to 25% off regular prices',
'Priority same-day delivery',
'Free handwritten note every time',
'Skip or cancel anytime — no lock-in'];


export default function SubscriptionCTA() {
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
    <section
      ref={sectionRef}
      className="py-16 md:py-20 px-4 sm:px-6 bg-background">

      <div className="max-w-7xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl border border-border shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #C4526A 0%, #D4607A 40%, #E8A87C 100%)'
          }}>

          {/* Atmospheric blobs inside banner */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
              filter: 'blur(30px)',
              transform: 'translate(30%, -30%)'
            }} />

          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
              transform: 'translate(-30%, 30%)'
            }} />


          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-8 sm:p-12 md:p-14">

            {/* Left — content */}
            <div className="flex flex-col gap-6 scroll-reveal">
              <div>
                <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                  <Icon name="SparklesIcon" size={12} />
                  Weekly Subscription
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Fresh flowers,
                  <span className="block opacity-90">every single week.</span>
                </h2>
                <p className="mt-3 text-white/80 text-base leading-relaxed max-w-sm">
                  Never run out of blooms. Subscribe and save — we curate a fresh seasonal bouquet just for you.
                </p>
              </div>

              <ul className="flex flex-col gap-2.5">
                {perks?.map((perk) =>
                <li key={perk} className="flex items-center gap-3 text-sm text-white/90">
                    <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckIcon" size={12} className="text-white" />
                    </div>
                    {perk}
                  </li>
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-4 rounded-full font-bold text-sm hover:bg-white/95 transition-all duration-200 shadow-md hover:shadow-lg">
                  Start My Subscription
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <Icon name="LockClosedIcon" size={14} className="text-white/60" />
                  No commitment. Cancel anytime.
                </div>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">$29</div>
                  <div className="text-xs text-white/70">per bouquet</div>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">Save 25%</div>
                  <div className="text-xs text-white/70">vs. single orders</div>
                </div>
                <div className="h-8 w-px bg-white/30" />
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-white">2k+</div>
                  <div className="text-xs text-white/70">active subscribers</div>
                </div>
              </div>
            </div>

            {/* Right — image */}
            <div className="scroll-reveal scroll-reveal-delay-2 relative hidden md:block">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  filter: 'blur(20px)',
                  transform: 'scale(0.9) translateY(10px)'
                }} />

              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <AppImage
                  src="https://images.unsplash.com/photo-1659606572484-4c339076f320"
                  alt="Curated seasonal bouquet subscription box with mixed blooms including roses, ranunculus and eucalyptus, wrapped in tissue paper"
                  width={560}
                  height={420}
                  className="w-full h-72 md:h-80 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              {/* Floating pill */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-border px-4 py-2.5 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-foreground">Ships this Friday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}