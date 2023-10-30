import React, { useState, useEffect } from "react";
import "../categories.scss"
import HomeRoute from "../ui-comps/HomeRoute";
import Card from "../ui-comps/Card";
import Buttons from "../ui-comps/Buttons";

const Categories = ({toggleFavorite, productsList}) => {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [
    ...new Set(productsList.map((product) => product.category)),
  ];
  const [headerText, setHeaderText] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsList
      : productsList.filter((product) => product.category === selectedCategory);

  const products = filteredProducts.map((product) => {
    return <Card key={product.id} {...product} toggleFavorite={toggleFavorite} />;
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
