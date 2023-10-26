import React, {useState} from "react";
import "../styles/ui-styles/burger.scss";
import { BsInstagram, BsSnapchat, BsFacebook, BsTwitter } from "react-icons/bs";
import {GrClose} from "react-icons/gr";

export default function Burger({toggleMenu}) {

  return (
    <div className="burger">
      <div className="close__burger" onClick={toggleMenu}>
        <GrClose />
      </div>
      <h1 className="burger__title">Menu</h1>
      <ul className="burger__list">
        <li>Categories</li>
        <li>Products</li>
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
