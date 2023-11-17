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
import { MdFullscreen } from "react-icons/md";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcJcb,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

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

  return (
    <div className="Products">
      <HomeRoute />

      <div className="Products__container">
        <div className="Products__content">
          <div className="Products__product">

            <div className="Product__images">
              <div className="main__image">
                <MdFullscreen className="image-full" />
                <img src={item.image} alt="" />
              </div>
              <div className="carousel__images">
                <img src={item.image} alt="" />
                <img src={item.image} alt="" />
                <img src={item.image} alt="" />
              </div>
            </div>

            <div className="Product__info">
              <span className="info__category">{item.category}</span>
              <h1 className="info__title">{item.name}</h1>
              <p className="info__description">{item.detailedDescription}</p>
              <div className="info__quantity">
                <button
                  className="info__buttons"
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
                    saveCartToLocalStorage(cartItems);
                  }}
                >
                  Add to cart{" "}
                  {/* <span>
                    <IoCartOutline />
                  </span> */}
                </button>

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

              <fieldset className="info__payment">
                <legend>Guaranteed Safe Checkout</legend>
                <ul>
                  <li>
                    <FaCcVisa />
                  </li>
                  <li>
                    <FaCcMastercard />
                  </li>
                  <li>
                    <FaCcJcb />{" "}
                  </li>
                  <li>
                    {" "}
                    <FaCcDiscover />{" "}
                  </li>
                </ul>
              </fieldset>
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
