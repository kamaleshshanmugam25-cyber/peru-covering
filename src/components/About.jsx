import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, Heart, MapPin } from 'lucide-react';
import storyCraft from '../assets/images/story-craft.jpg';
import heroNecklace from '../assets/images/hero-necklace.jpg';

export const About = () => {
  return (
    <section id="brand-story" className="py-20 lg:py-28 bg-burgundy-dark relative overflow-hidden text-ivory">
      {/* Decorative Radial Gold Lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 40%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(92, 15, 34, 0.4) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition with Layered Frames */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Decorative Gold Frame */}
            <div className="absolute -inset-3 sm:-inset-4 border border-gold-metallic/30 rounded-2xl pointer-events-none transform -rotate-1 hidden sm:block" />

            {/* Main Craftsmanship Photo */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gold-metallic/40 bg-burgundy-surface">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src={storyCraft}
                  alt="Jewellery Craftsmanship at Peru Covering Trichy"
                  className="w-full h-full object-cover filter contrast-105 brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/80 via-transparent to-black/10 pointer-events-none" />

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-burgundy-surface/90 backdrop-blur-md border border-gold-metallic/30 p-3 rounded-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-metallic/20 border border-gold-metallic/50 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold-metallic" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gold-champagne font-medium">
                    Store Location
                  </p>
                  <p className="text-xs text-ivory font-serif">19/14, Jaffrasha Street, Trichy</p>
                </div>
              </div>
            </div>

            {/* Floating Overlapping Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-burgundy-surface/95 backdrop-blur-xl border border-gold-metallic/50 p-4 sm:p-5 rounded-xl shadow-gold-lg max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full border border-gold-metallic/40 p-1 overflow-hidden shrink-0">
                  <img src="/logo.png" alt="Peru Covering" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-gold-champagne font-bold uppercase tracking-wider">
                    Trichy's Trusted Name
                  </h4>
                  <p className="text-[10px] text-ivory-soft/70">In Micro Gold Covering</p>
                </div>
              </div>
              <p className="text-[11px] text-ivory-soft/80 leading-relaxed font-light">
                “Every ornament passes through our 5-stage micron plating and polish audit for lifelong brilliance.”
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Brand Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            {/* Sub-header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-[1px] bg-gold-metallic" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-medium">
                Our Heritage & Promise
              </span>
            </div>

            {/* Heading requested by user */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-[0.12em] text-ivory mb-6 leading-tight">
              The Art of <span className="gold-gradient-text italic font-serif">Elegance</span>
            </h2>

            {/* Exact content required by user */}
            <div className="space-y-5 text-ivory-soft/90 text-sm sm:text-base leading-relaxed font-light mb-8 font-sans">
              <p className="text-base sm:text-lg text-gold-champagne font-serif italic border-l-2 border-gold-metallic pl-4 my-2">
                At Peru Covering, we believe every piece of jewellery tells a story of beauty, tradition and elegance.
              </p>
              <p>
                Our collections bring together timeless traditional designs and modern styles, helping every woman express her unique personality with confidence.
              </p>
              <p>
                Discover jewellery that makes every occasion special.
              </p>
            </div>

            {/* 3 Pillar Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold-metallic/20">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-metallic">24K</p>
                <p className="text-[11px] uppercase tracking-wider text-gold-champagne/70 mt-1">
                  Micro Gold Dip
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-metallic">500+</p>
                <p className="text-[11px] uppercase tracking-wider text-gold-champagne/70 mt-1">
                  Unique Motifs
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-gold-metallic">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-gold-champagne/70 mt-1">
                  Trust in Trichy
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default About;
