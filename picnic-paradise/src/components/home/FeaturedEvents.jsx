import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventsGrid from '../events/EventsGrid';
import { useAuth } from '../../context/AuthContext';

const FeaturedEvents = ({ 
  events, 
  title = "Featured Events",
  showViewAll = true
}) => {
  const { isAuthenticated, user } = useAuth();
  const savedEvents = isAuthenticated && user ? user.savedEvents : [];
  
  return (
    <section className="py-12 bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          
          {showViewAll && (
            <Link 
              to="/events" 
              className="flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <span className="mr-1">View All</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
        
        <EventsGrid 
          events={events} 
          savedEvents={savedEvents}
          onToggleSave={isAuthenticated ? (id) => console.log('Toggle save:', id) : undefined}
        />
      </div>
    </section>
  );
};

export default FeaturedEvents;