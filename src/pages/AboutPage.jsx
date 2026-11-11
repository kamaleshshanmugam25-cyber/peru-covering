import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Award, MapPin, Heart, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import storyCraft from '../assets/images/story-craft.jpg';
import storeInterior from '../assets/images/store-interior.jpg';
import heroBride from '../assets/images/hero-bride.jpg';

export const AboutPage = () => {
  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen text-burgundy-dark text-left">
      {/* Editorial Header */}
      <div className="bg-burgundy-dark text-ivory py-16 sm:py-20 px-4 sm:px-6 lg:px-12 relative overflow-hidden mb-16">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 40%, rgba(212, 175, 55, 0.25) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-semibold">
              The Peru Covering Legacy
            </span>
            <Sparkles className="w-4 h-4 text-gold-metallic" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-4 leading-tight">
            The Art of <span className="gold-gradient-text italic font-serif">Elegance</span>
          </h1>

          <p className="text-ivory-soft/80 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Preserving South India’s majestic jewellery legacy through 24K micro gold covering innovation from the heart of Tiruchirappalli.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
        {/* Core Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold-metallic" />
              <span className="text-xs uppercase tracking-[0.25em] text-gold-dark font-semibold">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-dark uppercase tracking-wide leading-tight">
              Every Piece Tells a <span className="italic font-normal font-serif text-gold-dark">Story</span>
            </h2>

            {/* Exact content required by user */}
            <div className="space-y-4 text-sm sm:text-base text-burgundy-dark/85 font-light leading-relaxed">
              <p className="font-serif text-lg text-burgundy-dark italic border-l-2 border-gold-metallic pl-4">
                At Peru Covering, we believe every piece of jewellery tells a story of beauty, tradition and elegance.
              </p>
              <p>
                Our collections bring together timeless traditional designs and modern styles, helping every woman express her unique personality with confidence.
              </p>
              <p>
                Discover jewellery that makes every occasion special.
              </p>
              <p>
                Located at <strong>19/14, Jaffrasha Street, Trichy</strong>, our brand has earned the unwavering trust of brides, classical dancers, and families seeking the authentic radiance of gold without the astronomical expense.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border-2 border-gold-metallic/40 shadow-xl aspect-[4/3] bg-burgundy-surface">
              <img
                src={storyCraft}
                alt="Jewellery Artisans at Peru Covering"
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-burgundy-dark text-ivory p-4 rounded-xl border border-gold-metallic/40 shadow-lg hidden sm:block">
              <p className="font-serif text-2xl font-bold text-gold-metallic">100%</p>
              <p className="text-[10px] uppercase tracking-wider text-gold-champagne font-light">
                24K Micro Electroplating
              </p>
            </div>
          </div>
        </div>

        {/* The Science & Art of Micro Gold Covering */}
        <div className="bg-ivory-warm p-8 sm:p-14 rounded-2xl border border-gold-metallic/30 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Quality Benchmark
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-dark uppercase tracking-wider">
              Why Peru Covering Shines Brighter
            </h2>
            <p className="text-xs sm:text-sm text-burgundy-dark/70 font-light">
              Unlike ordinary flash-plated imitation jewellery that fades in weeks, our pieces undergo high-precision micro electro-deposition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gold-metallic/20 space-y-3">
              <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center font-serif font-bold text-base">
                1
              </div>
              <h3 className="font-serif text-lg font-bold text-burgundy-dark">Pure Copper Core</h3>
              <p className="text-xs text-burgundy-dark/75 leading-relaxed font-light">
                We craft the underlying structure from lead-free jeweller’s copper alloy, providing the exact weight, balance, and hand-feel of real sovereign gold.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gold-metallic/20 space-y-3">
              <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center font-serif font-bold text-base">
                2
              </div>
              <h3 className="font-serif text-lg font-bold text-burgundy-dark">24K Micron Gold Dip</h3>
              <p className="text-xs text-burgundy-dark/75 leading-relaxed font-light">
                An authentic micro-layer of 24K gold is bonded chemically to the surface, imparting the warm, regal luster that never looks artificial or brassy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gold-metallic/20 space-y-3">
              <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center font-serif font-bold text-base">
                3
              </div>
              <h3 className="font-serif text-lg font-bold text-burgundy-dark">Protective Nano Lacquer</h3>
              <p className="text-xs text-burgundy-dark/75 leading-relaxed font-light">
                A transparent, skin-friendly ceramic sealant locks in the golden luster, making each ornament resistant to daily friction, moisture, and perspiration.
              </p>
            </div>
          </div>
        </div>

        {/* Showroom & Team Callout */}
        <div className="bg-burgundy-dark text-ivory rounded-2xl p-8 sm:p-14 border border-gold-metallic/40 shadow-burgundy-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-medium">
              Visit Our Trichy Showroom
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider text-ivory">
              Experience the Craftsmanship In Person
            </h3>
            <p className="text-xs sm:text-sm text-ivory-soft/80 leading-relaxed font-light">
              We welcome you to visit our retail showroom at <strong>19/14, Jaffrasha Street, Trichy</strong>. Try on full bridal sets, consult our jewellery stylists, or order custom sizing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:6380623621"
              className="py-3 px-6 rounded border border-gold-metallic text-gold-champagne hover:bg-gold-metallic hover:text-burgundy-dark font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call: 6380623621
            </a>
            <a
              href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20would%20like%20to%20know%20more%20about%20your%20brand."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
