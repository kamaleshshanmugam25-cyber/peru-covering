import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, MessageCircle, ZoomIn } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';

export const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      title: 'Heritage Lakshmi Temple Haram',
      category: 'Bridal Close-up',
      span: 'col-span-1 md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto',
    },
    {
      id: 2,
      image: gallery2,
      title: 'South Indian Bridal Ensemble',
      category: 'Model Showcase',
      span: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 3,
      image: gallery3,
      title: 'Diamond-Cut Micro Gold Bangles',
      category: 'Bangles & Kada',
      span: 'col-span-1 aspect-square',
    },
    {
      id: 4,
      image: gallery4,
      title: 'Traditional Temple Peacock Jhumkas',
      category: 'Earrings Detail',
      span: 'col-span-1 aspect-square',
    },
    {
      id: 5,
      image: gallery5,
      title: 'Royal Antique Bridal Choker',
      category: 'Necklace Sets',
      span: 'col-span-1 md:col-span-2 aspect-[16/9] md:aspect-auto',
    },
    {
      id: 6,
      image: gallery6,
      title: 'Kemp Stone Finger Ring',
      category: 'Close-up Macro',
      span: 'col-span-1 aspect-square',
    },
  ];

  const handleWhatsAppEnquiry = (item) => {
    const msg = `Hello Peru Covering, I loved this design from your gallery: ${item.title} (${item.category}). Please share details and pricing.`;
    window.open(`https://wa.me/916380623621?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-burgundy-dark relative overflow-hidden text-ivory">
      {/* Editorial Decorative Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        }}
      />

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
            <InstagramIcon className="w-4 h-4 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-semibold">
              Editorial Lookbook
            </span>
            <InstagramIcon className="w-4 h-4 text-gold-metallic" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-4"
          >
            Luxury <span className="gold-gradient-text italic font-serif">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-ivory-soft/80 text-sm sm:text-base font-light max-w-xl mx-auto font-sans"
          >
            A visual symphony of brides, heirloom sets, and close-up craftsmanship celebrating the enduring beauty of Peru Covering.
          </motion.p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setActivePhoto(item)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-gold-metallic/25 hover:border-gold-metallic shadow-md hover:shadow-gold-md transition-all duration-500 bg-burgundy-surface ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient & Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 via-burgundy-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="self-end">
                  <span className="w-9 h-9 rounded-full bg-burgundy-dark/80 backdrop-blur-md border border-gold-metallic/60 text-gold-champagne flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-left">
                  <span className="text-[10px] uppercase tracking-widest text-gold-champagne/80 font-medium block">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-ivory">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-burgundy-surface rounded-2xl overflow-hidden border border-gold-metallic/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-burgundy-dark/80 text-gold-champagne hover:text-white border border-gold-metallic/50 flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh]">
                {/* Photo Display */}
                <div className="md:col-span-8 bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="max-h-[75vh] w-full object-contain"
                  />
                </div>

                {/* Details & WhatsApp Order Side */}
                <div className="md:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-burgundy-dark border-t md:border-t-0 md:border-l border-gold-metallic/20 text-left">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-gold-metallic/15 border border-gold-metallic/40 text-[10px] uppercase tracking-wider text-gold-champagne font-medium mb-4">
                      {activePhoto.category}
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-ivory mb-3">
                      {activePhoto.title}
                    </h3>

                    <p className="text-xs text-ivory-soft/80 leading-relaxed font-light mb-6">
                      Part of our exclusive showroom collection at 19/14, Jaffrasha Street, Trichy. Available in bespoke sizes and custom micro-plating finishes.
                    </p>

                    <div className="space-y-2 text-xs text-gold-champagne/80 pb-4 border-b border-gold-metallic/20">
                      <p>✨ 24K Micro Gold Covering</p>
                      <p>🛡️ 1-Year Polish Warranty</p>
                      <p>🚚 Safe Express Delivery Across India</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => handleWhatsAppEnquiry(activePhoto)}
                      className="w-full py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-sm transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire via WhatsApp</span>
                    </button>
                    <p className="text-center text-[10px] text-ivory-soft/60 mt-2">
                      WhatsApp: 6380623621 • Instant Quote
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
