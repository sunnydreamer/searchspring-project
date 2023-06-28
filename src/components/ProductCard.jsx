import React from "react";

const ProductCard = () => {
  return (
    <div className="productCard h-96 w-64 bg-white pb-4 rounded-lg shadow-sm ">
      <div className="imgContainer h-64 overflow-hidden ">
        <img
          src="https://searchspring-demo-content.s3.amazonaws.com/demo/fashion/product_images_large/6b9a8997_large.jpg"
          alt=""
          className="w-80 rounded-lg"
        />
      </div>
      <div className="productInfoContianer p-5 flex flex-col gap-2 ">
        <p className="text-sm">
          Hamptons Getaway Blue Striped Off-The-Shoulder Top
        </p>
        <div className="priceAndBtn flex justify-between ">
          <div className="price flex gap-3">
            <p className="font-bold text-lg text-gray-400 line-through">$100</p>
            <p className="font-bold text-lg text-red-500">$50</p>
          </div>

          <div className="addToCart w-7 h-7 bg-red-500 hover:bg-red-600 hover:cursor-pointer flex justify-center items-center rounded-full text-white font-bold">
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
