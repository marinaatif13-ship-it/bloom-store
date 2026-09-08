import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import FeaturedCollection from '@/app/components/FeaturedCollection';
import WhyBloomShop from '@/app/components/WhyBloomShop';
import OccasionsSection from '@/app/components/OccasionsSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import SubscriptionCTA from '@/app/components/SubscriptionCTA';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedCollection />
      <WhyBloomShop />
      <OccasionsSection />
      <TestimonialsSection />
      <SubscriptionCTA />
      <Footer />
    </main>
  );
}