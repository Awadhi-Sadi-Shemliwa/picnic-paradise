import React from 'react';
import EventCard from './EventCard';
import { Event } from '../../types';

const EventsGrid = ({ 
  events, 
  savedEvents = [],
  onToggleSave
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400 p-4">
      {events.map((event) => (
        <EventCard 
          key={event.id} 
          event={event} 
          isSaved={savedEvents.includes(event.id)}
          onToggleSave={onToggleSave}
        />
      ))}
    </div>
  );
};

export default EventsGrid;