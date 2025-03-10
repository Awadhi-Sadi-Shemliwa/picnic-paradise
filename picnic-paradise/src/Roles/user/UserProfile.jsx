import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircleIcon, CameraIcon } from '@heroicons/react/24/outline';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Alexander Wright',
    email: 'alexander@example.com',
    dob: '1990-05-15',
    gender: 'Male',
    location: 'New York, USA',
    experienceLevel: 'VIP',
    avatar: null
  });

  const glassCardStyle = "backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-xl border border-opacity-20 border-white shadow-2xl";
  const neonBorderStyle = "relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:opacity-20 before:-z-10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className={`${glassCardStyle} ${neonBorderStyle} p-8`}>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Avatar Section */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative group">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <UserCircleIcon className="w-24 h-24 text-gray-400" />
                    </div>
                  )}
                </div>
                <button className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white hover:bg-indigo-700 transition-colors">
                  <CameraIcon className="w-5 h-5" />
                </button>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
              >
                Edit Avatar
              </motion.button>
            </div>

            {/* Profile Details */}
            <div className="flex-1 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Name</label>
                  <input
                    type="text"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Email</label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Date of Birth</label>
                  <input
                    type="date"
                    value={user.dob}
                    onChange={(e) => setUser({ ...user, dob: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Gender</label>
                  <select
                    value={user.gender}
                    onChange={(e) => setUser({ ...user, gender: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Location</label>
                  <input
                    type="text"
                    value={user.location}
                    onChange={(e) => setUser({ ...user, location: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <label className="block text-sm font-medium text-indigo-300">Experience Level</label>
                  <select
                    value={user.experienceLevel}
                    onChange={(e) => setUser({ ...user, experienceLevel: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Basic">Basic</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserProfile;