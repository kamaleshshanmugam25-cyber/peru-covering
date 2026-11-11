import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ShieldCheck } from 'lucide-react';
import { useCartWishlist } from '../context/CartWishlistContext';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, getWhatsAppCartUrl } =
    useCartWishlist();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 text-burgundy-dark"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-gold-metallic/20 bg-burgundy-dark text-ivory flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-gold-metallic" />
                <h3 className="font-serif text-lg uppercase tracking-wider font-bold">
                  Your Jewellery Bag ({cart.length})
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-gold-champagne hover:text-white rounded-full border border-gold-metallic/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-ivory-warm border border-gold-metallic/30 flex items-center justify-center text-gold-dark">
                    <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-burgundy-dark">
                    Your bag is empty
                  </h4>
                  <p className="text-xs text-burgundy-dark/60 max-w-xs font-light">
                    Explore our handcrafted gold covering jewellery sets and add your favorites to order via WhatsApp.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-6 py-2.5 rounded bg-burgundy-dark text-gold-champagne text-xs uppercase tracking-widest font-semibold"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-lg border border-gold-metallic/20 bg-ivory-pure hover:border-gold-metallic/50 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-ivory-warm border border-gold-metallic/20 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-serif text-sm font-bold text-burgundy-dark line-clamp-1">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700 p-0.5"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] uppercase tracking-wider text-gold-dark font-medium mt-0.5">
                          {item.category}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm font-bold text-burgundy-dark">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center border border-gold-metallic/30 rounded bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gold-metallic/10 text-burgundy-dark"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gold-metallic/10 text-burgundy-dark"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer with WhatsApp Checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-gold-metallic/20 bg-ivory-warm space-y-4">
                <div className="flex items-center justify-between text-base font-bold text-burgundy-dark">
                  <span>Subtotal Amount:</span>
                  <span className="font-serif text-xl text-burgundy-dark">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free express delivery & 1-Year Polish Guarantee included.</span>
                </div>

                <a
                  href={getWhatsAppCartUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Checkout on WhatsApp</span>
                </a>

                <p className="text-[10px] text-center text-burgundy-dark/60">
                  Sends full list & total to official WhatsApp (6380623621)
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
export default CartDrawer;
