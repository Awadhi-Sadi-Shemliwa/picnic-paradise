import React, { useState } from 'react';
import { CalendarIcon, MapPinIcon, UserGroupIcon, TagIcon } from '@heroicons/react/24/outline';

const EventDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const event = {
    id: 1,
    name: 'Summer Music Festival 2023',
    description: 'Join us for an unforgettable day of live music performances featuring top artists from around the world. Experience amazing food, drinks, and entertainment in a beautiful outdoor setting.',
    date: '2023-08-20',
    time: '12:00 PM',
    location: 'Central Park, New York',
    price: 150,
    category: 'Music Festivals',
    capacity: 1000,
    remainingTickets: 250,
    images: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.name}</h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  {event.location}
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  {event.remainingTickets} tickets remaining
                </div>
                <div className="flex items-center text-gray-600">
                  <TagIcon className="h-5 w-5 mr-2" />
                  {event.category}
                </div>
              </div>

              <p className="text-gray-600 mb-8">{event.description}</p>

              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">${event.price}</span>
                  <div className="flex items-center space-x-4">
                    <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Add to Cart - ${(event.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-8">
              {event.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;