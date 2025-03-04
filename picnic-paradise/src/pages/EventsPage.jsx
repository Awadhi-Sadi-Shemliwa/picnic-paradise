import React, { useState } from 'react';
import EventsGrid from '../components/events/EventsGrid';
import EventFilters from '../components/events/EventFilters';
import { events } from '../data/mockData';
import { useAuth } from '../context/AuthContext';

const EventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const { isAuthenticated, user } = useAuth();
  const savedEvents = isAuthenticated && user ? user.savedEvents : [];
  
  const handleFilter = (filters) => {
    let results = [...events];
    
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(event => 
        event.title.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm) ||
        event.location.city.toLowerCase().includes(searchTerm)
      );
    }
    
    // Filter by categories
    if (filters.categories.length > 0) {
      results = results.filter(event => 
        filters.categories.includes(event.category)
      );
    }
    
    // Filter by price range
    results = results.filter(event => 
      event.price >= filters.priceRange[0] && 
      event.price <= filters.priceRange[1]
    );
    
    // Filter by date
    if (filters.date) {
      results = results.filter(event => 
        new Date(event.date) >= new Date(filters.date)
      );
    }
    
    // Filter by location
    if (filters.location) {
      const locationTerm = filters.location.toLowerCase();
      results = results.filter(event => 
        event.location.city.toLowerCase().includes(locationTerm) ||
        event.location.name.toLowerCase().includes(locationTerm)
      );
    }
    
    setFilteredEvents(results);
  };
  
  const handleToggleSave = (eventId) => {
    console.log('Toggle save for event:', eventId);
    // In a real app, this would update the user's saved events
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-2">
            Discover Experiences
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Browse our curated selection of premium entertainment events
          </p>
        </div>
        
        <EventFilters onFilter={handleFilter} />
        
        {filteredEvents.length > 0 ? (
          <EventsGrid 
            events={filteredEvents} 
            savedEvents={savedEvents}
            onToggleSave={isAuthenticated ? handleToggleSave : undefined}
          />
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsPage;