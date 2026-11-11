import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowLeft,
  Truck,
  RotateCcw,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { products } from '../data/products';
import { useCartWishlist } from '../context/CartWishlistContext';
import ProductCard from '../components/ProductCard';

export const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isInWishlist } = useCartWishlist();

  const product = products.find((p) => p.slug === slug) || products[0];
  const wishlisted = isInWishlist(product.id);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const whatsAppMessage = `Hello Peru Covering, I am interested in ${product.name}. Please share the details and price.`;
  const whatsAppUrl = `https://wa.me/916380623621?text=${encodeURIComponent(whatsAppMessage)}`;

  // Related products from same category or random
  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.categorySlug === product.categorySlug || true))
    .slice(0, 4);

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen text-burgundy-dark text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Back Link & Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-burgundy-dark/60 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 hover:text-gold-dark font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </button>
          <span>/</span>
          <Link to="/" className="hover:text-gold-dark">
            Home
          </Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gold-dark">
            Collections
          </Link>
          <span>/</span>
          <span className="text-burgundy-dark font-medium line-clamp-1">{product.name}</span>
        </div>

        {/* Main Product Section: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
          {/* Left: Product Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-ivory-warm border-2 border-gold-metallic/35 shadow-gold-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover filter contrast-105"
              />

              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 text-xs uppercase tracking-widest font-bold bg-gold-metallic text-burgundy-dark rounded-full shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Floating Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                className={`absolute top-4 right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                  wishlisted
                    ? 'bg-burgundy-dark text-gold-metallic shadow-md'
                    : 'bg-white/90 text-burgundy-dark hover:text-gold-metallic shadow-sm'
                }`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Micro Thumbnail row */}
            <div className="grid grid-cols-4 gap-3">
              {[product.image, product.image, product.image, product.image].map((img, idx) => (
                <div
                  key={idx}
                  className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer ${
                    idx === 0 ? 'border-gold-metallic' : 'border-gold-metallic/20 opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs & WhatsApp Order CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-dark font-semibold mb-2">
                <span>{product.category}</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">In Stock Trichy</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-dark tracking-wide mb-3">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 text-gold-dark">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-metallic text-gold-metallic" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-burgundy-dark">
                  {product.rating} ({product.reviewsCount} customer reviews)
                </span>
              </div>

              {/* Price Box */}
              <div className="flex items-baseline gap-4 py-4 px-5 rounded-xl bg-ivory-warm border border-gold-metallic/30 mb-6">
                <div>
                  <span className="text-3xl font-bold text-burgundy-dark">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-burgundy-dark/40 line-through ml-3">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                {product.originalPrice && (
                  <span className="px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider ml-auto">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')} (
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}
                    %)
                  </span>
                )}
              </div>

              <p className="text-sm text-burgundy-dark/80 leading-relaxed font-light mb-6">
                {product.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2 mb-6">
                {product.features?.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-burgundy-dark">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-gold-metallic/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Bag */}
                <button
                  onClick={() => addToCart(product)}
                  className="py-4 px-6 rounded bg-burgundy-dark hover:bg-burgundy text-gold-champagne font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-gold-metallic" />
                  <span>Add to Bag</span>
                </button>

                {/* WhatsApp Enquiry */}
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-burgundy-dark/60 font-light">
                Call/WhatsApp: <strong className="text-burgundy-dark font-medium">6380623621</strong> for immediate size confirmation or custom alterations.
              </p>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-gold-metallic/20 text-center">
              <div>
                <ShieldCheck className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                <p className="text-[10px] font-semibold text-burgundy-dark">1-Year Warranty</p>
                <p className="text-[9px] text-burgundy-dark/60">Free Re-polish</p>
              </div>
              <div>
                <Sparkles className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                <p className="text-[10px] font-semibold text-burgundy-dark">24K Micro Gold</p>
                <p className="text-[9px] text-burgundy-dark/60">High Micron Plating</p>
              </div>
              <div>
                <Truck className="w-5 h-5 text-gold-dark mx-auto mb-1" />
                <p className="text-[10px] font-semibold text-burgundy-dark">Safe Shipping</p>
                <p className="text-[9px] text-burgundy-dark/60">Or Trichy Store Pickup</p>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="border border-gold-metallic/25 rounded-xl overflow-hidden bg-white">
              <div className="bg-burgundy-dark px-4 py-2.5 text-gold-champagne font-serif text-sm font-semibold tracking-wider uppercase">
                Technical Specifications
              </div>
              <table className="w-full text-xs">
                <tbody>
                  {Object.entries(product.specs || {}).map(([key, val], idx) => (
                    <tr
                      key={key}
                      className={idx % 2 === 0 ? 'bg-ivory-pure' : 'bg-white border-t border-gold-metallic/10'}
                    >
                      <td className="px-4 py-2.5 font-semibold text-burgundy-dark w-1/3">
                        {key}
                      </td>
                      <td className="px-4 py-2.5 text-burgundy-dark/80">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Care Instructions Guide */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-xs text-amber-950 font-light">
              <div className="flex items-center gap-1.5 font-semibold text-amber-900">
                <Info className="w-4 h-4 text-amber-800" />
                <span>Jewellery Care Guide: How to keep your gold covering shining for years</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-900/80 pl-1">
                <li>Apply perfumes, body sprays, and hairsprays before wearing your jewellery.</li>
                <li>After every use, wipe gently with dry soft cotton to remove sweat or dust.</li>
                <li>Store in an airtight ziplock pouch or velvet box away from direct moisture.</li>
                <li>Free lifetime re-polish service is available at our Trichy store.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="pt-12 border-t border-gold-metallic/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wider text-burgundy-dark mb-2">
              Complementary <span className="font-serif italic font-normal text-gold-dark">Jewels</span>
            </h2>
            <p className="text-xs sm:text-sm text-burgundy-dark/70 font-light">
              Curated ornaments that pair beautifully with this masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
