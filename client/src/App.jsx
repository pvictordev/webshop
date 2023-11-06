import React, { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui-comps/Navbar";
import Home from "./pages/Home";
import Products from "./data/Products.jsx";
import ProductPage from "./pages/ProductPage";
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
  const [productsList, setProductsList] = useState([...Products]);
  //open cart
  const [openCart, setOpenCart] = useState(false);
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  //Favorite feature (add to favorite or remove)
  const [favoriteItems, setFavoriteItems] = useState([]);

  const toggleFavorite = (id) => {
    const newFavorite = productsList.map((product) => {
      if (product.id === id) {
        return { ...product, favorite: !product.favorite };
      }
      return product;
    });
    setProductsList(newFavorite);

    const favoriteOnly = newFavorite.filter((product) => product.favorite);
    setFavoriteItems(favoriteOnly);

    // Сохранить массив favoriteItems в localStorage
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteOnly));
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className={`modal__cart ${openCart ? "openCart" : ""}`}>
          <ModalCart toggleCart={toggleCart} productsList={productsList} />
        </div>

        <Navbar open={open} toggleMenu={toggleMenu} toggleCart={toggleCart} />
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
            path="/ProductPage"
            element={
              <ProductPage
                productsList={productsList}
                toggleFavorite={toggleFavorite}
              />
            }
          >
            <Route
              path=":id"
              element={
                <ProductPage
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
                favoriteItems={favoriteItems}
                setFavoriteItems={setFavoriteItems}
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
