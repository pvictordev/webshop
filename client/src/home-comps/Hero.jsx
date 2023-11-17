import React, { useEffect } from "react";
import "../home-styles/hero.scss";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero-img(3).png";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  // const el = React.useRef(null);
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [
  //       "pioneers in online selling",
  //       // "the best in the business",
  //       // "super fast delivery",
  //     ],
  //     typeSpeed: 40,
  //     backSpeed: 40,
  //     loop: false,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);

  return (
    <div className="Hero" id="hero">
      <div className="Hero__container">
        <div className="Hero__content">
          <div className="content__text">
            {/* <h1>
              Webshop, <span ref={el} className="slogan"></span>{" "}
            </h1> */}
            <h1>
              Webshop, pioneers in online selling <FaArrowRight />
            </h1>
            <h2>
              We deliver the best quality products at the best prices to your
              doorstep !
            </h2>{" "}
            <div className="shop__button">
              <Link
                className="button-shop"
                to={"/categories"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <span>Shop now</span> <FaArrowDown />
              </Link>
            </div>
          </div>
          <div className="content__img">
            <img src={heroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
