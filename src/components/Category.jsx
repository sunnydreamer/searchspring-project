import React from "react";
import ProductCard from "./ProductCard";
import PagePagination from "./PagePagination";

const Category = () => {
  return (
    <div className="category flex flex-col justify-center items-center  bg-gray-100 ">
      <h1 className="text-3xl font-extrabold p-16">Trending</h1>
      <div className="productCards flex flex-wrap justify-center gap-16 px-20 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <p className="p-16">
        <PagePagination />
      </p>
    </div>
  );
};

export default Category;
