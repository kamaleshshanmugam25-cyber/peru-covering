import React from 'react';
import Hero from '../components/Hero';
import Collections from '../components/Collections';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export const Home = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Collections />
      <FeaturedProducts />
      <About />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
};
export default Home;
