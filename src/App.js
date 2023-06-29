import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./state/searchActions";
import { setSearchData } from "./state/searchSlices";
import Banner from "./components/Banner.jsx";
import Category from "./pages/CategoryPage.jsx";
import NavBar from "./components/NavBar.jsx"
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage.jsx";
import SearchPage from "./pages/SearchPage";

import { Routes, Route, useParams, Navigate } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/search/:searchTerm" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
