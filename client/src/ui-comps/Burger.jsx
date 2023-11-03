import React, {useState} from "react";
import "../ui-styles/burger.scss";
import { BsInstagram, BsSnapchat, BsFacebook, BsTwitter } from "react-icons/bs";
import {GrClose} from "react-icons/gr";
import { Link } from "react-router-dom";

export default function Burger({toggleMenu}) {

  return (
    <div className="burger">
      <div className="close__burger" onClick={toggleMenu}>
        <GrClose />
      </div>
      <h1 className="burger__title">Menu</h1>
      <ul className="burger__list">
        <Link to={"/categories"} onClick={toggleMenu}>
          Categories
        </Link>
        <Link to={"/products/5"} onClick={toggleMenu}>
          Products
        </Link>

        <li>FAQs</li>
        <li>News</li>
        <li>Contact</li>
      </ul>
      <ul className="burger__socials">
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsSnapchat />
        </li>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsTwitter />
        </li>
      </ul>
    </div>
  );
}
