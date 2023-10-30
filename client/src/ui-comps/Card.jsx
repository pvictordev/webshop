  import React, { useState } from "react";
  import "../ui-styles/card.scss";
  import { Link } from "react-router-dom";
  import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
  // import Products from "../pages/Products";

  export default function Card({
    toggleFavorite,
    id,
    name,
    description,
    image,
    price,
    favorite,
  }) {
    return (
      <div className="grid__card">
        <div className="card__favorite">
          {favorite ? (
            <MdFavorite
              className="favorite__icon"
              onClick={() => toggleFavorite(id)}
            />
          ) : (
            <MdFavoriteBorder
              className="favorite__icon"
              onClick={() => toggleFavorite(id)}
            />
          )}
        </div>
        <Link
          className="card__container"
          to={`/products/${id}`}
          // element={<Products />}
          onClick={() => {
            window.top(0, 0);
          }}
          style={{ textDecoration: "none", display: "flex", color: "#333" }}
        >
          <div className="card__image">
            <img src={image} alt="" />
          </div>
          <div className="card__content">
            <div className="card__text">
              <h2>{name}</h2>
              <p>{description}</p>
              <span>${price}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
