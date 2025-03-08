import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategoryShowcase from './components/home/CategoryShowcase';
import FeaturedEvents from './components/home/FeaturedEvents';
import EventsGrid from './components/events/EventsGrid';
import EventCard from './components/events/EventCard';
import EventFilters from './components/events/EventFilters';
import TestimonialsSection from './components/home/TestimonialsSection';
import NewsletterSection from './components/home/NewsletterSection';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Categories from './components/categories/Categories';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
// import Button from './components/ui/Button';
// import Card from './components/ui/Card';
// import Input from './components/ui/Input';
// import Badge from './components/ui/Badge';

// Mock data for demonstration (replace with actual data or API calls)
const mockEvents = [
  {
    id: '1',
    title: 'Luxury Sip & Paint',
    date: new Date().toISOString(),
    time: '7:00 PM',
    location: { city: 'New York' },
    images: { thumbnail: 'https://example.com/thumbnail.jpg' },
    shortDescription: 'An exclusive evening of art and wine.',
    rating: 4.5,
    reviews: [],
    availableSpots: 10,
    price: 99.99,
    featured: true,
  },
  {
    id: '1',
    title: 'Luxury Sip & Paint',
    date: new Date().toISOString(),
    time: '7:00 PM',
    location: { city: 'New York' },
    images: { thumbnail: 'https://example.com/thumbnail.jpg' },
    shortDescription: 'An exclusive evening of art and wine.',
    rating: 4.5,
    reviews: [],
    availableSpots: 10,
    price: 99.99,
    featured: true,
  },
  {
    id: '1',
    title: 'Luxury Sip & Paint',
    date: new Date().toISOString(),
    time: '7:00 PM',
    location: { city: 'New York' },
    images: { thumbnail: 'https://example.com/thumbnail.jpg' },
    shortDescription: 'An exclusive evening of art and wine.',
    rating: 4.5,
    reviews: [],
    availableSpots: 10,
    price: 99.99,
    featured: true,
  },
  // Add more mock events as needed
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-slate-300 dark:via-gray-700 dark:to-blue-600">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <CategoryShowcase />
                <FeaturedEvents events={mockEvents} />
                <TestimonialsSection />
                <NewsletterSection />
              </>
            } />
            <Route path="/events" element={
              <div className="container mx-auto p-4">
                <EventFilters onFilter={(filters) => console.log('Filtered:', filters)} />
                <EventsGrid events={mockEvents} />
              </div>
            } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/events/:id" element={<EventCard event={mockEvents[0]} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
