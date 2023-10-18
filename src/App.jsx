import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";  
import Products from "./pages/Products";
import Categories from "./pages/categories";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        <Route path="products" element={<Products />}></Route>
      </Routes>
    </>
  );
}

export default App;
