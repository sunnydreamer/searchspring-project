import React from "react";
import logo from "../images/logoT.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="flex flex-col items-center justify-center w-full">
      {/* logo */}
      <div className="flex items-center justify-center flex-shrink-0  bg-gray-100 p-2 w-full">
        <a href="/">
          <img src={logo} alt="" className="w-56" />
        </a>
      </div>
      {/* Nav Items and Search Box */}
      <div className="flex items-center justify-center bg-white w-full p-2 gap-1 flex-wrap m-7">
        <ul className="navItems  items-center justify-between  gap-2 flex">
          <li className="text-red-400">Trending</li>
          <li>Tops</li>
          <li>Jeans</li>
          <li>Dresses</li>
          <li>Shoes</li>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
