import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { categories } from '../../data/mockData';
import { EventCategory } from '../../types';

const EventFilters = ({ 
  onFilter,
  initialFilters = {}
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: initialFilters.search || '',
    categories: initialFilters.categories || [],
    priceRange: initialFilters.priceRange || [0, 500],
    date: initialFilters.date || null,
    location: initialFilters.location || '',
  });

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryToggle = (category) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    setFilters({ ...filters, categories: updatedCategories });
  };

  const handlePriceChange = (index, value) => {
    const newPriceRange = [...filters.priceRange];
    newPriceRange[index] = value;
    setFilters({ ...filters, priceRange: newPriceRange });
  };

  const handleDateChange = (e) => {
    setFilters({ ...filters, date: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleApplyFilters = () => {
    onFilter(filters);
    setIsOpen(false);
  };

  const handleResetFilters = () => {
    const resetFilters = {
      search: '',
      categories: [],
      priceRange: [0, 500],
      date: null,
      location: '',
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  };

  return (
    <div className="mb-8 bg-gradient-to-br from-purple-300 via-blue-300 to-blue-400 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow">
          <Input
            placeholder="Search events..."
            value={filters.search}
            onChange={handleSearchChange}
            leftIcon={<Search size={18} className="text-gray-400" />}
            fullWidth
          />
        </div>
        <Button
          onClick={toggleFilter}
          variant="outline"
          leftIcon={<Filter size={18} />}
        >
          Filters
        </Button>
      </div>

      {isOpen && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Filter Events</h3>
            <button
              onClick={toggleFilter}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Categories */}
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.id)}
                      onChange={() => handleCategoryToggle(category.id)}
                      className="rounded text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-sm">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Min Price: ${filters.priceRange[0]}</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(0, parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Max Price: ${filters.priceRange[1]}</label>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(1, parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Date & Location */}
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Date</h4>
                <Input
                  type="date"
                  value={filters.date || ''}
                  onChange={handleDateChange}
                  fullWidth
                />
              </div>
              <div>
                <h4 className="font-medium mb-2">Location</h4>
                <Input
                  placeholder="City or venue"
                  value={filters.location}
                  onChange={handleLocationChange}
                  fullWidth
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-2">
            <Button variant="outline" onClick={handleResetFilters}>
              Reset
            </Button>
            <Button onClick={handleApplyFilters}>
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventFilters;