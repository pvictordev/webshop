import React, { useState } from "react";
import "../styles/navbar.scss";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/webshop.png";
import Burger from "./Burger";

export default function Navbar({ open, toggleMenu }) {

  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(!focus);
  }


  return (
    <nav className="Navbar">
      <div className={`burger__menu ${open ? "open" : ""}`}>
        <Burger toggleMenu={toggleMenu} />
      </div>
      <div className="Navbar__container">
        <div className="container__content">
          <Link className="Logo" to={"/"}>
            <div className="content__logo">
              <img src={logo} alt="" />
              <h1 className="Logo">Webshop</h1>
            </div>
          </Link>

          <div className="content__search" onClick={() => handleFocus}>
            <input
              className="search__input"
              type="text"
              placeholder="Look for"
            />
            {focus && <div className="search__results"></div>}
          </div>

          <ul className="content__nav">
            <li className="nav__links">
              <Link className="Link link__categories" to={"/categories"}>
                <li>Cateogories</li>
              </Link>

              <Link className="Link link__products" to={"/categories/products"}>
                <li>Products</li>
              </Link>
            </li>

            <li className="search__icon">
              <BsSearch />
            </li>
            <li>
              <IoCartOutline className="link__cart" />
            </li>
            <li className="nav__burger">
              <RxHamburgerMenu onClick={toggleMenu} className="burger__icon" />
            </li>
          </ul>
        </div>
        {/* <div className="burger__menu">
          <Burger />
        </div> */}
      </div>
    </nav>
  );
}
