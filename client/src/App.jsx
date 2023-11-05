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
import ModalCart from "./ui-comps/ModalCart";
import { Provider } from "react-redux";
import store from "./redux/store";

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

  //items list
  const [productsList, setProductsList] = useState([...products]);

  //open cart
  const [openCart, setOpenCart] = useState(false);
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  //Favorite feature (add to favorite or remove)
  const toggleFavorite = (id) => {
    const newFavorite = productsList.map((product) => {
      if (product.id === id) {
        return { ...product, favorite: !product.favorite };
      }
      return product;
    });
    setProductsList(newFavorite);
    //save to local storage
    // localStorage.setItem("productsList", JSON.stringify(newFavorite));
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className={`modal__cart ${openCart ? "openCart" : ""}`}>
          <ModalCart toggleCart={toggleCart} productsList={productsList} />
        </div>

        <Navbar
          open={open}
          setOpen={setOpen}
          toggleMenu={toggleMenu}
          openCart={openCart}
          setOpenCart={setOpenCart}
          toggleCart={toggleCart}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                toggleFavorite={toggleFavorite}
                productsList={productsList}
                openCart={openCart}
                setOpenCart={setOpenCart}
                toggleCart={toggleCart}
              />
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

          <Route
            path="/products"
            element={
              <Products
                productsList={productsList}
                toggleFavorite={toggleFavorite}
              />
            }
          >
            <Route
              path=":id"
              element={
                <Products
                  productsList={productsList}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Route>

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
    </Provider>
  );
}

export default App;
