"use client";
import { useState, useEffect } from "react";
import { testimonials } from "./types";

export const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="mb-32">
      <h2 className="text-[32px] font-bold mb-16 text-center">
        Client Testimonials
      </h2>
      <div className="relative bg-[#222] rounded-[16px] p-12">
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#333] p-4 rounded-full"
          aria-label="Previous testimonial"
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#333] p-4 rounded-full"
          aria-label="Next testimonial"
        >
          →
        </button>
        <div className="flex flex-col items-center text-center">
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-20 h-20 rounded-full mb-4"
          />
          <p className="text-[18px] mb-4">{testimonials[activeIndex].text}</p>
          <h3 className="font-bold">{testimonials[activeIndex].name}</h3>
          <p className="text-[#CCC]">{testimonials[activeIndex].role}</p>
        </div>
      </div>
    </section>
  );
};
