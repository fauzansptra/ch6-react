import React from "react";

function SearchFilter({ searchTerm, onSearchChange, onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0 md:space-x-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search for shops..."
        className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Semua Menu</option>
        <option value="20000">Menu Hemat</option>
      </select>
    </div>
  );
}

export default SearchFilter;
