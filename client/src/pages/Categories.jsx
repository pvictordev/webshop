import React, { useState, useEffect } from "react";
import "../styles/categories.scss";
import HomeRoute from "../components/ui-comps/HomeRoute";
import Products from "../data/Products";
import Card from "../components/ui-comps/Card";
import Buttons from "../components/ui-comps/Buttons";

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
