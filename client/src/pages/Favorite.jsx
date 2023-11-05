import React, {useEffect} from "react";
import "../favorite.scss";
import Card from "../ui-comps/Card";
import HomeRoute from "../ui-comps/HomeRoute";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Favorite = ({
  toggleFavorite,
  productsList,
  favoriteItems,
  setFavoriteItems,
}) => {
  // const favoriteProducts = productsList.filter(
  //   (product) => product.favorite === true
  // );

  useEffect(() => {
    const storedFavoriteItems = JSON.parse(
      localStorage.getItem("favoriteItems")
    );
    if (storedFavoriteItems) {
      setFavoriteItems(storedFavoriteItems);
    }
  }, [setFavoriteItems]);
  const favoriteProducts = favoriteItems.filter(
    (product) => product.favorite === true
  );
  console.log(favoriteItems);

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
            {favoriteProducts.length <= 0 ? (
              <div className="no-favorite">
                {" "}
                <div>
                  <MdFavoriteBorder />
                </div>
                <h1>You have no Favorite Items</h1>
                <p>
                  Go to categories section and add some items to your favorite
                  list to see
                </p>
                <Link to={"/categories"} className="go-to-shop">
                  Go to categories
                </Link>
              </div>
            ) : (
              <h1>Favorite items</h1>
            )}
          </div>

          <div className="Favorite__grid">{products}</div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
