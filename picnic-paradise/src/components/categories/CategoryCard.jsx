import React from "react";

export const CategoryCard = ({ category }) => {
  return (
    <article className="min-w-[300px] bg-[#222] rounded-[16px] overflow-hidden mr-[24px]">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-[24px]">
        <h3 className="text-[24px] font-bold mb-[8px]">{category.name}</h3>
        <p className="text-[#ccc] mb-[16px]">{category.price}</p>
        <span className="inline-block px-[12px] py-[4px] bg-[#333] rounded-[4px] text-[14px]">
          {category.type}
        </span>
      </div>
    </article>
  );
};