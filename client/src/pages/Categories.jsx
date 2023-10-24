import React, { useState, useEffect } from "react";
import "../styles/categories.scss";
import { SlArrowLeft } from "react-icons/sl";
import HomeRoute from "../components/HomeRoute";
import axios from "axios";
import Products from "../data/Products";
import Card from "../components/Card";
import Buttons from "../components/Buttons";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Products.map((product) => product.category))];
  const [headerText, setHeaderText] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter((product) => product.category === selectedCategory);

  const products = filteredProducts.map((product) => {
      return <Card key={product.id} {...product} />;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setHeaderText(category);

  };

  return (
    <div className="Categories">
      <HomeRoute />
      <div className="Categories__container">
        <div className="Categories__content">
          <div className="Categories__header">
            <h1>{headerText}</h1>
          </div>
          {/* <ul className="Categories__buttons">
            <li>All</li>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Household</li>
            <li>Skin care</li>
            <li>Toys</li>
          </ul> */}
          <Buttons
            menuItems={menuItems}
            selectedCategory={selectedCategory}
            handleCategoryClick={handleCategoryClick}
          />
          <div className="Categories__grid">{products}</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
