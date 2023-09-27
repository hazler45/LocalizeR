// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="relative flex text-gray-600">
      <input
        type="text"
        className="border-2  border-gray-300 bg-white h-10 px-5 pr-16 rounded-r-none text-sm focus:outline-none"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
            type="submit"
            className="flex justify-center text-white  bg-blue-700 hover:bg-blue-800 font-medium rounded-r-md text-sm px-3 py-2"
          >
            <div className=" flex items-center">
              <svg
                className="w-4 h-4 text-white  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </button>
    </div>
  );
};

export default SearchBar;
