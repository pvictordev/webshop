import React, { useState, useEffect } from "react";
import "../styles/categories.scss";
import { SlArrowLeft } from "react-icons/sl";
import HomeRoute from "../components/HomeRoute";
import axios from "axios";
import Products from "../data/Products";
import Card from "../components/Card";

const Categories = () => {

  const products = Products.map((product) => {
    return (
      <Card key={product.id} {...product}/>
    );
  });
  return (
    <div className="Categories">
      <div className="Categories__container">
        <HomeRoute />
        <div className="Categories__content">
          <div className="Categories__header">
            <h1>All</h1>
          </div>
          <ul className="Categories__list">
            <li>All</li>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Household</li>
            <li>Skin care</li>
            <li>Toys</li>
          </ul>
          <div className="Categories__grid">
            {products}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
