import React, { useState } from "react";
import "../styles/products.scss";
import { SlArrowLeft } from "react-icons/sl";
import { Link } from "react-router-dom";
import HomeRoute from "../components/HomeRoute";
const Products = () => {
  return (
    <div className="Products">
      <div className="Products__container">
        <HomeRoute/>
        <div className="Products__content">
          <div className="Product__images">
            <div className="main__image">
              <img src="src/assets/webshop.png" alt="" />
            </div>
            <div className="carousel__images">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="Product__info">
            <h1 className="Product__title">Product</h1>
            <div className="info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              illum at officia provident, culpa perferendis quo neque iure
              dolorum praesentium minus error ut sapiente dolore maxime sequi
              architecto quia suscipit.
            </div>
            <div className="info__quantity">
              <p>Quantity</p>
              <div className="quantity__buttons">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <p>100.00$</p>
            </div>
            <div className="info__buttons">
              <button>Add to cart</button>
              <button>Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
