import React from "react";
import "../styles/card.scss";

export default function Card(props) {
  return (
    <div className="grid__card">
      <div className="card__image">
        <img src={props.image} alt="" />
      </div>
      <div className="card__content">
        <div className="card__text">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <span>${props.price}</span>
        </div>
        {/* <div className="card__buttons">
          <button className="card__button">Add to cart</button>
          <button className="cart__button">Buy now</button>
        </div> */}
      </div>
    </div>
  );
}
