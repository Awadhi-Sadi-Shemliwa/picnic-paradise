import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const UserNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">Your Brand</Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/user-category"
                  className={`${
                    isActive('/user-category') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Categories
                </Link>

                <Link
                  to="/eventdetail"
                  className={`${
                    isActive('/events') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Events
                </Link>


                <Link
                  to="/support"
                  className={`${
                    isActive('/support') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Support
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/cart" className="p-2 text-gray-300 hover:text-white">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link>

            <div className="ml-3 relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 text-gray-300 hover:text-white"
              >
                <UserCircleIcon className="h-6 w-6" />
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/checkout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
