import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../state/searchActions";
import { setSearchData } from "../state/searchSlices";

import PagePagination from "../components/PagePagination";
import ProductCard from "../components/ProductCard";
import NoResultAlert from "../components/NoResultAlert";

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);
  // console.log(searchTerm);
  const handleSearch = async (category, page = 1) => {
    const results = await dispatch(fetchData({ searchTerm: category, page }));
    // console.log(results.payload.results);
    dispatch(setSearchData(results.payload.results));
  };

  const dataList =
    searchData && searchData.length !== 0 ? (
      searchData.map((element, i) => {
        return <ProductCard key={i} element={element} />;
      })
    ) : (
      <NoResultAlert />
    );

  useEffect(() => {
    handleSearch(searchTerm, page);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <div className="flex flex-col justify-center items-center  w-full pb-4 mb-5">
      <h1 className="text-3xl font-bold  text-black mb-5 p-9">
        <strong>Search for</strong>: {searchTerm}
      </h1>

      <PagePagination page={page} setPage={setPage} searchData={searchData} />

      {/* products */}
      <div className="flex gap-4 flex-wrap justify-center px-12">
        {dataList}
      </div>

      <PagePagination page={page} setPage={setPage} searchData={searchData} />
    </div>
  );
};

export default SearchPage;
