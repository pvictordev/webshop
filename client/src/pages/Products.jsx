import React, { useEffect, useState } from "react";
import "../products.scss";
import HomeRoute from "../ui-comps/HomeRoute";
import { useParams, useNavigate } from "react-router-dom";
import Trend from "../home-comps/Trend.jsx";

const Products = ({ productsList, toggleFavorite, addToCart }) => {
  const { id } = useParams();

  const item = productsList.find((product) => product.id === parseInt(id, 10));

  if (!item) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div className="Products">
      <HomeRoute />
      <div className="Products__container">
        <div className="Products__content">
          <div className="Products__product">
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
              <h1 className="Product__title info__title">{item.name}</h1>
              <div className="info__description">
                {item.detailedDescription}
              </div>
              <div className="info__quantity">
                <p>Quantity</p>
                <div className="quantity__buttons">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
                <p>${item.price}</p>
              </div>
              <div className="info__buttons">
                <button onClick={() => addToCart(id)}>Add to cart</button>
                <button>Buy now</button>
              </div>
            </div>
          </div>
          <div className="product__specs">
            <div className="specs__details">
              <h2>Texture:</h2>
              <p>{item.texture}</p>
            </div>
            <div className="specs__details">
              <h2>Weight:</h2>
              <p>{item.weight}</p>
            </div>
            <div className="specs__details">
              <h2>Size:</h2>
              <p>
                {item.size.width}cm x {item.size.length}cm
              </p>
            </div>
          </div>
        </div>
      </div>
      <Trend productsList={productsList} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Products;
