import React from "react";
import "../styles/buttons.scss";

export default function Buttons({ menuItems, selectedCategory, handleCategoryClick }) {
  return (
    <ul className="Categories__buttons">
      <li
        className={`btn ${selectedCategory === "All" ? "active" : ""}`}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </li>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`btn ${selectedCategory === item ? "active" : ""}`}
          onClick={() => handleCategoryClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
