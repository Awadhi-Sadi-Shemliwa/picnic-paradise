"use client";
import React, { useState, useEffect } from "react";
import { CategoryCard } from "./CategoryCard";

export const FeaturedCategories = ({ categories }) => {
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransformValue((prev) => {
        if (prev <= -100) return 0;
        return prev - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 flex items-center transition-transform"
        style={{ transform: `translateX(${transformValue}%)` }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};