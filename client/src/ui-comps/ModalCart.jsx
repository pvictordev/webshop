import React, { useState, useEffect } from "react";
import "../ui-styles/modalCart.scss";
import { GrClose } from "react-icons/gr";
import image from "../assets/webshop.png";

export default function ModalCart({ cart, setCart, toggleCart, addToCart }) {
  //check if product is added to cart

  const addedProducts = cart.filter((product) => product.cart === true);

  // useEffect(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCart(savedCart);
  // }, []);

  console.log(addedProducts.length);

  const cartProducts = addedProducts.map((product) => {
    return (
      <div className="cart__item" key={product.id}>
        <div className="cart__img">
          <img src={product.image} alt="" />
        </div>

        <div className="cart__details">
          <p className="details__name">{product.name}</p>
          <p>
            {/* {product.size.width}cm x {product.size.length}cm{" "} */}
            {product.texture}
          </p>
          <div className="details__quantity">
            <div className="quantity__buttons">
              <button>-</button>
              <p>2</p>
              <button>+</button>
            </div>
          </div>
        </div>
        <div className="cart__price">
          <p>${product.price}</p>
          <div>
            <GrClose onClick={() => addToCart(product.id)} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="modal__cart-content">
      <div className="cart__top">
        <div className="cart__title">
          <h2>Your Shopping Cart ({addedProducts.length})</h2>
          <div>
            <GrClose onClick={toggleCart} />
          </div>
        </div>
        <div className="cart__body">
          <div className="full-cart__container">
            <div className="full__cart">
              {/* <div className="cart__item">
                <div className="cart__img">
                  <img src={image} alt="" />
                </div>

                <div className="cart__details">
                  <p className="details__name">Product</p>
                  <p>Product description</p>
                  <div className="details__quantity">
                    <div className="quantity__buttons">
                      <button>-</button>
                      <p>2</p>
                      <button>+</button>
                    </div>
                  </div>
                </div>
                <div className="cart__price">
                  <p>100.00$</p>
                  <div>
                    <GrClose onClick={""} />
                  </div>
                </div>
              </div> */}
              {addedProducts.length <= 0 ? (
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
                <p>$200.00</p>
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
