import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/mockData';
import { Palette, Utensils, Tv, Wine, ChefHat, UtensilsCrossed } from 'lucide-react';

const CategoryShowcase = () => {
  // Map category IDs to Lucide icons
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Palette':
        return <Palette size={24} />;
      case 'Utensils':
        return <Utensils size={24} />;
      case 'Tv':
        return <Tv size={24} />;
      case 'Wine':
        return <Wine size={24} />;
      case 'ChefHat':
        return <ChefHat size={24} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={24} />;
      default:
        return <Palette size={24} />;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400 dark:bg-gradient-to-br dark:from-purple-700 dark:via-blue-700 dark:to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Explore Premium Experiences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated selection of luxury entertainment categories, each offering unique and unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="group"
            >
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary">
                      {getCategoryIcon(category.icon)}
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-1">{category.name}</h3>
                  <p className="text-gray-200 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;