import React, { useEffect, useState } from "react";
import "../styles/products.scss";
import { Link } from "react-router-dom";
import HomeRoute from "../components/HomeRoute";
import { useParams } from "react-router-dom";
import Trend from "../components/Trend";
import products from "../data/Products";
import Image from "../assets/webshop.png";

const Products = () => {

  const {id} = useParams();

  const item = products.filter((product) => product.id === parseInt(id));

  return (
    <div className="Products">
      <HomeRoute />
      <div className="Products__container">
        <div className="Products__content">
          <div className="Product__images">
            <h1 className="Product__title image__title" align="center">
              {item[0].name}
            </h1>
            <div className="main__image">
              <img src={item[0].image} alt="" />
            </div>
            <div className="carousel__images">
              <img src={item[0].image} alt="" />
              <img src={item[0].image} alt="" />
              <img src={item[0].image} alt="" />
            </div>
          </div>
          <div className="Product__info">
            <h1 className="Product__title info__title">Product</h1>
            <div className="info__description">{item[0].description}</div>
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
        <Trend />
      </div>
    </div>
  );
};

export default Products;
