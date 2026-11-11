import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    jewelleryType: 'Bridal Jewellery',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Direct WhatsApp dispatch with user details
    const text = `*New Store Enquiry - Peru Covering*\nName: ${formData.name}\nPhone: ${formData.phone}\nInterested in: ${formData.jewelleryType}\nMessage: ${formData.message || 'I would like to schedule a store visit or see designs.'}`;
    const url = `https://wa.me/916380623621?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <MapPin className="w-4 h-4 text-gold-dark" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Showroom & Workshop
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-burgundy-dark uppercase tracking-wider mb-4"
          >
            Visit Our <span className="font-serif italic font-normal text-gold-dark">Store</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-burgundy-dark/70 text-sm sm:text-base font-light max-w-xl mx-auto"
          >
            Experience the royal gold covering collection in person at our Trichy showroom. Our experts look forward to welcoming you.
          </motion.p>
        </div>

        {/* 2-Column Grid: Store Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Store Details & Google Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gold-metallic/30 shadow-sm space-y-6 text-left">
              <div className="flex items-center gap-3 pb-6 border-b border-gold-metallic/15">
                <div className="w-12 h-12 rounded-full border border-gold-metallic/40 p-1 bg-burgundy-surface overflow-hidden shrink-0">
                  <img src="/logo.png" alt="Peru Covering" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-burgundy-dark tracking-wide uppercase">
                    Peru Covering
                  </h3>
                  <p className="text-xs text-gold-dark font-medium uppercase tracking-widest">
                    Gold Covering Jewellery
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-1">
                    Store Address
                  </h4>
                  <p className="text-sm sm:text-base text-burgundy-dark font-medium leading-relaxed">
                    19/14, Jaffrasha Street,<br />
                    Trichy, Tamil Nadu, India.
                  </p>
                  <p className="text-xs text-burgundy-dark/60 mt-1">
                    (Heart of Trichy jewellery market)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-1">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href="tel:6380623621"
                    className="text-base sm:text-lg font-bold text-burgundy-dark hover:text-gold-dark transition-colors"
                  >
                    +91 63806 23621
                  </a>
                  <p className="text-xs text-burgundy-dark/60 mt-0.5">
                    Available Monday to Sunday for enquiries
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-burgundy-dark text-gold-metallic flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-1">
                    Showroom Timings
                  </h4>
                  <p className="text-sm text-burgundy-dark font-medium">
                    10:00 AM – 09:00 PM (Daily)
                  </p>
                  <p className="text-xs text-burgundy-dark/60 mt-0.5">
                    Open all 7 days for bridal consultations
                  </p>
                </div>
              </div>

              {/* Action Buttons: Click-to-Call + WhatsApp */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold-metallic/15">
                <a
                  href="tel:6380623621"
                  className="py-3 px-4 rounded bg-burgundy-dark hover:bg-burgundy text-gold-champagne font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-gold-metallic" />
                  <span>Call Us</span>
                </a>

                <a
                  href="https://wa.me/916380623621?text=Hello%20Peru%20Covering,%20I%20would%20like%20to%20visit%20your%20Trichy%20store."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="rounded-2xl overflow-hidden border border-gold-metallic/30 shadow-sm aspect-[16/9] bg-white">
              <iframe
                title="Peru Covering Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.736636735503!2d78.6948512!3d10.8271501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf507b971a811%3A0x6b7729de172e259b!2sJaffersha%20St%2C%20Tiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Contact & Bridal Consultation Form */}
          <div className="lg:col-span-6 bg-burgundy-dark text-ivory p-8 sm:p-10 rounded-2xl border border-gold-metallic/35 shadow-burgundy-lg text-left relative">
            <div className="mb-8">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold-champagne font-semibold block mb-2">
                Personalized Service
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-wide text-ivory">
                Send an <span className="gold-gradient-text italic font-serif">Enquiry</span>
              </h3>
              <p className="text-xs text-ivory-soft/80 mt-2 font-light">
                Fill in your requirements below. We will connect with you with custom catalogues, design photographs, and pricing.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-gold-champagne">
                  Enquiry Received!
                </h4>
                <p className="text-sm text-ivory-soft/90 max-w-md mx-auto font-light leading-relaxed">
                  Thank you! We are redirecting you to our official WhatsApp (6380623621) with your saved details so our jewellery specialists can assist you instantly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded border border-gold-metallic text-xs uppercase tracking-wider text-gold-champagne"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-champagne mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded bg-burgundy-surface border border-gold-metallic/30 text-ivory placeholder-ivory-soft/40 focus:outline-none focus:border-gold-metallic text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-champagne mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 6380623621"
                    className="w-full px-4 py-3 rounded bg-burgundy-surface border border-gold-metallic/30 text-ivory placeholder-ivory-soft/40 focus:outline-none focus:border-gold-metallic text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-champagne mb-2">
                    Jewellery Category of Interest
                  </label>
                  <select
                    value={formData.jewelleryType}
                    onChange={(e) => setFormData({ ...formData, jewelleryType: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-burgundy-surface border border-gold-metallic/30 text-ivory focus:outline-none focus:border-gold-metallic text-sm"
                  >
                    <option value="Bridal Jewellery">Bridal Jewellery Sets</option>
                    <option value="Necklace Sets">Necklace Sets & Chokers</option>
                    <option value="Antique Jewellery">Antique Temple Jewellery</option>
                    <option value="Bangles">Bangles & Kadas</option>
                    <option value="Earrings">Jhumkas & Chandbalis</option>
                    <option value="Chains">Gold Covering Chains & Mugappu</option>
                    <option value="Rings">Finger Rings</option>
                    <option value="Custom Order">Bespoke Custom Plating Order</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-gold-champagne mb-2">
                    Message or Design Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you are looking for (e.g., Wedding date, design preferences, budget range)..."
                    className="w-full px-4 py-3 rounded bg-burgundy-surface border border-gold-metallic/30 text-ivory placeholder-ivory-soft/40 focus:outline-none focus:border-gold-metallic text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded bg-gradient-to-r from-gold-metallic via-gold-champagne to-gold-metallic text-burgundy-dark font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-gold-sm hover:brightness-105 transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                <p className="text-[10px] text-center text-ivory-soft/60">
                  🔒 We protect your privacy. Your information is never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
