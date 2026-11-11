import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { categories } from '../data/categories';

export const Footer = () => {
  return (
    <footer className="bg-burgundy-dark text-ivory pt-16 pb-12 border-t-2 border-gold-metallic/30 relative overflow-hidden">
      {/* Decorative Golden Top Line Accent */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold-metallic to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-gold-metallic/20">
          {/* Column 1: Brand & Logo (lg:col-span-4) */}
          <div className="lg:col-span-4 text-left space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-14 h-14 rounded-full border border-gold-metallic/50 p-1 bg-burgundy-surface overflow-hidden shrink-0 shadow-gold-sm">
                <img
                  src="/logo.png"
                  alt="Peru Covering Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold uppercase tracking-widest gold-gradient-text leading-none">
                  Peru Covering
                </h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-gold-champagne/80 font-light mt-1">
                  Gold Covering Jewellery
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-ivory-soft/80 leading-relaxed font-light max-w-sm">
              Tiruchirappalli’s revered destination for handcrafted gold covering and 1-gram jewellery. Celebrating South Indian matrimonial heritage, temple motifs, and daily elegance with 24K micro gold brilliance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-gold-metallic/40 flex items-center justify-center text-gold-champagne hover:text-white hover:bg-gold-metallic/20 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-gold-metallic/40 flex items-center justify-center text-gold-champagne hover:text-white hover:bg-gold-metallic/20 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full border border-gold-metallic/40 flex items-center justify-center text-gold-champagne hover:text-white hover:bg-gold-metallic/20 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20am%20enquiring%20from%20your%20website."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full border border-emerald-500/60 bg-emerald-950/40 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-gold-metallic font-semibold border-b border-gold-metallic/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-soft/80 font-light">
              <li>
                <Link to="/" className="hover:text-gold-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-gold-champagne transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-champagne transition-colors">
                  Our Brand Story
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-champagne transition-colors">
                  Lookbook Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-champagne transition-colors">
                  Store & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Collections (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-gold-metallic font-semibold border-b border-gold-metallic/20 pb-2">
              Jewellery Ranges
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-ivory-soft/80 font-light">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/collections?category=${cat.slug}`}
                    className="hover:text-gold-champagne transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Showroom (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-base uppercase tracking-widest text-gold-metallic font-semibold border-b border-gold-metallic/20 pb-2">
              Visit Showroom
            </h4>
            <div className="space-y-3 text-xs text-ivory-soft/80 font-light">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-metallic shrink-0 mt-0.5" />
                <span>
                  19/14, Jaffrasha Street,<br />
                  Trichy, Tamil Nadu, India.
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-metallic shrink-0" />
                <a href="tel:6380623621" className="hover:text-gold-champagne font-medium">
                  +91 63806 23621
                </a>
              </p>

              <p className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/916380623621?text=Hello%20Peru%20Covering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-champagne font-medium"
                >
                  WhatsApp: 6380623621
                </a>
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-burgundy-surface border border-gold-metallic/30 text-[10px] uppercase tracking-wider text-gold-champagne">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-metallic" /> 1-Year Polish Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gold-champagne/70 font-light gap-4">
          <p>© {new Date().getFullYear()} Peru Covering. All Rights Reserved. Trichy, Tamil Nadu.</p>
          <p className="flex items-center gap-1 text-[11px]">
            Crafted with royal elegance for lovers of Indian jewellery
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
