import React from "react";
import searchIcon from "../../public/search.svg";
import Image from "next/image";
import { AiOutlineSearch } from 'react-icons/ai'
const Search = () => {
  return (
    <div className="px-12">
      <form action="" className="relative">
        <input
          type="search"
          className="bg-gray-100 px-4 py-2.5 w-full rounded-lg focus:ring-1 transition-all duration-200 ring-blue-500 focus:bg-white focus:border-none focus:outline-none"
          placeholder="Search the store..."
        />
        <button
          type="submit"
          className="absolute right-0 rounded-r-lg py-2.5 text-white font-semibold px-6 -translate-y-1/2 top-1/2 
          bg-blue-500 hover:bg-blue-700 transition-all duration-300"
        >
          <AiOutlineSearch fontSize={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
