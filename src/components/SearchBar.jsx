import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchData } from "../state/searchActions";
import { setSearchData } from "../state/searchSlices";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (input === "") {
      console.log("type something");
    } else {
      const results = await dispatch(fetchData({ searchTerm: input, page: 1 }));
      // console.log(results.payload.results);
      dispatch(setSearchData(results.payload.results));
      // console.log(searchData);
      navigate(`search/${input}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-xs px-3  ">
      <div className="flex items-center border-b p-2">
        <input
          className="appearance-none border-none w-full text-gray-700 mr-3 py-1 px-2 focus:outline-none"
          type="text"
          placeholder="Jeans"
          onChange={handleInputChange}
        />
        <button
          className="flex-shrink-0 bg-black hover:bg-gray-600 text-sm  text-white p-2 px-3 rounded"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
