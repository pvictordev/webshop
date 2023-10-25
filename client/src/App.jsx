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
  const [open, setOpen] = React.useState(false);

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
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}></Route>
        {/* <Route path="products" element={<Products />}></Route> */}
        <Route path="categories/products/:id" element={<Products />} />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
