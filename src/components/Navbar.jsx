import React from "react";
import "../styles/navbar.scss";
import { IoCartOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__container">
        <div className="container__content">
          <div className="content__logo">
            <img src="src/assets/webshop.png" alt="" />
            <h1>Webshop</h1>
          </div>
          <div className="content__search">
            <input className="search__input" type="text" placeholder="Look for" />
          </div>
          <ul className="content__nav">
            <li className="nav__links">
              Home
              <li>Cateogories</li>
              <li>Product</li>
              {/* <li>
                <BsFillPersonFill /> Login
              </li> */}
            </li>
            <li>
              <IoCartOutline />
            </li>
            <li className="nav__burger">
              <RxHamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
