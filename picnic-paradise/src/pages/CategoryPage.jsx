import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EventsGrid from '../components/events/EventsGrid';
import EventFilters from '../components/events/EventFilters';
import { events, categories } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const CategoryPage = () => {
  const { id } = useParams();
  const category = categories.find(c => c.id === id);
  const categoryEvents = events.filter(event => event.category === id);
  
  const { isAuthenticated, user } = useAuth();
  const savedEvents = isAuthenticated && user ? user.savedEvents : [];
  
  if (!category) {
    return (
      <div className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The category you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/categories">
            <button className="bg-primary text-white px-6 py-2 rounded-md">
              Browse Categories
            </button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleFilter = (filters) => {
    console.log('Filters applied:', filters);
    // In a real app, this would filter the events
  };
  
  const handleToggleSave = (eventId) => {
    console.log('Toggle save for event:', eventId);
    // In a real app, this would update the user's saved events
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <Link to="/categories" className="flex items-center text-white mb-4 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to Categories</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            {category.name}
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>
      
      {/* Events Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
              {category.name} Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our curated selection of {category.name.toLowerCase()} experiences
            </p>
          </div>
          
          <EventFilters onFilter={handleFilter} />
          
          {categoryEvents.length > 0 ? (
            <EventsGrid 
              events={categoryEvents} 
              savedEvents={savedEvents}
              onToggleSave={isAuthenticated ? handleToggleSave : undefined}
            />
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                No events found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                There are currently no {category.name.toLowerCase()} events available. Please check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;