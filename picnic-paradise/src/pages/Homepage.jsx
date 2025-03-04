import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedEvents from '../components/home/FeaturedEvents';
import CategoryShowcase from '../components/home/CategoryShowcase';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import { events } from '../data/mockData';

const HomePage = () => {
  // Get featured events
  const featuredEvents = events.filter(event => event.featured);
  
  return (
    <div>
      <HeroSection />
      <FeaturedEvents events={featuredEvents} />
      <CategoryShowcase />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;