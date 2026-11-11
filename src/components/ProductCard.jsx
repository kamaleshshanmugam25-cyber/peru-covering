import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Eye, ShoppingBag, Star } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const ProductCard = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart, setQuickViewProduct } = useCartWishlist();
  const wishlisted = isInWishlist(product.id);

  // Auto-generate requested WhatsApp inquiry message
  const whatsAppMessage = `Hello Peru Covering, I am interested in ${product.name}. Please share the details and price.`;
  const whatsAppUrl = `https://wa.me/916380623621?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gold-metallic/20 hover:border-gold-metallic/80 shadow-sm hover:shadow-gold-md transition-all duration-500 flex flex-col justify-between">
      {/* Top Image Container */}
      <div className="relative aspect-square overflow-hidden bg-ivory-warm">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Badge (Bestseller, New Arrival, etc.) */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full shadow-sm ${
                product.badge === 'Bestseller'
                  ? 'bg-gold-metallic text-burgundy-dark font-bold'
                  : product.badge === 'New Arrival'
                  ? 'bg-burgundy-dark text-gold-champagne border border-gold-metallic/40'
                  : 'bg-emerald-700 text-white'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            wishlisted
              ? 'bg-burgundy-dark text-gold-metallic shadow-md'
              : 'bg-white/90 text-burgundy-dark hover:text-gold-metallic hover:bg-white shadow-sm'
          }`}
          title="Wishlist"
        >
          <Heart className={`w-4 h-4 ${wishlisted ? 'fill-current' : ''}`} />
        </button>

        {/* Hover Quick Action Buttons (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 py-2 px-3 bg-burgundy-dark/95 hover:bg-burgundy text-gold-champagne text-[11px] font-medium uppercase tracking-wider rounded border border-gold-metallic/40 flex items-center justify-center gap-1.5 shadow-md transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>

          <button
            onClick={() => addToCart(product)}
            aria-label="Add to Bag"
            className="w-9 h-9 bg-gold-metallic hover:bg-gold-light text-burgundy-dark rounded flex items-center justify-center shadow-md transition-colors shrink-0"
            title="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>

        {/* Soft Vignette on Hover */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between text-left">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[11px] text-gold-dark font-medium mb-1.5">
            <span className="uppercase tracking-widest">{product.category}</span>
            <div className="flex items-center gap-1 text-gold-dark font-semibold">
              <Star className="w-3 h-3 fill-gold-metallic text-gold-metallic" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Product Title Link */}
          <Link
            to={`/product/${product.slug}`}
            className="font-serif text-base sm:text-lg font-semibold text-burgundy-dark hover:text-gold-dark transition-colors line-clamp-1 mb-1 block"
          >
            {product.name}
          </Link>

          {/* Short description / Micro Plating Note */}
          <p className="text-[11px] text-burgundy-dark/60 line-clamp-1 mb-3 font-light">
            {product.shortDescription || 'Authentic 24K micro gold covering with high-grade polish.'}
          </p>
        </div>

        {/* Price & Action Buttons */}
        <div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-lg sm:text-xl font-bold text-burgundy-dark">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-burgundy-dark/40 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider ml-auto">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Dual Action: View Details + WhatsApp Enquiry */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gold-metallic/15">
            <Link
              to={`/product/${product.slug}`}
              className="py-2 px-2 text-center text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded border border-burgundy-dark/30 hover:border-gold-metallic hover:bg-burgundy-dark hover:text-gold-champagne text-burgundy-dark transition-all duration-300"
            >
              View Details
            </Link>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-2 text-center text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold rounded bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1 transition-all duration-300 shadow-sm"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
