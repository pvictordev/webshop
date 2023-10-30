import React, { useEffect, useState } from "react";
import "../products.scss";
import HomeRoute from "../ui-comps/HomeRoute";
import { useParams, useNavigate } from "react-router-dom";
import Trend from "../home-comps/Trend.jsx";
import Best from "../home-comps/Best.jsx";
import Banner from "../home-comps/Banner";
// import productsPage from "../data/Products";

const Products = ({ productsList }) => {
  //const history = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   const item = productsList.filter((product) => product.id === parseInt(id));
  //   console.log(item);
  // }, [id, productsList]);

  const item = productsList.find((product) => product.id === parseInt(id, 10));

  if (!item) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="Products">
      <HomeRoute />
      <div className="Products__container">
        <div className="Products__content">
          <div className="Product__images">
            <h1 className="Product__title image__title" align="center">
              {item.name}
            </h1>
            <div className="main__image">
              <img src={item.image} alt="" />
            </div>
            <div className="carousel__images">
              <img src={item.image} alt="" />
              <img src={item.image} alt="" />
              <img src={item.image} alt="" />
            </div>
          </div>
          <div className="Product__info">
            <h1 className="Product__title info__title">Product</h1>
            <div className="info__description">{item.description}</div>
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
