import React from 'react';
import { CalendarIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const UserDashboard = () => {
  const upcomingBookings = [
    { id: 1, event: 'Summer Music Festival', date: '2023-08-20', status: 'Confirmed' },
    { id: 2, event: 'Tech Conference 2023', date: '2023-09-15', status: 'Pending' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="mt-2 text-gray-600">Manage your bookings and profile settings here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-xl font-semibold">5 Upcoming Events</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <CreditCardIcon className="h-8 w-8 text-green-600" />
              <span className="ml-3 text-xl font-semibold">$520 Spent</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center">
              <UserCircleIcon className="h-8 w-8 text-purple-600" />
              <span className="ml-3 text-xl font-semibold">Premium Member</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Bookings</h2>
          <div className="divide-y divide-gray-200">
            {upcomingBookings.map((booking) => (
              <div key={booking.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{booking.event}</h3>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                defaultValue="john@example.com"
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;