import React, { useEffect, useState } from "react";
import "../products.scss";
import HomeRoute from "../ui-comps/HomeRoute";
import { useParams, useNavigate } from "react-router-dom";
import Trend from "../home-comps/Trend.jsx";
// import productsPage from "../data/Products";

const Products = ({ productsList }) => {
  //const { id } = useParams();
  //const history = useNavigate();

  const id = useParams();
  // useEffect(() => {
  //   const item = productsList.filter((product) => product.id === parseInt(id));
  //   console.log(item);
  // }, [id, productsList]);

  const item = productsList.filter((product) => product.id === parseInt(id));
  console.log(item);

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
