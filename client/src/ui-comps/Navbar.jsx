import React, { useState, useRef } from "react";
import "../ui-styles/navbar.scss";

import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/webshop.png";

import Burger from "./Burger";
import SearchMobile from "./SearchMobile";

export default function Navbar({ open, toggleMenu }) {
  //search input state
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //opens search mobile
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <nav className="Navbar">
      <div className={`burger__menu ${open ? "open" : ""}`}>
        <Burger toggleMenu={toggleMenu} />
      </div>

      <div className={`search-mobile ${openSearch ? "open" : ""}`}>
        <SearchMobile toggleSearch={toggleSearch} />
      </div>

      <div className="Navbar__container">
        <div className="container__content">
          <Link className="Logo" to={"/"}>
            <div className="content__logo">
              <img src={logo} alt="" />
              <h1 className="Logo">Webshop</h1>
            </div>
          </Link>

          <div className="content__search">
            <input
              className="search__input"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search for items "
            />
          </div>

          <ul className="content__nav">
            <li className="nav__links">
              <Link className="Link link__categories" to={"/categories"}>
                <li>Cateogories</li>
              </Link>

              <Link
                className="Link link__products"
                to={"categories/products/5"}
              >
                <li>Products</li>
              </Link>
            </li>

            <li className="nav__search-icon">
              <BsSearch onClick={toggleSearch} />
            </li>

            <li className="nav__cart">
              <IoCartOutline className="link__cart" />
            </li>
            <li className="nav__burger">
              <RxHamburgerMenu className="burger__icon" onClick={toggleMenu} />
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
