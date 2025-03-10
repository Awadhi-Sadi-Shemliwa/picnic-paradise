import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const UserCategory = () => {
  const categories = [
    {
      id: 'basic',
      name: 'Basic',
      icon: StarIcon,
      price: '49',
      features: [
        'Access to standard events',
        'Regular seating options',
        'Basic customer support',
        'Standard booking window'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: SparklesIcon,
      price: '99',
      features: [
        'Priority event access',
        'Premium seating choices',
        'Dedicated support line',
        'Extended booking window',
        'Exclusive event previews'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'vip',
      name: 'VIP',
      icon: ShieldCheckIcon,
      price: '199',
      features: [
        'VIP event access',
        'Best-in-house seating',
        '24/7 concierge service',
        'Unlimited booking window',
        'Meet & Greet opportunities',
        'Private lounge access'
      ],
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const glassCardStyle = "backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-xl border border-opacity-20 border-white shadow-2xl";
  const neonBorderStyle = "relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:opacity-20 before:-z-10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Choose Your Experience</h1>
          <p className="text-xl text-indigo-300">Unlock a world of exclusive events and privileges</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`${glassCardStyle} ${neonBorderStyle} p-8 relative overflow-hidden`}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`}>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-full h-full bg-gradient-to-br from-transparent to-white opacity-30"
                />
              </div>

              <div className="relative z-10">
                <category.icon className="w-12 h-12 text-white mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">{category.name}</h2>
                <div className="text-3xl font-bold text-white mb-6">
                  ${category.price}
                  <span className="text-lg font-normal text-indigo-300">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {category.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-indigo-300"
                    >
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-medium transition-all duration-300 shadow-lg`}
                >
                  Select {category.name}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserCategory;