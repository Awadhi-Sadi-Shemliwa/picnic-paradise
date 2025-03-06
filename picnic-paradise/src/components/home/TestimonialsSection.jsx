import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophia Chen',
    role: 'Art Enthusiast',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'The Sip & Paint experience was absolutely magical! The combination of fine wine, expert instruction, and that incredible sunset view made for an unforgettable evening.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Sports Fan',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'Watching the Champions League Final in the VIP lounge was worth every penny. The atmosphere was electric, the food was exceptional, and the open bar was top-notch.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    quote: 'The luxury picnic experience exceeded all expectations! The setting was breathtaking, the food was exquisite, and every detail was perfect. I cant wait to book again!',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-slate-300 dark:via-gray-700 dark:to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our guests about their unforgettable luxury experiences with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-4 text-primary/10 text-6xl font-serif">"</div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 italic relative z-10">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;