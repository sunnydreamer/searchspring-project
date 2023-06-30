import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../state/cartSlice";
import noImage from "../images/noImage.png";

const ProductCard = ({ element }) => {
  const dispatch = useDispatch();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="productCard h-120 w-64 bg-white pb-4 rounded-lg shadow-md m-9 ">
      <div className="imgContainer h-96 overflow-hidden ">
        <img
          src={imageError ? noImage : element.thumbnailImageUrl}
          alt=""
          className="w-80 rounded-lg"
          onError={handleImageError}
        />
      </div>
      <div className="productInfoContianer p-5 flex flex-col gap-2 ">
        <div className="nameContainer w-full h-10 overflow-hidden">
          <p className="text-sm bg-green">{element.name}</p>
        </div>

        <div className="priceAndBtn flex justify-between ">
          {/* Price display */}

          {element.msrp > element.price ? (
            <div className="price flex gap-3">
              <p className="font-bold text-lg text-gray-400 line-through">
                ${element.msrp}
              </p>
              <p className="font-bold text-lg text-red-500">${element.price}</p>
            </div>
          ) : (
            <div className="price flex gap-3">
              <p className="font-bold text-lg text-black">${element.msrp}</p>
            </div>
          )}

          {/* Add to cart button */}

          <div
            className="addToCart w-7 h-7 bg-red-500 hover:bg-red-600 hover:cursor-pointer flex justify-center items-center rounded-full text-white font-bold"
            onClick={() => {
              dispatch(addToCart());
            }}
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
