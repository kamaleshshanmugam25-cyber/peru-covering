import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import ProductQuickView from './components/ProductQuickView';
import SearchModal from './components/SearchModal';

import Home from './pages/Home';
import CollectionsPage from './pages/CollectionsPage';
import ProductDetails from './pages/ProductDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';

// Scroll to top helper & GTM route tracker on React route change
function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track React route transitions in Google Tag Manager / Analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: pathname + search + hash,
        page_location: window.location.href,
        page_title: document.title
      });
    }
  }, [pathname, search, hash]);

  return null;
}

export function App() {
  // Splash screen displays on page load / refresh
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-burgundy-dark font-sans selection:bg-gold-metallic selection:text-burgundy-dark">
      {/* Royal Luxury Splash Screen */}
      {isLoading && <SplashScreen onComplete={handleLoadingComplete} />}

      <ScrollToTop />

      {/* Floating Oval Luxury Navbar */}
      <Navbar />

      {/* Page Routes */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      {/* Deep Burgundy Footer */}
      <Footer />

      {/* Interactive Global Overlays & Floating CTAs */}
      <WhatsAppButton />
      <CartDrawer />
      <ProductQuickView />
      <SearchModal />
    </div>
  );
}

export default App;
