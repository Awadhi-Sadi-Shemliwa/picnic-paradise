import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Heart, 
  Share2, 
  ChevronLeft, 
  ChevronRight,
  Check
} from 'lucide-react';
import { events } from '../data/mockData';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { format } from 'date-fns';
import { useAuth } from '../context/AuthContext';

const EventDetailPage = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === id);
  const { isAuthenticated, user } = useAuth();
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [attendees, setAttendees] = useState(1);
  const [isSaved, setIsSaved] = useState(
    isAuthenticated && user && user.savedEvents.includes(id || '')
  );
  
  if (!event) {
    return (
      <div className="py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Event Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The event you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/events">
            <Button>Browse Events</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const formattedDate = format(new Date(event.date), 'EEEE, MMMM d, yyyy');
  const allImages = [event.images.featured, ...event.images.gallery];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  
  const toggleSave = () => {
    setIsSaved(!isSaved);
    // In a real app, this would update the user's saved events
  };
  
  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };
  
  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };
  
  const handleBooking = () => {
    // In a real app, this would process the booking
    console.log('Booking for', attendees, 'attendees');
    closeBookingModal();
    // Redirect to confirmation page or show confirmation message
  };
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1">/</span>
                <Link to="/events" className="hover:text-primary">Events</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1">/</span>
                <Link to={`/categories/${event.category}`} className="hover:text-primary">
                  {event.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-1">/</span>
                <span className="text-gray-700 dark:text-gray-300" aria-current="page">
                  {event.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Event Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
              {event.title}
            </h1>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={toggleSave}
                leftIcon={<Heart size={18} fill={isSaved ? 'currentColor' : 'none'} />}
              >
                {isSaved ? 'Saved' : 'Save'}
              </Button>
              
              <Button
                variant="outline"
                leftIcon={<Share2 size={18} />}
              >
                Share
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mt-2">
            <div className="flex items-center text-yellow-500">
              <Star size={20} fill="currentColor" />
              <span className="ml-1 text-lg font-medium">{event.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-300">{event.reviews.length} reviews</span>
            
            {event.host.verified && (
              <>
                <span className="mx-2 text-gray-400">•</span>
                <Badge variant="success" className="flex items-center">
                  <Check size={12} className="mr-1" />
                  Verified Host
                </Badge>
              </>
            )}
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-10 relative">
          <div className="relative h-[60vh] overflow-hidden rounded-lg">
            <img 
              src={allImages[currentImageIndex]} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex mt-2 space-x-2 overflow-x-auto pb-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                  index === currentImageIndex ? 'ring-2 ring-primary' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${event.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                About This Event
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 whitespace-pre-line">
                {event.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Event Details
                  </h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-gray-600 dark:text-gray-400">{formattedDate}</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Clock size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-gray-600 dark:text-gray-400">{event.time}</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <MapPin size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {event.location.name}, {event.location.address}, {event.location.city}
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <Users size={18} className="text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {event.availableSpots} spots left out of {event.capacity}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                    Amenities
                  </h3>
                  
                  <ul className="space-y-2">
                    {event.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <Check size={16} className="text-primary mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Host Information */}
            <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                About Your Host
              </h2>
              
              <div className="flex items-center mb-4">
                <img 
                  src={event.host.image} 
                  alt={event.host.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {event.host.name}
                  </h3>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-gray-600 dark:text-gray-400">
                      {event.host.rating} • Host since 2023
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Professional event curator with a passion for creating unforgettable luxury experiences. Specializing in {event.category.split('-').join(' ')} events that combine elegance with entertainment.
              </p>
              
              <Button variant="outline" size="sm">
                Contact Host
              </Button>
            </div>
            
            {/* Reviews */}
            <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Reviews
              </h2>
              
              {event.reviews.length > 0 ? (
                <div className="space-y-6">
                  {event.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center mb-3">
                        <img 
                          src={review.userImage} 
                          alt={review.userName}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {review.userName}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span>{format(new Date(review.date), 'MMM d, yyyy')}</span>
                            {review.verified && (
                              <>
                                <span className="mx-1">•</span>
                                <Badge variant="success" size="sm" className="flex items-center">
                                  <Check size={10} className="mr-1" />
                                  Verified Booking
                                </Badge>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  No reviews yet. Be the first to review this event!
                </p>
              )}
            </div>
          </div>
          
          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-secondary rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${event.price}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  per person
                </div>
              </div>
              
              <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Date</div>
                  <div>{formattedDate}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="font-medium">Time</div>
                  <div>{event.time}</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Available Spots</div>
                  <div className="text-green-600 dark:text-green-400">
                    {event.availableSpots} left
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full" 
                    style={{ width: `${(event.availableSpots / event.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <Button 
                onClick={openBookingModal}
                fullWidth
                size="lg"
              >
                Reserve a Spot
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                You won't be charged yet
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-secondary rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Reserve Your Spot
                </h3>
                <button
                  onClick={closeBookingModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  {event.title}
                </h4>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <Calendar size={16} className="mr-1" />
                  <span>{formattedDate} • {event.time}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block font-medium text-gray-900 dark:text-white mb-2">
                  Number of Attendees
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setAttendees(Math.max(1, attendees - 1))}
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded-l-md"
                    disabled={attendees <= 1}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-700 text-center min-w-[60px]">
                    {attendees}
                  </div>
                  <button
                    onClick={() => setAttendees(Math.min(event.availableSpots, attendees + 1))}
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded-r-md"
                    disabled={attendees >= event.availableSpots}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-600 dark:text-gray-300">
                    ${event.price} x {attendees} {attendees === 1 ? 'person' : 'people'}
                  </div>
                  <div className="font-medium">${event.price * attendees}</div>
                </div>
                <div className="flex justify-between mb-2">
                  <div className="text-gray-600 dark:text-gray-300">Service fee</div>
                  <div className="font-medium">${Math.round(event.price * attendees * 0.1)}</div>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="font-bold text-gray-900 dark:text-white">Total</div>
                  <div className="font-bold text-gray-900 dark:text-white">
                    ${event.price * attendees + Math.round(event.price * attendees * 0.1)}
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleBooking}
                fullWidth
                size="lg"
              >
                Confirm Booking
              </Button>
              
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                By confirming, you agree to the <Link to="/terms" className="text-primary">Terms of Service</Link> and <Link to="/privacy" className="text-primary">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;