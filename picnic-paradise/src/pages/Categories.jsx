import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';
import { Palette, Utensils, Tv, Wine, ChefHat, UtensilsCrossed } from 'lucide-react';

const CategoriesPage = () => {
  // Map category IDs to Lucide icons
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Palette':
        return <Palette size={32} />;
      case 'Utensils':
        return <Utensils size={32} />;
      case 'Tv':
        return <Tv size={32} />;
      case 'Wine':
        return <Wine size={32} />;
      case 'ChefHat':
        return <ChefHat size={32} />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={32} />;
      default:
        return <Palette size={32} />;
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Explore Experience Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our curated selection of premium entertainment categories, each offering unique and unforgettable experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="group"
            >
              <div className="bg-white dark:bg-secondary rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                <div className="relative h-64">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h2 className="text-2xl font-serif font-bold text-white mb-1">{category.name}</h2>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {getCategoryIcon(category.icon)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                    {category.description}. Explore our selection of premium {category.name.toLowerCase()} experiences curated for those who appreciate the finer things in life.
                  </p>
                  
                  <div className="text-primary font-medium flex items-center group-hover:underline">
                    Explore {category.name}
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;