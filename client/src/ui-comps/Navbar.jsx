import React, { useState, useEffect } from "react";
import "../ui-styles/navbar.scss";
import logo from "../assets/webshop.png";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import SearchMobile from "./SearchMobile";

import { useSelector, useDispatch } from "react-redux";

export default function Navbar({ open, toggleMenu, toggleCart, productsList }) {
  //redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  //search input state
  const [search, setSearch] = useState("");

  //search data state
  const [filteredData, setFilteredData] = useState(productsList);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    filterData(search);
  };

  //opens search mobile
  const [openSearch, setOpenSearch] = useState(false);

  const toggleSearch = () => {
    setOpenSearch((prev) => !prev);

    if (openSearch) {
      document.body.style.overflow = "scroll";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const exitToggle = () => {
    if (openSearch) {
      toggleSearch();
    }
  };

  //filtering data
  const filterData = (search) => {
    const filteredData = productsList.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filteredData);
  };

  //search results
  const searchResults = (
    <div className="search__results ">
      <ul className="results">
        {filteredData.map((item) => (
          <Link
            className="search__results--item"
            style={{ color: "#333", fontWeight: "700" }}
            to={`https://webshopserver.onrender.com/api/products/${item._id}`}
            key={item._id}
            onClick={() => {
              setSearch("");
              window.scrollTo(0, 0);
              exitToggle();
            }}
          >
            <BsSearch /> {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );

  //navbar fixed
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = `Navbar ${scrollY > 50 ? "fixedNav" : ""}`;

  const product = productsList[Math.floor(Math.random() * productsList.length)];

  return (
    <nav className={navClass}>
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
          <Link
            className="Logo"
            to={"/"}
            href="#hero"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="content__logo">
              <img src={logo} alt="" />
              <h1 className="Logo">Webshop</h1>
            </div>
          </Link>

          <div className="content__search">
            <BsSearch
              style={{
                marginLeft: "1rem",
                position: "absolute",
                top: "0.4rem",
              }}
              color="#333"
              size="1.5rem"
            />
            <input
              className="search__input"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search for products"
            />
            {search !== "" ? searchResults : null}
          </div>

          <ul className="content__nav">
            <li className="nav__links">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="Link link__categories"
                to={"/categories"}
              >
                <li>Cateogories</li>
              </Link>

              <Link
                onClick={() => window.scrollTo(0, 0)}
                className="Link link__products"
                to={"/products/654bf39e61307df4d92e7fb2"}
              >
                <li>Products</li>
              </Link>
            </li>

            <li className="nav__search-icon">
              <BsSearch onClick={toggleSearch} />
            </li>

            <li className="nav__favorite">
              <Link className="favorite__link" to={"/favorite"}>
                <MdFavoriteBorder
                  className="link__favorite"
                  onClick={() => window.scrollTo(0, 0)}
                />{" "}
              </Link>
            </li>

            <li className="nav__cart">
              <div className="quantity">{cartItems.length}</div>
              <IoCartOutline className="link__cart" onClick={toggleCart} />
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
