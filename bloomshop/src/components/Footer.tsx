import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + links */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#" className="flex items-center gap-2">
              <AppLogo size={28} />
              <span className="font-bold text-base tracking-tight text-foreground">BloomShop</span>
            </a>
            <nav className="flex items-center gap-4 text-sm font-medium text-muted-foreground">
              <a href="#collection" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Shop</a>
              <a href="#occasions" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Occasions</a>
              <a href="#why-bloomshop" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">About</a>
              <a href="#" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors min-h-[44px] flex items-center">Terms</a>
            </nav>
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Icon name="HeartIcon" size={18} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="p-2 text-muted-foreground hover:text-primary transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Icon name="StarIcon" size={18} />
            </a>
            <span className="text-sm text-muted-foreground">© 2026 BloomShop</span>
          </div>
        </div>
      </div>
    </footer>
  );
}