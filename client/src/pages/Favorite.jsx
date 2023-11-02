import React from "react";
import "../favorite.scss";
import Card from "../ui-comps/Card";
import HomeRoute from "../ui-comps/HomeRoute";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Favorite = ({ toggleFavorite, productsList }) => {
  const favoriteProducts = productsList.filter(
    (product) => product.favorite === true
  );
  const products = favoriteProducts.map((product) => {
    return (
      <Card key={product.id} {...product} toggleFavorite={toggleFavorite} />
    );
  });
  

  return (
    <div className="Favorite">
      <HomeRoute />
      <div className="Favorite__container">
        <div className="Favorite__content">
          <div className="Favorite__header">
            {favoriteProducts.length <= 0 && (
              <div className="no-favorite">
                <div>
                  <MdFavoriteBorder />
                </div>
                <h1>You have no Favorite Items</h1>
                <p>
                  Sign in to sync all your saved items across all your devices
                </p>
                <button>Sign In</button>
              </div>
            )}
          </div>

          <div className="Favorite__grid">{products}</div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
