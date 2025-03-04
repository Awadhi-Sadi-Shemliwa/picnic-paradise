import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400 dark:bg-gradient-to-br dark:from-purple-700 dark:via-blue-700 dark:to-blue-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Luxe Events</h3>
            <p className="text-gray-300 mb-4">
              Curating premium entertainment experiences for those who appreciate the finer things in life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-primary transition-colors">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/sip-and-paint" className="text-gray-300 hover:text-primary transition-colors">
                  Sip & Paint
                </Link>
              </li>
              <li>
                <Link to="/categories/luxury-picnics" className="text-gray-300 hover:text-primary transition-colors">
                  Luxury Picnics
                </Link>
              </li>
              <li>
                <Link to="/categories/match-screenings" className="text-gray-300 hover:text-primary transition-colors">
                  Big Match Screenings
                </Link>
              </li>
              <li>
                <Link to="/categories/wine-tasting" className="text-gray-300 hover:text-primary transition-colors">
                  Wine Tasting
                </Link>
              </li>
              <li>
                <Link to="/categories/cooking-class" className="text-gray-300 hover:text-primary transition-colors">
                  Cooking Classes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary mt-0.5" />
                <span className="text-gray-300">
                  123 Luxury Avenue, Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <span className="text-gray-300">info@luxeevents.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Luxe Events. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/faq" className="text-gray-400 text-sm hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;