import React, { useState } from 'react';
import Gallery from '../components/Gallery';
import { Sparkles, MessageCircle } from 'lucide-react';
import { InstagramIcon } from '../components/SocialIcons';

export const GalleryPage = () => {
  return (
    <div className="pt-24 pb-20 bg-burgundy-dark min-h-screen text-ivory text-left">
      {/* Editorial Header */}
      <div className="py-16 px-4 sm:px-6 lg:px-12 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.25) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <InstagramIcon className="w-4 h-4 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-semibold">
              The Royal Lookbook
            </span>
            <InstagramIcon className="w-4 h-4 text-gold-metallic" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider mb-4">
            Jewellery <span className="gold-gradient-text italic font-serif">Lookbook</span>
          </h1>

          <p className="text-ivory-soft/80 text-sm sm:text-base font-light max-w-xl mx-auto">
            Browse our visual archives of South Indian brides, temple ornamentation, and close-up craftsmanship. Click any photograph to enquire directly on WhatsApp.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Gallery />

        {/* WhatsApp Consultation Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-burgundy-surface border border-gold-metallic/40 text-center max-w-3xl mx-auto space-y-4">
          <Sparkles className="w-8 h-8 text-gold-metallic mx-auto" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory uppercase tracking-wide">
            Looking for a Specific Traditional Design?
          </h3>
          <p className="text-xs sm:text-sm text-ivory-soft/80 max-w-md mx-auto font-light">
            Share your reference photo or wedding saree colour with our jewellery stylists on WhatsApp. We will match or custom-plate the ideal ornaments for you.
          </p>
          <a
            href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20have%20a%20jewellery%20design%20reference%20photo%20I%20would%20like%20to%20share."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider shadow-gold-sm transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Reference Photo on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default GalleryPage;
