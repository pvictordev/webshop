import React, { useEffect, useRef } from "react";
import "../home-styles/hero.scss";
import Typed from "typed.js";
import heroBG from "../assets/hero-bg.jpg";

export default function Hero() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "pioneers in online selling",
        "the best in the business",
        "super fast delivery",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Hero">
      <div className="Hero__container">
        <div className="Hero__content">
          <div className="content__text">
            <h1>
              Webshop, <span ref={el} className="slogan"></span>{" "}
            </h1>
            <h2>
              We are different on the market, first E-commerce with
              it's own shiping company.
            </h2>
            <button>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
