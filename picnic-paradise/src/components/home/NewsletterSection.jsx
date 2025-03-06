import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { Mail } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API to subscribe the user
    console.log('Subscribing email:', email);
    setIsSubmitted(true);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <section className="py-16 bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated on Exclusive Events
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Subscribe to our newsletter and be the first to know about upcoming luxury experiences, special offers, and VIP access.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                leftIcon={<Mail size={18} className="text-gray-400" />}
              />
            </div>
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          
          {isSubmitted && (
            <p className="mt-4 text-green-600 dark:text-green-400">
              Thank you for subscribing! You'll receive our next newsletter soon.
            </p>
          )}
          
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Luxe Events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;