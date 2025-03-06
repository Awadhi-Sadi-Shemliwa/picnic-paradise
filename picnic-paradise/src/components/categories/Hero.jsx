import React from "react";
import img1 from "../../assets/extraordinary-experience.jpg";

export const Hero = () => {
  return (
    <header
      className="pt-[120px] pb-[80px] px-[24px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#111] to-transparent opacity-80" />
      
      <div className="max-w-[1200px] mx-auto relative z-10 text-white">
        <h1 className="text-[64px] max-sm:text-[48px] font-bold leading-[1.1] mb-[24px]">
          <span>Discover Extraordinary</span>
          <br />
          <span>Experiences</span>
        </h1>
        <p className="text-[20px] text-[#ccc] max-w-[600px] mb-[32px]">
          Explore our curated collection of premium events designed to create
          unforgettable moments.
        </p>
        <div className="flex gap-[16px]">
          <button className="px-[32px] py-[16px] bg-[#4318D1] rounded-[8px] font-medium hover:bg-[#3512a7] transition">
            Explore Categories
          </button>
          <button className="px-[32px] py-[16px] bg-[#222] rounded-[8px] font-medium hover:bg-[#333] transition">
            View Calendar
          </button>
        </div>
      </div>
    </header>
  );
};
