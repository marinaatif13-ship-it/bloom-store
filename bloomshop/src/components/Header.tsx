'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Shop', href: '#collection' },
  { label: 'Occasions', href: '#occasions' },
  { label: 'About', href: '#why-bloomshop' },
  { label: 'Reviews', href: '#testimonials' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <AppLogo size={36} />
              <span className="font-bold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
                BloomShop
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-secondary/60 backdrop-blur-sm rounded-full px-2 py-1 border border-border">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-200"
                >
                  {link?.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                aria-label="Shopping cart"
                className="relative p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon name="ShoppingBagIcon" size={20} />
                <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
              </button>
              <a
                href="#collection"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Order Now
                <Icon name="ArrowRightIcon" size={16} />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-foreground"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <Icon name="XMarkIcon" size={24} />
              ) : (
                <Icon name="Bars3Icon" size={24} />
              )}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col pt-20 px-6"
          onClick={handleNavClick}
        >
          <nav className="flex flex-col gap-2">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                className="py-4 text-xl font-semibold text-foreground border-b border-border hover:text-primary transition-colors"
              >
                {link?.label}
              </a>
            ))}
          </nav>
          <a
            href="#collection"
            onClick={handleNavClick}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 rounded-full text-base font-semibold"
          >
            Order Now
            <Icon name="ArrowRightIcon" size={18} />
          </a>
        </div>
      )}
    </>
  );
}