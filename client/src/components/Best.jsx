import React from "react";
import "../styles/best.scss";
import Products from "../data/Products";
import Card from "./Card";

export default function Best() {
  const best = Products.splice(0, 6).map((product) => {
    return <Card key={product.id} {...product} />;
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
