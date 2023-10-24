import React from "react";
import "../styles/navbar.scss";
import { IoCartOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link className="Logo" to={"/"}>
      <nav className="Navbar">
        <div className="Navbar__container">
          <div className="container__content">
            <div className="content__logo">
              <img src="src/assets/webshop.png" alt="" />
              <h1 className="Logo">Webshop</h1>
            </div>
            <div className="content__search">
              <input
                className="search__input"
                type="text"
                placeholder="Look for"
              />
            </div>
            <ul className="content__nav">
              <li className="nav__links">
                <Link className="Link link__categories" to={"/categories"}>
                  <li>Cateogories</li>
                </Link>

                <Link className="Link link__products" to={"/products"}>
                  <li>Products</li>
                </Link>
                {/* <li>
                <BsFillPersonFill /> Login
              </li> */}
              </li>
              <li>
                <IoCartOutline className="link__cart" />
              </li>
              <li className="nav__burger">
                <RxHamburgerMenu />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Link>
  );
}
