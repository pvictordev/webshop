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

  //add to favorite or remove
  const toggleFavorite = (id) => {
    const newFavorite = productsList.map((product) => {
      if (product.id === id) {
        return { ...product, favorite: !product.favorite };
      }
      return product;
    });
    setProductsList(newFavorite);
  };

  //cart functionality
  const [cart, setCart] = useState([]);
  const [buttonText, setButtonText] = useState(true);

  const addToCart = (id) => {
    //add to cart
    const productIndex = productsList.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
      const updatedProductsList = [...productsList];
      updatedProductsList[productIndex] = {
        ...updatedProductsList[productIndex],
        cart: !updatedProductsList[productIndex].cart,
      };

      setCart((prevCart) => {
        const newCart = [...prevCart];

        if (updatedProductsList[productIndex].cart) {
          newCart.push(updatedProductsList[productIndex]);
        } else {
          const existingCartItemIndex = newCart.findIndex(
            (item) => item.id === updatedProductsList[productIndex].id
          );
          if (existingCartItemIndex !== -1) {
            newCart.splice(existingCartItemIndex, 1);
          }
        }

        return newCart;
      });

      setProductsList(updatedProductsList);
      
      //button text
      setButtonText(!buttonText);
    }
  };
  // console.log(cart)

  return (
    <div className="App">
      {openCart && (
        <div className="modal__cart">
          <ModalCart
            toggleCart={toggleCart}
            addToCart={addToCart}
            cart={cart}
            setCart={setCart}
            //unnecessary
            productsList={productsList}
          />
        </div>
      )}

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
              cart={cart}
              setCart={setCart}
              addToCart={addToCart}
              buttonText={buttonText}
            />
          }
        >
          <Route
            path=":id"
            element={
              <Products
                productsList={productsList}
                cart={cart}
                setCart={setCart}
                toggleFavorite={toggleFavorite}
                addToCart={addToCart}
                buttonText={buttonText}
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
  );
}

export default App;
