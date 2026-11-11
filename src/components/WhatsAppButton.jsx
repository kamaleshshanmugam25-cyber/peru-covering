import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phone = '6380623621';

  const handleSend = (text) => {
    const finalMsg = text || customMsg || 'Hello Peru Covering, I am interested in your jewellery collection. Please share designs and details.';
    const url = `https://wa.me/91${phone}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button Container (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Quick Chat Popup */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="mb-4 w-80 sm:w-88 bg-burgundy-dark rounded-2xl border border-gold-metallic/40 shadow-2xl overflow-hidden text-ivory text-left"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-burgundy-surface to-burgundy-dark p-4 border-b border-gold-metallic/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full border border-gold-metallic/50 p-0.5 bg-burgundy-dark overflow-hidden">
                    <img src="/logo.png" alt="Peru Covering" className="w-full h-full object-contain" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-burgundy-dark" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-ivory uppercase tracking-wider">
                      Peru Covering
                    </h4>
                    <p className="text-[10px] text-emerald-400 font-medium">Online • Trichy Store</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gold-champagne hover:text-white rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3 text-xs">
                <div className="bg-burgundy-surface/90 border border-gold-metallic/20 p-3 rounded-xl text-ivory-soft/90 leading-relaxed font-light">
                  <p className="font-medium text-gold-champagne mb-1">Vanakkam! Welcome to Peru Covering 🙏</p>
                  <p>How may we assist you with our Gold Covering Jewellery today?</p>
                </div>

                {/* Quick Prompts */}
                <div className="space-y-1.5 pt-1">
                  <button
                    onClick={() => handleSend('Hello Peru Covering, I would like to see your Bridal Jewellery collection.')}
                    className="w-full text-left p-2 rounded bg-burgundy-surface/50 hover:bg-gold-metallic/15 border border-gold-metallic/20 text-gold-champagne text-[11px] transition-colors"
                  >
                    👰 View Bridal Jewellery Collection
                  </button>
                  <button
                    onClick={() => handleSend('Hello Peru Covering, I want to inquire about daily wear bangles and chains.')}
                    className="w-full text-left p-2 rounded bg-burgundy-surface/50 hover:bg-gold-metallic/15 border border-gold-metallic/20 text-gold-champagne text-[11px] transition-colors"
                  >
                    ✨ Daily Wear Bangles & Chains
                  </button>
                  <button
                    onClick={() => handleSend('Hello Peru Covering, I would like to visit your 19/14 Jaffrasha Street store in Trichy.')}
                    className="w-full text-left p-2 rounded bg-burgundy-surface/50 hover:bg-gold-metallic/15 border border-gold-metallic/20 text-gold-champagne text-[11px] transition-colors"
                  >
                    📍 Store Visit & Directions
                  </button>
                </div>

                {/* Input box */}
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 px-3 py-2 rounded bg-burgundy-surface border border-gold-metallic/30 text-xs text-ivory placeholder-ivory-soft/40 focus:outline-none focus:border-gold-metallic"
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <button
                    onClick={() => handleSend()}
                    className="p-2 rounded bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-2.5 bg-burgundy-surface/80 text-[10px] text-center text-gold-champagne/70 border-t border-gold-metallic/15">
                Official WhatsApp: +91 6380623621
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Bubble */}
        <div className="relative">
          {/* Subtle Outer Pulsating Ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Contact on WhatsApp"
            className="relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-2xl border-2 border-gold-metallic hover:scale-105 active:scale-95 transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6 fill-current text-white shrink-0 group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-sm tracking-wider uppercase font-semibold hidden sm:inline-block">
              WhatsApp Us
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
export default WhatsAppButton;
