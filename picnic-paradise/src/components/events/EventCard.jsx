import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Star, Users, Heart } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { format } from 'date-fns';
import image1 from '../../assets/event1.jpg';

const EventCard = ({ 
  event, 
  isSaved = false,
  onToggleSave
}) => {
  const formattedDate = format(new Date(event.date), 'MMM d, yyyy');
  
  const handleSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleSave) {
      onToggleSave(event.id);
    }
  };
  
  return (
    <Link to={`/events/${event.id}`}>
      <Card 
        hoverable 
        premium={event.featured}
        className="h-full flex flex-col bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300"
      >
        <div className="relative">
          <img 
            src={image1} 
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          {event.featured && (
            <Badge 
              variant="primary" 
              className="absolute top-2 left-2"
            >
              Featured
            </Badge>
          )}
          {onToggleSave && (
            <button
              onClick={handleSaveClick}
              className={`absolute top-2 right-2 p-2 rounded-full ${
                isSaved 
                  ? 'bg-primary text-white' 
                  : 'bg-black/30 text-white hover:bg-black/50'
              }`}
              aria-label={isSaved ? 'Remove from saved' : 'Save event'}
            >
              <Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />
            </button>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex items-center text-white">
              <Star size={16} className="text-yellow-400 mr-1" />
              <span>{event.rating}</span>
              <span className="mx-1">•</span>
              <span className="text-sm">{event.reviews.length} reviews</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1 line-clamp-1">
            {event.title}
          </h3>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <Calendar size={14} className="mr-1" />
            <span>{formattedDate}</span>
            <span className="mx-1">•</span>
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <MapPin size={14} className="mr-1" />
            <span>{event.location.city}</span>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
            {event.shortDescription}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Users size={14} className="mr-1" />
              <span>{event.availableSpots} spots left</span>
            </div>
            <div className="text-primary font-medium">
              ${event.price}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default EventCard;