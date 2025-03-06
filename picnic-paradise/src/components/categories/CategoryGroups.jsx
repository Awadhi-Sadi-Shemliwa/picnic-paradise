"use client";
import React, { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

export const CategoryGroups = ({
  activeFilter,
  setActiveFilter,
  showSearch,
  setShowSearch,
  setIsDark,
  categories,
}) => {
  return (
    <section className="w-full    py-8">
      <div className="max-w-[1200px] mx-auto px-[24px] flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-[24px] md:gap-[48px]">
          <h1 className="text-[20px] md:text-[24px] font-bold">LuxeEvents</h1>
          <div className="flex gap-[16px] md:gap-[32px] max-sm:hidden">
            <button
              onClick={() => setActiveFilter("all")}
              className={`cursor-pointer ${activeFilter === "all" ? "text-white" : "text-[#666]"}`}
            >
              All Events
            </button>
            <button
              onClick={() => setActiveFilter("VIP")}
              className={`cursor-pointer ${activeFilter === "VIP" ? "text-white" : "text-[#666]"}`}
            >
              VIP
            </button>
            <button
              onClick={() => setActiveFilter("Premium")}
              className={`cursor-pointer ${activeFilter === "Premium" ? "text-white" : "text-[#666]"}`}
            >
              Premium
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[12px] md:gap-[16px] mt-4 md:mt-0">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="p-[10px] md:p-[12px] rounded-[8px] bg-[#222] text-[12px] md:text-[14px]"
          >
            Search
          </button>
          <button
            onClick={() => setIsDark((prev) => !prev)}
            className="p-[10px] md:p-[12px] rounded-[8px] bg-[#222] text-[12px] md:text-[14px]"
          >
            Theme
          </button>
        </div>
      </div>

      {/* Featured Categories Section */}
      <section className="relative mt-8 px-4 md:px-6">
        <Swiper
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 20 }, // Small screens
    768: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens
    1024: { slidesPerView: 3, spaceBetween: 30 }, // Large screens
    1440: { slidesPerView: 4, spaceBetween: 40 }, // Extra-large screens
  }}
  spaceBetween={20}
  freeMode={true}
  pagination={{ clickable: true }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  loop={true}
  modules={[FreeMode, Pagination, Autoplay]}
  className="w-full"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className="flex justify-center">
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};
