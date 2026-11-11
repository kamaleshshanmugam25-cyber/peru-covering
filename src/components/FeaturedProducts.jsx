import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = [
    'All',
    'Bridal Jewellery',
    'Necklace Sets',
    'Traditional Jewellery',
    'Bangles',
    'Earrings',
    'Antique Jewellery',
  ];

  const filteredProducts =
    activeTab === 'All'
      ? products.slice(0, 8)
      : products.filter((p) => p.category === activeTab);

  return (
    <section id="featured" className="py-20 lg:py-28 bg-ivory-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Signature Jewels
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-dark uppercase tracking-wider mb-4"
          >
            Featured <span className="font-serif italic font-normal text-gold-dark">Jewellery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-burgundy-dark/70 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            Each piece is sculpted with devotion in Trichy, featuring high-micron 24k gold covering that offers authentic heritage brilliance at accessible prices.
          </motion.p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-burgundy-dark text-gold-metallic shadow-gold-sm border border-gold-metallic/60'
                  : 'bg-white/80 text-burgundy-dark/70 hover:text-burgundy-dark border border-gold-metallic/20 hover:border-gold-metallic/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Staggered Responsive Product Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <Link
            to="/collections"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-burgundy-dark hover:bg-burgundy text-gold-champagne hover:text-white border border-gold-metallic/50 shadow-gold-sm transition-all duration-300 uppercase tracking-[0.2em] text-xs font-semibold"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4 text-gold-metallic" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProducts;
