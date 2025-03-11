import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-slate-300 dark:via-gray-700 dark:to-blue-800">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
            <span className="block">Discover Luxury</span>
            <span className="block text-primary">Entertainment Experiences</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8">
            Curated premium events for those who appreciate the finer things in life. From exclusive sip & paint sessions to luxury picnics and VIP match screenings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 text-white/70">
            <Link to="/events" className="flex-grow sm:flex-grow-0">
              <Button size="lg" fullWidth>
                Explore Events
              </Button>
            </Link>
            <Link to="/categories" className="flex-grow sm:flex-grow-0">
              <Button variant="outline" size="lg" fullWidth>
                Browse Categories
              </Button>
            </Link>

{/* roles overview */}
            <Link to="/user" className="flex-grow sm:flex-grow-0">
              <Button size="lg" fullWidth>
                 USER 
              </Button>
            </Link>

            <Link to="/admin" className="flex-grow sm:flex-grow-0">
              <Button size="lg" fullWidth>
                ADMIN 
              </Button>
            </Link>

            <Link to="/support-dashboard" className="flex-grow sm:flex-grow-0">
              <Button size="lg" fullWidth>
                SUPPORT
              </Button>
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="relative max-w-lg">
            <input
              type="text"
              placeholder="Search for events, categories, or locations..."
              className="w-full h-14 pl-12 pr-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;