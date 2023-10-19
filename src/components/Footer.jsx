import React from "react";
import "../styles/footer.scss";

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
        <p>©2023 pvictordev. All rights reserved.</p>
      </div>
    </div>
  );
}
