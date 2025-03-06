import React from "react";

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      type="text"
      placeholder="Search categories"
      className="w-full px-[24px] py-[16px] bg-[#222] rounded-[8px] text-[16px] outline-none border-[1px] border-[#333] focus:border-[#4318D1]"
    />
  );
};