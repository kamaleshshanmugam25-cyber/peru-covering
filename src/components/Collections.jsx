import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/categories';

export const Collections = () => {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-burgundy-dark/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-3"
          >
            <span className="w-10 h-[1px] bg-gold-metallic/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Curated Masterpieces
            </span>
            <span className="w-10 h-[1px] bg-gold-metallic/60" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-dark uppercase tracking-wider mb-4"
          >
            Exquisite <span className="font-serif italic font-normal text-gold-dark">Collections</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-burgundy-dark/70 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            Explore our signature ranges of high-micron gold covering jewellery, blending centuries-old South Indian temple heritage with refined modern silhouettes.
          </motion.p>
        </div>

        {/* Categories Responsive Grid (4 columns on lg, 2 on sm, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              {/* Outer Golden Border Glow Frame */}
              <div className="absolute inset-0 border border-gold-metallic/25 group-hover:border-gold-metallic rounded-xl transition-colors duration-500 z-20 pointer-events-none" />

              {/* Image Container with Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-burgundy-dark/10">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark via-burgundy-dark/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Item Count Pill */}
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-burgundy-dark/70 backdrop-blur-md border border-gold-metallic/40 text-[10px] tracking-widest uppercase text-gold-champagne font-medium">
                  {category.itemCount}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 z-10 flex flex-col justify-end text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-champagne/80 font-light mb-1">
                    {category.tagline}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ivory tracking-wide group-hover:text-gold-champagne transition-colors duration-300 mb-2">
                    {category.name}
                  </h3>

                  <p className="text-[11px] text-ivory-soft/75 line-clamp-2 font-light mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Explore Button */}
                  <Link
                    to={`/collections?category=${category.slug}`}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-gold-metallic group-hover:text-ivory transition-colors duration-300"
                  >
                    <span>Explore Collection</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-16 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-sm border-2 border-gold-metallic text-burgundy-dark hover:bg-gold-metallic hover:text-burgundy-dark font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300"
          >
            <span>View All 500+ Jewellery Masterpieces</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Collections;
