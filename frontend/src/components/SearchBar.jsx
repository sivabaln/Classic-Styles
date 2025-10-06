import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";
import { BiSearch, BiX } from "react-icons/bi";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location]);

  return showSearch && visible ? (
    <div className="bg-gray-100 dark:bg-gray-800 py-4 border-b border-gray-300 dark:border-gray-700 animate-fadeIn">
      <div className="max-w-3xl mx-auto flex items-center gap-2 px-4">
        <div className="flex items-center w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md overflow-hidden shadow-sm">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="flex-1 px-4 py-2 text-sm outline-none bg-transparent text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
          />
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2 transition"
          >
            <BiSearch className="w-4 h-4" />
            Search
          </button>
        </div>

        <button
          onClick={() => setShowSearch(false)}
          className="p-2 text-2xl rounded-full text-black hover:bg-red-500 hover:text-white transition"
        >
          <BiX />
        </button>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out;
          }
        `}
      </style>
    </div>
  ) : null;
};

export default SearchBar;
