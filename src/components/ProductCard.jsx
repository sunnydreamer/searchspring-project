import React from "react";

const ProductCard = ({ element }) => {
  return (
    <div className="productCard h-120 w-64 bg-white pb-4 rounded-lg shadow-md m-9 ">
      <div className="imgContainer h-96 overflow-hidden ">
        <img
          src={element.thumbnailImageUrl}
          alt=""
          className="w-80 rounded-lg"
        />
      </div>
      <div className="productInfoContianer p-5 flex flex-col gap-2 ">
        <p className="text-sm">{element.name}</p>
        <div className="priceAndBtn flex justify-between ">
          <div className="price flex gap-3">
            <p className="font-bold text-lg text-gray-400 line-through">
              ${element.msrp}
            </p>
            <p className="font-bold text-lg text-red-500">${element.price}</p>
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
