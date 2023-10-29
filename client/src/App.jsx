import React, { useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./ui-comps/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Footer from "./home-comps/Footer";
import Newsletter from "./home-comps/Newsletter";
import Favorite from "./ui-comps/Favorite";

function App() {
  //opens menu
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

    if (open) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };


  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} toggleMenu={toggleMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/products/" element={<Products />} />
        <Route path="/categories/products/:id" element={<Products />} />
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
