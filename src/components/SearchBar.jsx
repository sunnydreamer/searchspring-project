import React from "react";

const SearchBar = () => {
  return (
    <form className="w-full max-w-sm px-3  ">
      <div class="flex items-center border-b p-2">
        <input
          class="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
          type="text"
          placeholder="Jeans"
        />
        <button
          class="flex-shrink-0 bg-black hover:bg-gray-600 text-sm  text-white p-2 px-3 rounded"
          type="button"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
