import React from "react";
import "../ui-styles/favorite.scss";
import Products from "../data/Products";
import Card from "../ui-comps/Card";
import HomeRoute from "./HomeRoute";

export default function Favorite() {
  const favoriteProducts = Products.filter((product) => product.favorite === true);
  const products = favoriteProducts.map((product) => {
    return <Card key={product.id} {...product} />;
  });

  return (
    <div className="Favorite">
      <HomeRoute />
      <div className="Favorite__container">
        <div className="Favorite__content">
          <div className="Favorite__header">
            <h1>Favorite Items</h1>
          </div>
          <div className="Favorite__grid">{products}</div>
        </div>
      </div>
    </div>
  );
}
