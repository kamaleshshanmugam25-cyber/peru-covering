import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Gem, HeartHandshake } from 'lucide-react';

export const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: 'Elegant Designs',
      description:
        'Intricately sculpted by master artisans, each jewel mirrors the grandeur of South Indian temple royal ornaments with unmatched precision.',
      icon: Sparkles,
      highlight: 'Heirloom Finish',
    },
    {
      id: 2,
      title: 'Beautiful Collections',
      description:
        'From monumental bridal harams to subtle everyday chains and bangles, discover a rich spectrum of designs curated for every stage of celebration.',
      icon: Layers,
      highlight: '500+ Unique Styles',
    },
    {
      id: 3,
      title: 'Affordable Luxury',
      description:
        'Enjoy the majestic visual brilliance and feel of authentic 24K gold at a fraction of real gold prices, backed by high-durability micro electroplating.',
      icon: Gem,
      highlight: 'True Value',
    },
    {
      id: 4,
      title: 'Customer Satisfaction',
      description:
        'Personalized styling advice, transparent pricing, convenient WhatsApp ordering, and a steadfast commitment to customer trust in Tiruchirappalli.',
      icon: HeartHandshake,
      highlight: 'Guaranteed Polish',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              The Peru Covering Hallmark
            </span>
            <span className="w-8 h-[1px] bg-gold-metallic" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-dark uppercase tracking-wider mb-4"
          >
            Why Choose <span className="font-serif italic font-normal text-gold-dark">Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-burgundy-dark/70 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            Built on a steadfast foundation of Tamil goldsmith craftsmanship, pure micro-plating technology, and thousands of satisfied families.
          </motion.p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-xl border border-gold-metallic/25 hover:border-gold-metallic shadow-sm hover:shadow-gold-md transition-all duration-500 flex flex-col justify-between"
              >
                {/* Top Subtle Gold Accent Line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-gold-metallic to-transparent mb-6 group-hover:w-full transition-all duration-500" />

                <div>
                  {/* Gold Line Icon */}
                  <div className="w-14 h-14 rounded-full bg-burgundy-dark/5 group-hover:bg-burgundy-dark text-gold-dark group-hover:text-gold-champagne border border-gold-metallic/30 flex items-center justify-center mb-6 transition-all duration-300">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest text-gold-dark/80 font-semibold block mb-1">
                    {feature.highlight}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy-dark mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-burgundy-dark/70 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gold-metallic/15 text-left">
                  <span className="text-[11px] text-gold-dark font-medium tracking-wider uppercase group-hover:text-burgundy-dark transition-colors">
                    Guaranteed Excellence →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
