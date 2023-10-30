import React from "react";
import "../home-styles/trend.scss";
import Card from "../ui-comps/Card.jsx";

export default function Trend({ toggleFavorite, productsList }) {
  const trend = productsList
    .slice(4, 8)
    .map((product) => (
      <Card key={product.id} {...product} toggleFavorite={toggleFavorite} />
    ));

  return (
    <div className="Trend">
      <div className="Trend__header">
        <h1>Trending Products</h1>
      </div>
      <div className="Trend__grid">{trend}</div>
    </div>
  );
}
