import React from 'react';
import Contact from '../components/Contact';
import { Sparkles, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="pt-24 pb-20 bg-ivory min-h-screen text-burgundy-dark text-left">
      {/* Editorial Header */}
      <div className="bg-burgundy-dark text-ivory py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden mb-12 text-center">
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold-metallic" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-champagne font-semibold">
              Tiruchirappalli Destination
            </span>
            <Sparkles className="w-4 h-4 text-gold-metallic" />
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold uppercase tracking-wider mb-4">
            Visit Our <span className="gold-gradient-text italic font-serif">Showroom</span>
          </h1>

          <p className="text-ivory-soft/80 text-sm sm:text-base font-light max-w-xl mx-auto">
            19/14, Jaffrasha Street, Trichy, Tamil Nadu. Connect with us for personal bridal consultations, bulk orders, or custom jewellery plating.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <Contact />

        {/* Directions & Travel Guide */}
        <div className="mt-16 bg-white p-8 sm:p-12 rounded-2xl border border-gold-metallic/30 shadow-sm space-y-6">
          <h3 className="font-serif text-2xl font-bold text-burgundy-dark">
            How to Reach Peru Covering
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-burgundy-dark/80 font-light">
            <div className="space-y-2 p-4 rounded-lg bg-ivory-warm border border-gold-metallic/15">
              <h4 className="font-semibold text-burgundy-dark text-sm">🚆 From Trichy Railway Station</h4>
              <p>
                Just 4.5 km from Tiruchirappalli Junction. Auto-rickshaws and city buses towards Big Bazaar / Rockfort area reach Jaffrasha Street in 15 minutes.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-ivory-warm border border-gold-metallic/15">
              <h4 className="font-semibold text-burgundy-dark text-sm">🛕 Landmark & Vicinity</h4>
              <p>
                Situated in Trichy’s historic jewellery hub on Jaffrasha Street, adjacent to Big Bazaar Street and near the famous Rockfort Temple entrance.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-ivory-warm border border-gold-metallic/15">
              <h4 className="font-semibold text-burgundy-dark text-sm">📞 Direct Store Line</h4>
              <p>
                Need directions on arrival? Call our store helpline at <strong>+91 63806 23621</strong> and our staff will guide you immediately to our doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
