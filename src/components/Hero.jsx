import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import heroBride from '../assets/images/hero-bride.jpg';
import heroNecklace from '../assets/images/hero-necklace.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] lg:min-h-screen bg-burgundy-dark overflow-hidden flex items-center pt-20 sm:pt-24 pb-16 lg:py-0">
      {/* Editorial Luxury Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 75% 35%, rgba(212, 175, 55, 0.18) 0%, transparent 65%), radial-gradient(ellipse at 20% 80%, rgba(92, 15, 34, 0.4) 0%, transparent 60%)',
        }}
      />

      {/* Subtle Floating Golden Dust */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold-metallic/50"
            style={{
              top: `${(i * 19) % 100}%`,
              left: `${(i * 27) % 100}%`,
              width: `${(i % 3) * 2 + 2}px`,
              height: `${(i % 3) * 2 + 2}px`,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Royal Typography & Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Super Header / Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-metallic/35 bg-burgundy-surface/60 backdrop-blur-sm self-start mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-champagne font-medium">
                Premier Gold Covering • Trichy Legacy
              </span>
            </motion.div>

            {/* Main Brand Title */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold uppercase tracking-[0.14em] text-ivory leading-[1.08] mb-4">
                Peru <span className="gold-gradient-text font-serif italic">Covering</span>
              </h1>
            </motion.div>

            {/* Poetic Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            >
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-gold-champagne tracking-wide italic mb-6">
                Timeless Elegance. Everyday Luxury.
              </h2>
            </motion.div>

            {/* Brand Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
              className="text-ivory-soft/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-light mb-8 font-sans"
            >
              Discover an exquisite collection of beautifully crafted gold covering jewellery designed to celebrate your elegance. Experience the authentic warmth and splendor of 24K micron gold without compromise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 mb-10"
            >
              <Link
                to="/collections"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-gold-metallic via-gold-champagne to-gold-metallic text-burgundy-dark font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-gold-md hover:shadow-gold-lg hover:brightness-105"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#brand-story"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-gold-metallic/50 text-gold-champagne hover:text-ivory hover:border-gold-metallic hover:bg-gold-metallic/10 transition-all duration-300 uppercase tracking-[0.2em] text-xs font-medium"
              >
                <span>Discover More</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-6 border-t border-gold-metallic/15 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-metallic shrink-0" />
                <span className="text-[11px] text-ivory-soft/80 leading-snug">
                  1-Year Polish Guarantee
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-gold-metallic shrink-0" />
                <span className="text-[11px] text-ivory-soft/80 leading-snug">
                  24K Micro Gold Dip
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-gold-metallic shrink-0" />
                <span className="text-[11px] text-ivory-soft/80 leading-snug">
                  Trichy Handcrafted
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Fashion Luxury Jewellery Editorial Composition */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-gold-metallic/30 rounded-2xl pointer-events-none transform -rotate-1 hidden sm:block" />
              <div className="absolute -inset-3 sm:-inset-4 border border-gold-champagne/20 rounded-2xl pointer-events-none transform rotate-1 hidden sm:block" />

              {/* Main Bridal Portrait with Jewellery */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-gold-metallic/40 bg-burgundy-surface">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={heroBride}
                    alt="Traditional South Indian Bride in Gold Covering Jewellery"
                    className="w-full h-full object-cover object-top filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/85 via-transparent to-black/20 pointer-events-none" />

                {/* Corner Emblem Badge */}
                <div className="absolute top-4 right-4 bg-burgundy-dark/90 backdrop-blur-md border border-gold-metallic/50 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-gold-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-metallic animate-ping" />
                  <span className="text-[10px] uppercase tracking-wider text-gold-champagne font-medium">
                    Bridal 2026 Edition
                  </span>
                </div>

                {/* Bottom Floating Card inside Image */}
                <div className="absolute bottom-4 left-4 right-4 bg-burgundy-surface/90 backdrop-blur-md border border-gold-metallic/30 p-3 sm:p-4 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold-champagne/80 font-medium">
                      Featured Masterpiece
                    </p>
                    <h4 className="font-serif text-sm sm:text-base text-ivory font-semibold">
                      Antique Bridal Haram Set
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gold-champagne/60 line-through mr-1.5">₹4,800</span>
                    <span className="text-sm sm:text-base text-gold-metallic font-bold">₹3,450</span>
                  </div>
                </div>
              </div>

              {/* Floating Floating Micro Showcase (Thumbnail Accent) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-6 sm:-left-10 bg-burgundy-dark/95 backdrop-blur-xl border border-gold-metallic/40 p-2 sm:p-2.5 rounded-lg shadow-gold-md hidden sm:flex items-center gap-3 w-48 sm:w-56"
              >
                <div className="w-12 h-12 rounded-md overflow-hidden shrink-0 border border-gold-metallic/30">
                  <img src={heroNecklace} alt="Gold Covering Choker" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gold-champagne">
                    Real 24K Look & Feel
                  </p>
                  <p className="text-xs font-serif font-bold text-ivory">Temple Choker</p>
                  <span className="text-[10px] text-emerald-400 font-medium">✓ In Stock Trichy</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
