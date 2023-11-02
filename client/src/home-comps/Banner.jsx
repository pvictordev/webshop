import React from "react";
import "../home-styles/banner.scss";
import { Link } from "react-router-dom";

export default function Banner(props) {
  return (
    <div className="Banner">
      <div className={`Banner__content ${props.reverse ? " reverse" : ""}`}>
        <div className="banner__text">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <button>
            {" "}
            <Link to={"/products/5"} onClick={() => window.scrollTo(0, 0)}>
              Go to shop
            </Link>{" "}
          </button>
        </div>
        <div className="banner__image">
          <img className="image__banner" src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
}
