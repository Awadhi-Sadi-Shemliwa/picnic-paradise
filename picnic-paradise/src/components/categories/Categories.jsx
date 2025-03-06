import React, { useState } from "react";
import { CategoryGroups } from "./CategoryGroups";
import { Hero } from "./Hero";
import { SearchBar } from "./SearchBar";
import { categories } from "./types";

export const Categories = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Filter categories based on activeFilter and searchQuery
  const filteredCategories = categories.filter((category) => {
    const matchesFilter =
      activeFilter === "all" || category.type === activeFilter;
    const matchesSearch = category.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-300 via-gray-700 to-neutral-900 dark:bg-gradient-to-br dark:from-blue-800 dark:via-gray-700 dark:to-slate-300 text-[#fff] overflow-x-hidden">
      <Hero />

      <main className="py-[80px] px-[24px]">
        {showSearch && (
          <div className="max-w-[1200px] mx-auto mb-[48px]">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        )}

        {/* Pass filtered categories to CategoryGroups */}
        <CategoryGroups
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setIsDark={setIsDark}
          categories={filteredCategories} // <-- Pass filtered categories here
        />
      </main>
    </div>
  );
};

export default Categories;
