import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setSearchData } from "../state/searchSlices";
import { fetchData } from "../state/searchActions";

import PagePagination from "../components/PagePagination";
import ProductCard from "../components/ProductCard";
import NoResultAlert from "../components/NoResultAlert";

const CategoryPage = () => {
  const [page, setPage] = useState(1);
  const [isEmpty, setIsEmpty] = useState(false);

  const { category } = useParams();
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search.searchData);

  const handleSearch = async (searchTerm, page) => {
    const results = await dispatch(fetchData({ searchTerm, page }));
    // console.log(results.payload.results);
    dispatch(setSearchData(results.payload.results));
  };

  const dataList =
    searchData && searchData.length ? (
      searchData.map((element, i) => {
        return <ProductCard key={i} element={element} />;
      })
    ) : (
      <NoResultAlert />
    );

  useEffect(() => {
    handleSearch(category, page);
    // console.log(searchData);
  }, [page]);

  // loop the results

  return (
    <div className="flex flex-col justify-center items-center w-full pb-4 mb-5 ">
      <h1 className="text-3xl font-extrabold  text-black mb-5 p-9">
        {category.toUpperCase()}
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

export default CategoryPage;
