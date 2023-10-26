import React from "react";
import "../home-styles/footer.scss";
import { BsInstagram, BsSnapchat, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <ul className="Footer__list">
          <li>About</li>
          <li>Offline</li>
          <li>FAQs</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="Footer__list">
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
        <p>©2023 pvictordev. All rights reserved.</p>
      </div>
    </div>
  );
}
