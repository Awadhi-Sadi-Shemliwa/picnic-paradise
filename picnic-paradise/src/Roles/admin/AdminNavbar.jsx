import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const AdminNavbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/admin" className="text-white font-bold text-xl">
                Admin Panel
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin"
                  className={`${
                    isActive('/admin')
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                >
                  <HomeIcon className="h-5 w-5 mr-2" />
                  Dashboard
                </Link>

                <Link
                  to="/admin/events"
                  className={`${
                    isActive('/admin/events')
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                >
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  Events
                </Link>

                <Link
                  to="/admin/users"
                  className={`${
                    isActive('/admin/users')
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                >
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
