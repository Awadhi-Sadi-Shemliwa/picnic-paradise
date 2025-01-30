import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import image from '../assets/image.png';
import Navbar from "./Navbar";

const LandingPage = () => {
  const offerings = [
    { title: 'Gourmet Food', id: 1 },
    { title: 'Eco-Products', id: 2 },
    { title: 'Luxurious Locations', id: 3 },
    { title: 'Custom Themes', id: 4 },
    { title: 'Social Media Ready', id: 5 },
    { title: 'Superior Service', id: 6 }
  ];

  const packages = [
    {
      title: 'Romance Package',
      price: '49.99',
      features: ['Gourmet Food', 'Custom Themes', 'Luxurious Locations']
    },
    {
      title: 'Individual Package',
      price: '14.99',
      features: ['Gourmet Food', 'Custom Themes', 'Social Media Ready']
    },
    {
      title: 'Organization Package',
      price: '69.99',
      features: ['Gourmet Food', 'Custom Themes', 'Superior Service', 'Eco-Products']
    },
    {
      title: 'Family Package',
      price: '39.99',
      features: ['Gourmet Food', 'Custom Themes', 'Eco-Products', 'Family games']
    }
  ];

  return (
  
    <div className="min-h-screen bg-pink-50">
        <div>
      <Navbar />
      </div>
      {/* Hero Section with Image and Text Overlay */}
      <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96">
        {/* Image */}
        <img 
          src={image}
          alt="Picnic Paradise Hero"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white drop-shadow-lg">
            PICNIC PARADISE
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {offerings.map(offering => (
            <div 
              key={offering.id} 
              className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-gray-800 font-medium text-base sm:text-lg text-center">{offering.title}</h3>
            </div>
          ))}
        </div>

        {/* Who Are We Section */}
        <div className="bg-white rounded-lg p-4 sm:p-8 mb-8 sm:mb-12 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Who Are We</h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center">
            Picnic Paradise is a premium event planning and catering service that 
            specializes in unique picnic experiences.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700 text-sm sm:text-base italic text-center">
              "Let's go where the Wi-Fi is weak and the days are long. Create unforgettable multitasking experiences—eating, living & loving. Time to hit up nature. The sounds of nature make a picnic even more magical."
            </p>
            <p className="text-gray-700 text-sm sm:text-base italic text-center">
              "Our love is like a picnic— simple, full of surprises, always outdoors. For some people with food love, this is a dream."
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">JOIN US!</h2>
          <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg px-2">
            Exceptional picnic and catering services are only a click away!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
              Book Now
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-8 sm:mb-16">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center">{pkg.title}</h3>
              <p className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-pink-500">${pkg.price}/Month</p>
              <ul className="mb-4 sm:mb-6 space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 text-sm sm:text-base flex items-center justify-center">
                    <span className="mr-2">•</span>{feature}
                  </li>
                ))}
              </ul>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg w-full transition-colors text-sm sm:text-base">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-center space-x-4 sm:space-x-6 pb-6 sm:pb-8">
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
            <Instagram size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
            <Twitter size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;