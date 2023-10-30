import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui-comps/Navbar";
import Home from "./pages/Home";
import products from "./data/Products";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Footer from "./home-comps/Footer";
import Newsletter from "./home-comps/Newsletter";
import Favorite from "./pages/Favorite";

function App() {
  //open menu
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  //favorite items
  const [productsList, setProductsList] = useState([...products]);

  const toggleFavorite = (id) => {
    const newFavorite = productsList.map((product) => {
      if (product.id === id) {
        return { ...product, favorite: !product.favorite };
      }
      return product;
    });
    setProductsList(newFavorite);
  };

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route
          path="/"
          element={
            <Home toggleFavorite={toggleFavorite} productsList={productsList} />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories
              toggleFavorite={toggleFavorite}
              productsList={productsList}
            />
          }
        />
        {/* <Route path="/categories/products/" element={<Products />} /> */}
        <Route
          path="/products/:id"
          element={<Products productsList={productsList} />}
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              toggleFavorite={toggleFavorite}
              productsList={productsList}
            />
          }
        ></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
