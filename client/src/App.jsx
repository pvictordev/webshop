import React, { useState, useEffect } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui-comps/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Footer from "./home-comps/Footer";
import Newsletter from "./home-comps/Newsletter";
import Favorite from "./pages/Favorite";
import ModalCart from "./ui-comps/ModalCart";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";

function App() {
  //fetch data from API
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://webshopserver.onrender.com/products"
        );
        setProductsList([...data]);
      } catch (error) {
        console.error("ERROR GET DATA:", error);
      }
    };
    fetchProducts();
  }, []);
  console.log(productsList);

  //open cart
  const [openCart, setOpenCart] = useState(false);
  const toggleCart = () => {
    setOpenCart(!openCart);
  };

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

  //add to Favorite feature (add to favorite or remove)
  const [favoriteItems, setFavoriteItems] = useState([]);

  const toggleFavorite = (_id) => {
    const newFavorite = productsList.map((product) => {
      if (product._id === _id) {
        return { ...product, favorite: !product.favorite };
      }
      return product;
    });
    setProductsList(newFavorite);

    const favoriteOnly = newFavorite.filter((product) => product.favorite);
    setFavoriteItems(favoriteOnly);

    localStorage.setItem("favoriteItems", JSON.stringify(favoriteOnly));
  };
  return (
    <Provider store={store}>
      <div className="App">
        <div className={`modal__cart ${openCart ? "openCart" : ""}`}>
          <ModalCart toggleCart={toggleCart} productsList={productsList} />
        </div>

        <Navbar
          productsList={productsList}
          open={open}
          toggleMenu={toggleMenu}
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
              <ProductPage
                productsList={productsList}
                toggleFavorite={toggleFavorite}
              />
            }
          >
            <Route
              path="/products/:id"
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
