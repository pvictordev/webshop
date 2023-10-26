import React, { useState, useRef } from "react";
import "../ui-styles/navbar.scss";
import { IoCartOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../assets/webshop.png";
import Burger from "./Burger";
import SearchMobile from "./SearchMobile";
import Prodcuts from "../data/Products.jsx";

export default function Navbar({ open, toggleMenu }) {
  //search input state
  const [search, setSearch] = useState("");
  //search data state
  const [filteredData, setFilteredData] = useState(Prodcuts);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    filterData(value);
  };

  //opens search mobile
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);

    if (openSearch) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  //filtering data
  const filterData = (search) => {
    const filteredData = Prodcuts.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  //search results
  const searchResults = (
    <div className="search__results ">
      <ul className="results">
        {filteredData.map((item) => (
          <li style={{ fontWeight: "700" }} key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <nav className="Navbar">
      <div className={`burger__menu ${open ? "open" : ""}`}>
        <Burger toggleMenu={toggleMenu} />
      </div>

      <div className={`search-mobile ${openSearch ? "open" : ""}`}>
        <SearchMobile
          toggleSearch={toggleSearch}
          search={search}
          handleSearch={handleSearch}
          searchResults={searchResults}
        />
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
              placeholder="Search for items"
            />
            {search !== "" ? searchResults : null}
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
      </div>
    </nav>
  );
}
