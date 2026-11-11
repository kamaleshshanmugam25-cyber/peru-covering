import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, RotateCcw, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';

export const CollectionsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPrice, setMaxPrice] = useState(6000);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (slug) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', slug);
    }
    setSearchParams(searchParams);
  };

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setMaxPrice(6000);
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.categorySlug === selectedCategory;

        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPrice = product.price <= maxPrice;

        return matchesCategory && matchesSearch && matchesPrice;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return a.id - b.id; // featured default
      });
  }, [selectedCategory, searchQuery, sortBy, maxPrice]);

  const currentCategoryObj = categories.find((c) => c.slug === selectedCategory);

  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen text-burgundy-dark">
      {/* Editorial Page Header */}
      <div className="bg-burgundy-dark text-ivory py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden mb-12">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <Sparkles className="w-4 h-4 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-semibold">
              The Sovereign Collection
            </span>
            <Sparkles className="w-4 h-4 text-gold-metallic" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider mb-4"
          >
            {currentCategoryObj ? currentCategoryObj.name : 'All Jewellery Collections'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-ivory-soft/80 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            {currentCategoryObj
              ? currentCategoryObj.description
              : 'Immerse yourself in timeless bridal harams, temple necklaces, diamond-cut bangles and everyday gold covering elegance.'}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Control Bar: Search + Category Pills + Filter Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-gold-metallic/20">
          {/* Category Horizontal Selector */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-burgundy-dark text-gold-metallic border border-gold-metallic/60 shadow-sm'
                  : 'bg-white text-burgundy-dark/70 hover:text-burgundy-dark border border-gold-metallic/20'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? 'bg-burgundy-dark text-gold-metallic border border-gold-metallic/60 shadow-sm'
                    : 'bg-white text-burgundy-dark/70 hover:text-burgundy-dark border border-gold-metallic/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jewels..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-full bg-white border border-gold-metallic/30 text-burgundy-dark focus:outline-none focus:border-gold-metallic"
              />
              <Search className="w-4 h-4 text-gold-dark absolute left-3 top-2.5" />
            </div>

            {/* Sort Selector */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-xs rounded-full bg-white border border-gold-metallic/30 text-burgundy-dark focus:outline-none focus:border-gold-metallic"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2 text-burgundy-dark hover:text-gold-dark bg-white border border-gold-metallic/30 rounded-full"
              title="Filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Expandable Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white p-6 rounded-xl border border-gold-metallic/30 shadow-sm mb-8 space-y-4 text-left"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-serif text-lg font-bold text-burgundy-dark">Filter By Price</h4>
              <button
                onClick={handleReset}
                className="text-xs text-gold-dark hover:underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            </div>

            <div className="max-w-xs space-y-2">
              <div className="flex justify-between text-xs font-semibold text-burgundy-dark">
                <span>Up to: ₹{maxPrice.toLocaleString('en-IN')}</span>
                <span>₹6,000</span>
              </div>
              <input
                type="range"
                min="500"
                max="6000"
                step="250"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-gold-metallic cursor-pointer"
              />
            </div>
          </motion.div>
        )}

        {/* Product Count Display */}
        <div className="flex items-center justify-between text-xs text-burgundy-dark/60 mb-6">
          <span>Showing {filteredProducts.length} jewellery designs</span>
          <span>100% Guaranteed 24K Micro Gold Covering</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-gold-metallic/20 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-burgundy-dark">No Jewels Found</h3>
            <p className="text-xs text-burgundy-dark/70 max-w-md mx-auto font-light">
              We couldn’t find any jewellery matching your specific filters. Try expanding your price range or resetting filters.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded bg-burgundy-dark text-gold-champagne text-xs uppercase tracking-widest font-semibold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default CollectionsPage;
