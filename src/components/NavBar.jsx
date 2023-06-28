import React from "react";
import logo from "../images/logoT.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center justify-center w-full sticky top-0">
      {/* logo */}
      <div className="flex items-center justify-center flex-shrink-0  bg-gray-100 p-2 w-full">
        <a href="/">
          <img src={logo} alt="" className="w-56" />
        </a>
      </div>
      {/* Nav Items and Search Box */}
      <div className="flex items-center justify-center bg-white w-full gap-1 flex-wrap p-5">
        <ul className="navItems  items-center justify-between  gap-2 flex">
          <li className="text-red-500">Trending</li>
          <li>Tops</li>
          <li>Jeans</li>
          <li>Dresses</li>
          <li>Shoes</li>
        </ul>
        {/* Searchbar */}
        <SearchBar />
        {/* Shopping Cart */}
        <div className="relative cursor-pointer">
          <div className="t-0 absolute left-3">
            <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500  p-3 text-xs text-white">
              3
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="file: mt-4 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
