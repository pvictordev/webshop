import React, { useEffect } from "react";
import "../ui-styles/modalCart.scss";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  setCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

export default function ModalCart({ toggleCart }) {
  //redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      dispatch(setCart(parsedCart));
    }
  }, []);

  const cartProducts = cartItems.map((product) => {
    const price = product.price * product.quantity;
    const priceToFixed = price.toFixed(2);

    return (
      <div className="cart__item" key={product.id}>
        <div className="cart__img">
          <img src={product.image} alt="" />
        </div>

        <div className="cart__details">
          <p className="details__name">{product.name}</p>
          <p>{product.texture}</p>
          <div className="details__quantity">
            <div className="quantity__buttons-cart">
              <button
                onClick={() => {
                  dispatch(incrementQuantity({ id: product.id }));
                }}
              >
                +
              </button>
              <p>{product.quantity}</p>
              <button
                onClick={() => {
                  dispatch(decrementQuantity({ id: product.id }));
                }}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="cart__price">
          <p>${priceToFixed}</p>
          <div>
            <GrClose
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
            />
          </div>
        </div>
      </div>
    );
  });
  const cartTotal = cartItems.reduce((total, item) => {
    const price = item.price * item.quantity;
    return total + price;
  }, 0);

  return (
    <div className="modal__cart-content">
      <div className="cart__top">
        <div className="cart__title">
          <h2>Your Shopping Cart ({cartItems.length})</h2>
          <div>
            <GrClose onClick={toggleCart} />
          </div>
        </div>
        <div className="cart__body">
          <div className="full-cart__container">
            <div className="full__cart">
              {cartItems.length <= 0 ? (
                <div className="empty-cart">Cart is empty</div>
              ) : (
                cartProducts
              )}
            </div>
          </div>

          <div className="cart__bottom">
            <div className="subtotal__cart">
              <div className="subtotal__left">
                <p>Subtotal</p>
                <p className="total">
                  $
                  {cartTotal.toFixed(2)}
                </p>
              </div>
              <div className="subtotal__right">
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
