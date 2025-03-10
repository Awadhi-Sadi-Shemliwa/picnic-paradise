import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, CurrencyDollarIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

const CheckoutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const cartItems = [
    { id: 1, name: 'VIP Concert Pass', price: 299.99, quantity: 2 },
    { id: 2, name: 'Meet & Greet Package', price: 199.99, quantity: 1 }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const glassCardStyle = "backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-xl border border-opacity-20 border-white shadow-2xl";
  const neonBorderStyle = "relative before:absolute before:inset-0 before:rounded-xl before:border-2 before:border-transparent before:bg-gradient-to-r before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:opacity-20 before:-z-10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Payment Methods */}
          <div className={`${glassCardStyle} ${neonBorderStyle} p-8`}>
            <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
            
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPayment('card')}
                className={`${glassCardStyle} p-4 cursor-pointer ${
                  selectedPayment === 'card' ? 'border-indigo-500' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <CreditCardIcon className="h-6 w-6 text-indigo-400" />
                  <span className="text-white">Credit/Debit Card</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPayment('crypto')}
                className={`${glassCardStyle} p-4 cursor-pointer ${
                  selectedPayment === 'crypto' ? 'border-indigo-500' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <CurrencyDollarIcon className="h-6 w-6 text-indigo-400" />
                  <span className="text-white">Cryptocurrency</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPayment('bank')}
                className={`${glassCardStyle} p-4 cursor-pointer ${
                  selectedPayment === 'bank' ? 'border-indigo-500' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  <BuildingLibraryIcon className="h-6 w-6 text-indigo-400" />
                  <span className="text-white">Bank Transfer</span>
                </div>
              </motion.div>
            </div>

            {selectedPayment === 'card' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-indigo-300">Card Number</label>
                  <input
                    type="text"
                    value={cardDetails.number}
                    onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-indigo-300">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardDetails.name}
                    onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                    className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-indigo-300">Expiry Date</label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                      className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-indigo-300">CVV</label>
                    <input
                      type="text"
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      className="mt-1 block w-full bg-transparent border border-indigo-500/30 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Order Summary */}
          <div className={`${glassCardStyle} ${neonBorderStyle} p-8`}>
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className={`${glassCardStyle} p-4`}
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white font-medium">{item.name}</h3>
                      <p className="text-indigo-300">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between text-white">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Complete Purchase
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;