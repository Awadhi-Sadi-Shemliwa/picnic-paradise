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

// User Components
import UserNavbar from './Roles/user/UserNavbar';
import UserDashboard from './Roles/user/UserDashboard';
import CartPage from './Roles/user/CartPage';
import SupportPage from './Roles/user/SupportPage';

// Admin Components
import AdminNavbar from './Roles/admin/AdminNavbar';
import AdminDashboard from './Roles/admin/AdminDashboard';
import ManageEvents from './Roles/admin/ManageEvents';
import ManageUsers from './Roles/admin/ManageUsers';

// Support Components
import SupportDashboard from './Roles/support/SupportDashboard';
import ManageTickets from './Roles/support/ManageTickets';

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
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-slate-300 dark:via-gray-700 dark:to-blue-600">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<><Navbar /><HeroSection /><CategoryShowcase /><FeaturedEvents events={mockEvents} /><TestimonialsSection /><NewsletterSection /><Footer /></>} />
          <Route path="/events" element={<><Navbar /><div className="container mx-auto p-4"><EventFilters onFilter={(filters) => console.log('Filtered:', filters)} /><EventsGrid events={mockEvents} /></div><Footer /></>} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/events/:id" element={<EventCard event={mockEvents[0]} />} />
          <Route path="/categories" element={<><Navbar /><Categories /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/contacts" element={<><Navbar /><Contacts /><Footer /></>} />

          {/* User Routes */}
          <Route path="/user/*" element={<><UserNavbar /><UserDashboard /></>} />
          <Route path="/cart" element={<><UserNavbar /><CartPage /></>} />
          <Route path="/support" element={<><UserNavbar /><SupportPage /></>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<><AdminNavbar /><AdminDashboard /></>} />
          <Route path="/admin/events" element={<><AdminNavbar /><ManageEvents /></>} />
          <Route path="/admin/users" element={<><AdminNavbar /><ManageUsers /></>} />

          {/* Support Routes */}
          <Route path="/support-dashboard" element={<SupportDashboard />} />
          <Route path="/support/tickets" element={<ManageTickets />} />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
