import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCartWishlist } from '../context/CartWishlistContext';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useCartWishlist();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsSearchOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-2xl w-full bg-burgundy-dark rounded-2xl border border-gold-metallic/40 shadow-2xl z-10 text-ivory overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Header Input */}
          <div className="p-4 sm:p-6 border-b border-gold-metallic/20 flex items-center gap-3">
            <Search className="w-6 h-6 text-gold-metallic shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search necklaces, bridal haram, bangles, jhumkas..."
              className="flex-1 bg-transparent text-ivory text-base sm:text-lg focus:outline-none placeholder-ivory-soft/40 font-light"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-gold-champagne/60 hover:text-gold-metallic"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-gold-champagne hover:text-white rounded-full border border-gold-metallic/30"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6">
            {query.trim() === '' ? (
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-gold-champagne/60 text-left">
                  Popular Searches:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Bridal Haram', 'Gold Bangles', 'Peacock Jhumkas', 'Kasu Mala', 'Choker Set', 'Oddiyanam'].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3.5 py-1.5 rounded-full bg-burgundy-surface hover:bg-gold-metallic/20 border border-gold-metallic/30 text-xs text-gold-champagne transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-12 text-center text-ivory-soft/70 space-y-2">
                <p className="text-base font-serif">No jewellery found matching “{query}”</p>
                <p className="text-xs font-light">
                  Try searching for “Necklace”, “Bangles”, “Haram”, or contact us directly on WhatsApp (6380623621).
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-gold-champagne/80 text-left mb-2">
                  Found {results.length} results:
                </p>
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center gap-4 p-3 rounded-lg bg-burgundy-surface/70 hover:bg-burgundy-surface border border-gold-metallic/20 hover:border-gold-metallic/60 transition-all text-left group"
                  >
                    <div className="w-14 h-14 rounded overflow-hidden shrink-0 border border-gold-metallic/25 bg-black">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-base font-bold text-ivory group-hover:text-gold-champagne transition-colors truncate">
                        {product.name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-wider text-gold-champagne/80">
                        {product.category}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-gold-metallic">
                        ₹{product.price.toLocaleString('en-IN')}
                      </p>
                      <span className="text-[10px] text-ivory-soft/60 flex items-center justify-end gap-1 group-hover:text-gold-champagne">
                        View <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default SearchModal;
