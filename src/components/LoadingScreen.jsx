import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Elegant, short and professional duration (1.8s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 600);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Subtle floating golden particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 2 + 2,
    delay: Math.random() * 0.8,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-burgundy-dark overflow-hidden"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #450A18 0%, #2B0710 60%, #170308 100%)',
          }}
        >
          {/* Subtle Golden Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.2, 0.5],
                  y: [0, -30],
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
                  background: 'radial-gradient(circle, #FFF4D0 0%, #D4AF37 80%)',
                  boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                }}
              />
            ))}
          </div>

          {/* Central Logo Container */}
          <div className="relative flex flex-col items-center z-10 px-6">
            {/* Thin Golden Circular Loading Ring */}
            <div className="relative flex items-center justify-center w-44 h-44 sm:w-56 sm:h-56">
              {/* Spinning outer golden ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-gold-metallic/30 border-t-gold-metallic border-r-gold-champagne/80"
                style={{
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.25)',
                }}
              />

              {/* Pulsing inner golden glow */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-3 rounded-full border border-gold-metallic/20"
              />

              {/* The Official Peru Covering Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center p-2 rounded-full overflow-hidden"
              >
                <img
                  src="/logo.png"
                  alt="Peru Covering Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)]"
                />
              </motion.div>
            </div>

            {/* Brand Title & Tagline with Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="text-center mt-6"
            >
              <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] gold-gradient-text uppercase font-semibold">
                Peru Covering
              </h2>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-gold-metallic/60"></span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-champagne/90 font-light">
                  Gold Covering Jewellery • Trichy
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-gold-metallic/60"></span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default LoadingScreen;
