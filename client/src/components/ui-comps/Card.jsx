import React from "react";
import "../styles/ui-styles/card.scss";
import { Link } from "react-router-dom";

//link to products page
{
  /* <Link
  to={`/categories/products/${props.id}`}
  onClick={() => window.top(0, 0)}
></Link>; */
}

export default function Card(props) {
  return (
    <Link
      to={`/categories/products/${props.id}`}
      onClick={() => window.top(0, 0)}
      style={{ textDecoration: "none", display: "flex", color: "#333" }}
    >
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
        </div>
      </div>
    </Link>

    // <div className="grid__card">
    //   <div className="card__image">
    //     <img src={props.image} alt="" />
    //   </div>
    //   <div className="card__content">
    //     <div className="card__text">
    //       <h2>{props.name}</h2>
    //       <p>{props.description}</p>
    //       <span>${props.price}</span>
    //     </div>
    //   </div>
    // </div>
  );
}
