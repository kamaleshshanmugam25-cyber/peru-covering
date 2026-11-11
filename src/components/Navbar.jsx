import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartWishlist } from '../context/CartWishlistContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useCartWishlist();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Clean Navigation Structure (Without "Jewellery")
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Floating Center-Aligned Oval / Capsule Navbar Container with Pure Glassmorphism */}
      <div className="fixed top-2.5 sm:top-4 inset-x-0 z-40 flex justify-center px-3 sm:px-6 pointer-events-none">
        <header
          className={`pointer-events-auto w-full max-w-6xl rounded-full transition-all duration-500 flex items-center justify-between px-3 sm:px-6 ${
            isScrolled
              ? 'navbar-glass-scrolled py-1.5 sm:py-2'
              : 'navbar-glass py-2 sm:py-2.5'
          }`}
        >
          {/* Left: Peru Covering Logo Badge + Brand Title */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-metallic/40 p-0.5 bg-black/25 backdrop-blur-md group-hover:border-gold-metallic transition-all duration-300 shadow-gold-sm flex items-center justify-center overflow-hidden">
              <img
                src="/logo-transparent.png"
                alt="Peru Covering Official Logo"
                className="w-full h-full object-contain transform group-hover:scale-108 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm sm:text-lg font-bold tracking-[0.16em] uppercase gold-gradient-text leading-none">
                Peru Covering
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] tracking-[0.25em] uppercase text-gold-champagne/80 font-light mt-0.5">
                Trichy • Gold Covering
              </span>
            </div>
          </Link>

          {/* Center: Desktop Oval Capsule Links with Frosted Glass Backing */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link, index) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-[12.5px] uppercase tracking-[0.16em] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gold-metallic/20 text-gold-metallic font-semibold border border-gold-metallic/40 shadow-sm'
                      : 'text-ivory-soft hover:text-gold-champagne hover:bg-gold-metallic/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Search, Wishlist, Cart & WhatsApp Enquiry */}
          <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Jewellery"
              className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gold-champagne hover:text-gold-metallic transition-all rounded-full bg-white/5 hover:bg-gold-metallic/15 border border-white/10 hover:border-gold-metallic/35 backdrop-blur-sm shadow-sm"
              title="Search Jewellery"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/collections"
              aria-label="Wishlist"
              className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gold-champagne hover:text-gold-metallic transition-all rounded-full bg-white/5 hover:bg-gold-metallic/15 border border-white/10 hover:border-gold-metallic/35 backdrop-blur-sm shadow-sm hidden sm:flex"
              title="View Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-gold-metallic text-burgundy-dark text-[8.5px] font-bold rounded-full flex items-center justify-center shadow-gold-sm">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gold-champagne hover:text-gold-metallic transition-all rounded-full bg-white/5 hover:bg-gold-metallic/15 border border-white/10 hover:border-gold-metallic/35 backdrop-blur-sm shadow-sm"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-gold-metallic text-burgundy-dark text-[8.5px] font-bold rounded-full flex items-center justify-center shadow-gold-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp Enquiry Pill (Desktop) with Glassmorphism */}
            <a
              href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20am%20interested%20in%20your%20gold%20covering%20jewellery%20collection.%20Please%20share%20catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-950/40 hover:bg-emerald-900/60 backdrop-blur-md text-emerald-300 hover:text-white hover:border-emerald-400 transition-all duration-300 text-[11px] tracking-wider uppercase font-medium shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Enquire</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-8 h-8 flex items-center justify-center text-gold-champagne hover:text-gold-metallic transition-colors md:hidden border border-white/15 bg-white/5 backdrop-blur-sm rounded-full"
              aria-label="Toggle Mobile Navigation"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Menu with Luxury Glassmorphism */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-burgundy-dark/92 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div>
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-gold-metallic/20">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full border border-gold-metallic/40 p-0.5 bg-black/30 backdrop-blur-md overflow-hidden">
                    <img src="/logo-transparent.png" alt="Peru Covering" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-lg uppercase tracking-widest gold-gradient-text font-bold">
                      Peru Covering
                    </h3>
                    <p className="text-[9px] tracking-widest uppercase text-gold-champagne/70">
                      Trichy • Gold Covering
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center text-gold-champagne hover:text-gold-metallic border border-gold-metallic/30 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items (Without Jewellery) */}
              <nav className="flex flex-col space-y-3 py-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    to={link.path}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-lg font-serif tracking-widest text-ivory-soft hover:text-gold-metallic hover:bg-gold-metallic/10 border border-gold-metallic/10 transition-all text-left"
                  >
                    <span>{link.name}</span>
                    <span className="text-gold-metallic/50 text-sm">→</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Footer with Contact details */}
            <div className="space-y-4 pt-5 border-t border-gold-metallic/20 text-xs text-gold-champagne/80 text-left">
              <div className="space-y-1.5 text-[11px]">
                <p className="flex items-center gap-2">
                  <span className="text-gold-metallic font-semibold">📍 Store:</span> 19/14, Jaffrasha Street, Trichy
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-gold-metallic font-semibold">📞 Helpline:</span>{' '}
                  <a href="tel:6380623621" className="underline font-bold text-ivory">
                    6380623621
                  </a>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:6380623621"
                  className="w-full flex items-center justify-center gap-1.5 py-3 rounded-full border border-gold-metallic text-gold-champagne font-medium tracking-wider uppercase text-[11px]"
                >
                  <Phone className="w-3.5 h-3.5" /> Call Now
                </a>
                <a
                  href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20would%20like%20to%20enquire%20about%20your%20jewellery."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium tracking-wider uppercase text-[11px] shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
