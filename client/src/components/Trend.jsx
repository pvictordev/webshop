import React from "react";
import "../styles/trend.scss";
import Products from "../data/Products";
import Card from "./Card";

export default function Trend() {
  const trend = Products.splice(0, 4).map((product) => {
    return <Card key={product.id} {...product} />;
  });
  return (
    <div className="Trend">
      <div className="Trend__header">
        <h1>Trending Products</h1>
      </div>
      <div className="Trend__grid">{trend}</div>
    </div>
  );
}
