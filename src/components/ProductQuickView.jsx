import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ShoppingBag, Heart, ShieldCheck, Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';

export const ProductQuickView = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const wishlisted = isInWishlist(product.id);

  const whatsAppMessage = `Hello Peru Covering, I am interested in ${product.name}. Please share the details and price.`;
  const whatsAppUrl = `https://wa.me/916380623621?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setQuickViewProduct(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden border border-gold-metallic/50 shadow-2xl z-10 text-burgundy-dark max-h-[90vh] flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-burgundy-dark text-gold-champagne hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Product Image */}
          <div className="md:w-1/2 bg-ivory-warm relative aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-gold-metallic text-burgundy-dark font-bold text-[10px] uppercase tracking-wider rounded-full shadow-sm">
                {product.badge}
              </span>
            )}
          </div>

          {/* Right: Details & Order CTA */}
          <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto text-left flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-gold-dark font-medium mb-1">
                <span className="uppercase tracking-widest">{product.category}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-gold-metallic text-gold-metallic" />
                  <span>{product.rating} ({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-bold text-burgundy-dark mb-2">
                {product.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-2xl font-bold text-burgundy-dark">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-burgundy-dark/40 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs text-emerald-700 font-semibold uppercase tracking-wider">
                  In Stock • Trichy
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-burgundy-dark/75 leading-relaxed font-light mb-5">
                {product.description}
              </p>

              {/* Specifications preview */}
              <div className="bg-ivory-pure p-3.5 rounded-lg border border-gold-metallic/20 space-y-1.5 text-xs text-burgundy-dark/80 mb-6 font-light">
                <p>
                  <strong className="text-burgundy-dark font-semibold">Gold Plating:</strong>{' '}
                  {product.specs['Gold Plating'] || '24K Micro Gold Covering'}
                </p>
                <p>
                  <strong className="text-burgundy-dark font-semibold">Base Metal:</strong>{' '}
                  {product.specs['Base Metal'] || 'High-Grade Jewellers Copper Alloy'}
                </p>
                <p>
                  <strong className="text-burgundy-dark font-semibold">Warranty:</strong>{' '}
                  {product.specs['Warranty'] || '1 Year Polish Guarantee'}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => addToCart(product)}
                  className="py-3 px-3 rounded bg-burgundy-dark hover:bg-burgundy text-gold-champagne font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-metallic" />
                  <span>Add to Bag</span>
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => toggleWishlist(product)}
                  className="text-xs text-burgundy-dark/70 hover:text-gold-dark flex items-center gap-1.5"
                >
                  <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-burgundy-dark text-burgundy-dark' : ''}`} />
                  <span>{wishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>

                <Link
                  to={`/product/${product.slug}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="text-xs uppercase tracking-wider font-semibold text-gold-dark hover:text-burgundy-dark underline"
                >
                  Full Product Page →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default ProductQuickView;
