import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 35);

    // Auto-complete after 2.2 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 600);
  };

  // 24 Floating Golden Sparkle Particles
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: (i * 17) % 100,
    y: (i * 23) % 100,
    size: (i % 3) * 1.5 + 2,
    duration: 3 + (i % 3),
    delay: (i % 5) * 0.2,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between py-12 px-6 bg-burgundy-dark overflow-hidden select-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 45%, #5C0F22 0%, #2B0710 60%, #150206 100%)',
          }}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold-metallic/12 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Floating Golden Dust Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0.2, 0.9, 0.2],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'absolute',
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #FFF8E1 0%, #D4AF37 70%, #AA820A 100%)',
                  boxShadow: '0 0 8px rgba(212, 175, 55, 0.7)',
                }}
              />
            ))}
          </div>

          {/* Top Brand Marker (Clean, No Street Address) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 relative z-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold-champagne/90 font-medium">
              Royal Gold Covering Jewellery
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
          </motion.div>

          {/* Centerpiece: Emblem + Royal Logo + Typography */}
          <div className="relative flex flex-col items-center z-10 my-auto text-center">
            {/* Concentric Golden Halo Rings */}
            <div className="relative flex items-center justify-center w-52 h-52 sm:w-64 sm:h-64 mb-6">
              {/* Outer Counter-Rotating Filigree Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-dashed border-gold-metallic/40"
              />

              {/* Middle Spinning Golden Gradient Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 sm:inset-3 rounded-full border-2 border-transparent border-t-gold-metallic border-r-gold-champagne/90"
                style={{
                  boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)',
                }}
              />

              {/* Inner Pulsing Golden Halo (Pure Transparent with Soft Glow) */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-5 sm:inset-6 rounded-full border border-gold-metallic/30"
                style={{
                  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 75%)',
                }}
              />

              {/* The Official Peru Covering Logo (Transparent PNG, No Box Artifacts) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.82 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center p-2"
              >
                <img
                  src="/logo-transparent.png"
                  alt="Peru Covering Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_24px_rgba(212,175,55,0.55)]"
                />
              </motion.div>
            </div>

            {/* Brand Title with Wide Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.22em] uppercase gold-gradient-text leading-tight mb-2">
                Peru Covering
              </h1>

              {/* Gold Filigree Divider */}
              <div className="flex items-center justify-center gap-3 my-2 text-gold-metallic/70">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-metallic/60" />
                <span className="text-xs font-serif">❖</span>
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-metallic/60" />
              </div>

              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold-champagne font-light">
                Timeless Elegance • Everyday Luxury
              </p>
              {/* Address removed as requested */}
            </motion.div>
          </div>

          {/* Bottom Loading Progress & Skip Button */}
          <div className="w-full max-w-xs relative z-10 flex flex-col items-center space-y-4">
            {/* Thin Golden Progress Bar */}
            <div className="w-full space-y-1.5">
              <div className="w-full h-[2px] bg-gold-metallic/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-metallic via-gold-champagne to-gold-metallic rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[10px] text-gold-champagne/70 font-mono tracking-wider">
                <span>Entering Showroom</span>
                <span>{progress}%</span>
              </div>
            </div>

            {/* Skip / Enter Showroom Button */}
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gold-metallic/40 hover:border-gold-metallic text-gold-champagne hover:text-ivory bg-burgundy-surface/60 hover:bg-gold-metallic/15 text-[11px] uppercase tracking-[0.2em] transition-all"
            >
              <span>Enter Showroom</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SplashScreen;
