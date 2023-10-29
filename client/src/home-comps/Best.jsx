import React from "react";
import "../home-styles/best.scss";
import Products from "../data/Products";
import Card from "../ui-comps/Card.jsx";

export default function Best({ toggleFavorite, favorite }) {
  const best = Products.splice(0, 4).map((product) => {
    return <Card key={product.id} {...product} toggleFavorite={toggleFavorite} favorite={favorite} />;
  });

  return (
    <div className="Best">
      <div className="Best__header">
        <h1>Best sellers</h1>
      </div>

      <div className="Best__grid">{best}</div>
    </div>
  );
}
