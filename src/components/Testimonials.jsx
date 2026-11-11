import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Kavitha Senthilvel',
      location: 'Tiruchirappalli',
      rating: 5,
      review:
        'I ordered the Antique Bridal Haram Set for my sister’s wedding in Trichy. The finish was breathtaking! Not a single guest could distinguish it from 916 gold. The 24K micro gold plating is exceptional.',
      occasion: 'Bridal Set Order',
    },
    {
      id: 2,
      name: 'Dr. Meenakshi Sundaram',
      location: 'Chennai',
      rating: 5,
      review:
        'Peru Covering’s daily wear bangles and rope chain have lasted over 8 months of daily use with zero color loss. Their customer service on WhatsApp is fast and very respectful.',
      occasion: 'Daily Wear Collection',
    },
    {
      id: 3,
      name: 'Aishwarya Rajesh',
      location: 'Coimbatore',
      rating: 5,
      review:
        'The Kasu Mala and Temple peacock jhumkas arrived safely in sturdy velvet packaging. The antique matte polish gives a divine royal look with Kanjeevaram silk sarees. Truly ₹1,00,000 luxury quality at such an affordable price.',
      occasion: 'Temple Jewellery Order',
    },
    {
      id: 4,
      name: 'Priyanka Venkatesh',
      location: 'Bangalore',
      rating: 5,
      review:
        'Visiting their Jaffrasha Street store in Trichy was such a warm experience. Their artisans explain the micron plating process patiently. I bought 3 sets for family functions and everyone is delighted!',
      occasion: 'Showroom Visit & Purchase',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-ivory-warm relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Words of Adoration
            </span>
            <span className="w-8 h-[1px] bg-gold-metallic" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-dark uppercase tracking-wider mb-3">
            Client <span className="font-serif italic font-normal text-gold-dark">Testimonials</span>
          </h2>
          <p className="text-burgundy-dark/70 text-xs sm:text-sm font-light">
            (Demonstration client experiences celebrating our craftsmanship across Tamil Nadu)
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div className="relative bg-white rounded-2xl p-8 sm:p-14 border border-gold-metallic/30 shadow-gold-sm min-h-[300px] flex flex-col justify-between">
          {/* Big Decorative Quotation Mark */}
          <div className="absolute top-6 left-6 text-gold-champagne/40 pointer-events-none">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col justify-between flex-1 text-center"
            >
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-metallic text-gold-metallic" />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-serif text-lg sm:text-2xl text-burgundy-dark font-light italic leading-relaxed max-w-2xl mx-auto mb-8">
                “{current.review}”
              </p>

              {/* Customer Info */}
              <div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-burgundy-dark tracking-wide">
                  {current.name}
                </h4>
                <p className="text-xs uppercase tracking-widest text-gold-dark mt-1 font-medium">
                  {current.location} • <span className="text-burgundy-dark/60">{current.occasion}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold-metallic/15 relative z-10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === i ? 'w-8 bg-gold-metallic' : 'w-2 bg-gold-metallic/30'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-gold-metallic/40 text-burgundy-dark hover:bg-gold-metallic hover:text-burgundy-dark transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-gold-metallic/40 text-burgundy-dark hover:bg-gold-metallic hover:text-burgundy-dark transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
