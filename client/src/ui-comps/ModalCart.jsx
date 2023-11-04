import React, { useState, useEffect } from "react";
import "../ui-styles/modalCart.scss";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, setCart, incrementQuantity, decrementQuantity } from "../redux/cartSlice";

export default function ModalCart({ toggleCart, productsList }) {
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
  console.log(cartItems);
  const cartProducts = cartItems.map((product) => {
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
              <button onClick={""}>+</button>
              <p>{product.quantity}</p>
              <button onClick={""}>-</button>
            </div>
          </div>
        </div>
        <div className="cart__price">
          <p>${product.price}</p>
          <div>
            <GrClose
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="modal__cart-content">
      <div className="cart__top">
        <div className="cart__title">
          <h2>Your Shopping Cart {cartItems.length}</h2>
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
                <p>$200</p>
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
