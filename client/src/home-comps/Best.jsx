import React from "react";
import "../home-styles/best.scss";
import Card from "../ui-comps/Card.jsx";

export default function Best({ toggleFavorite, productsList }) {
  const best = productsList
    .slice(0, 4)
    .map((product) => (
      <Card key={product._id} {...product} toggleFavorite={toggleFavorite} />
    ));

  return (
    <div className="Best">
      <div className="Best__header">
        <h1>Best sellers</h1>
      </div>

      <div className="Best__grid">{best}</div>
    </div>
  );
}
