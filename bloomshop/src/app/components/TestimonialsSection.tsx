'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const testimonials = [
  {
    quote:
      "The peonies arrived looking like they were just cut from the garden. My wife cried happy tears. BloomShop made our anniversary unforgettable.",
    name: 'Marcus T.',
    location: 'Chicago, IL',
    rating: 5,
    metric: 'Same-day delivery',
    metricSub: 'Anniversary order',
  },
  {
    quote:
      "I've ordered three times now and every bouquet is more beautiful than the last. The gift wrapping alone is worth it.",
    name: 'Priya K.',
    location: 'Austin, TX',
    rating: 5,
  },
  {
    quote:
      "Sent sympathy flowers to a friend in Seattle. She called me immediately — said they were the most beautiful flowers she'd ever received.",
    name: 'Danielle R.',
    location: 'Portland, OR',
    rating: 5,
  },
];

export default function TestimonialsSection() {
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
      id="testimonials"
      ref={sectionRef}
      className="py-16 md:py-20 px-4 sm:px-6"
      style={{ background: 'linear-gradient(180deg, #FAF7F4 0%, #F5EDE6 100%)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 scroll-reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Real Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            What our customers{' '}
            <span className="text-primary">experience</span>
          </h2>
        </div>

        {/* Stacked featured testimonial + side cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">

          {/* Featured stacked testimonial (T1 pattern) */}
          <div className="lg:col-span-2 relative group scroll-reveal scroll-reveal-delay-1">
            {/* Back layers */}
            <div
              className="pointer-events-none absolute inset-x-6 -top-3 h-full rounded-3xl border border-border bg-secondary/60"
              style={{ opacity: 0.5, transform: 'scale(0.97) translateY(-6px)' }}
            />
            <div
              className="pointer-events-none absolute inset-x-3 -top-1.5 h-full rounded-3xl border border-border bg-secondary/80"
              style={{ opacity: 0.75, transform: 'scale(0.99) translateY(-3px)' }}
            />

            {/* Front card */}
            <div className="relative z-10 bg-white border border-border rounded-3xl shadow-md p-7 sm:p-10">
              {/* Quote mark */}
              <div className="text-primary/20 mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.017 21L5.017 18C5.017 16.895 5.912 16 7.017 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.017C5.465 8 5.017 8.448 5.017 9V11C5.017 11.552 4.569 12 4.017 12H3.017V5H13.017V15C13.017 18.314 10.331 21 7.017 21H5.017Z" />
                </svg>
              </div>

              <p className="text-xl sm:text-2xl font-medium text-foreground leading-relaxed">
                &ldquo;{testimonials?.[0]?.quote}&rdquo;
              </p>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="h-11 w-11 rounded-full flex items-center justify-center font-bold text-primary-foreground text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C4526A, #E8A87C)' }}
                  >
                    {testimonials?.[0]?.name?.[0]}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{testimonials?.[0]?.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonials?.[0]?.location}</div>
                  </div>
                </div>

                {/* Metrics */}
                {testimonials?.[0]?.metric && (
                  <div className="bg-secondary rounded-2xl px-5 py-3 text-center border border-border">
                    <div className="text-base font-extrabold text-primary">{testimonials?.[0]?.metric}</div>
                    <div className="text-xs text-muted-foreground">{testimonials?.[0]?.metricSub}</div>
                  </div>
                )}
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonials?.[0]?.rating })?.map((_, i) => (
                  <Icon key={i} name="StarIcon" size={16} variant="solid" className="text-accent" />
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {testimonials?.slice(1)?.map((t, idx) => (
              <div
                key={t?.name}
                className={`scroll-reveal scroll-reveal-delay-${idx + 3} bg-white border border-border rounded-2xl shadow-sm p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300`}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t?.rating })?.map((_, i) => (
                    <Icon key={i} name="StarIcon" size={12} variant="solid" className="text-accent" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">&ldquo;{t?.quote}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center font-bold text-primary-foreground text-xs flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C4526A, #E8A87C)' }}
                  >
                    {t?.name?.[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">{t?.name}</div>
                    <div className="text-xs text-muted-foreground">{t?.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}