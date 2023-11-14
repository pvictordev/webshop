import React, { useEffect } from "react";
import "../productPage.scss";
import HomeRoute from "../ui-comps/HomeRoute.jsx";
import { useParams } from "react-router-dom";
import Trend from "../home-comps/Trend.jsx";
import { useDispatch } from "react-redux";
import {
  addToCart,
  setCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice.jsx";
import { useSelector } from "react-redux";

const ProductPage = ({ productsList, toggleFavorite }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCart(parsedCart));
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  const { id } = useParams();
  const item = productsList.find((product) => product._id === id);

  if (!item) {
    return null;
  }
  console.log(item);
  return (
    <div className="Products">
      <HomeRoute />

      <div className="Products__container">
        <div className="Products__content">
          <div className="Products__product">
            <div className="Product__images">
              <h1 className="Product__title image__title" align="center">
                {item.name}
              </h1>
              <div className="main__image">
                <img src={item.image} alt="" />
              </div>
              <div className="carousel__images">
                <img src={item.image} alt="" />
                <img src={item.image} alt="" />
                <img src={item.image} alt="" />
              </div>
            </div>
            <div className="Product__info">
              <h1 className="Product__title info__title">{item.name}</h1>
              <div className="info__description">
                {item.detailedDescription}
              </div>
              <div className="info__quantity">
                <p>Quantity</p>
                <div className="quantity__buttons">
                  <button
                    onClick={() => {
                      dispatch(incrementQuantity({ id: item._id }));
                    }}
                  >
                    +
                  </button>
                  <p className="qnt">
                    {(() => {
                      const foundProduct = cartItems.find(
                        (product) => product.id === item._id
                      );
                      return foundProduct ? foundProduct.quantity : 1;
                    })()}
                  </p>

                  <button
                    onClick={() => {
                      dispatch(decrementQuantity({ id: item._id }));
                    }}
                  >
                    -
                  </button>
                </div>
                <p className="prc">
                  {(() => {
                    const foundProduct = cartItems.find(
                      (product) => product.id === item._id
                    );
                    return foundProduct ? (
                      <span>
                        $
                        {(foundProduct.price * foundProduct.quantity).toFixed(
                          2
                        )}
                      </span>
                    ) : (
                      <span>${item.price.toFixed(2)}</span>
                    );
                  })()}
                </p>
              </div>
              <div className="info__buttons">
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        name: item.name,
                        image: item.image,
                        id: item._id,
                        price: item.price,
                        texture: item.texture,
                        quantity: item.quantity,
                      })
                    );
                    // saveCartToLocalStorage(cartItems);
                  }}
                >
                  Add to cart
                </button>
                <button>Buy now</button>
              </div>
            </div>
          </div>
          <div className="product__specs">
            <div className="specs__details">
              <h2>Texture:</h2>
              <p>{item.texture}</p>
            </div>
            <div className="specs__details">
              <h2>Weight:</h2>
              <p>{item.weight}</p>
            </div>
            <div className="specs__details">
              <h2>Size:</h2>
              <p>
                {item.size.width}cm x {item.size.length}cm
              </p>
            </div>
          </div>
        </div>
      </div>
      <Trend productsList={productsList} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default ProductPage;
