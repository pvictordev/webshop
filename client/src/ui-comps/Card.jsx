import React, {useState} from "react";
import "../ui-styles/card.scss";
import { Link } from "react-router-dom";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export default function Card(props) {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className="grid__card">
      <div className="card__favorite">
        {favorite ? (
          <MdFavorite className="favorite__icon" onClick={toggleFavorite} />
        ) : (
          <MdFavoriteBorder
            className="favorite__icon"
            onClick={toggleFavorite}
          />
        )}
      </div>
      <Link
        to={`/categories/products/${props.id}`}
        onClick={() => window.top(0, 0)}
        style={{ textDecoration: "none", display: "flex", color: "#333" }}
        className="card__container"
      >

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

      </Link>
    </div>

  );
}
