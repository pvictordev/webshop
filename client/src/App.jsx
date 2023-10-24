import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        {/* <Route path="products" element={<Products />}></Route> */}
        <Route path="categories/products/" element={<Products />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
