import React, { useEffect } from "react";
import "../home-styles/hero.scss";
import Typed from "typed.js";
import { Link } from "react-router-dom";

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
    <div className="Hero" id="hero">
      <div className="Hero__container">
        <div className="Hero__content">
          <div className="content__text">
            <h1>
              Webshop, <span ref={el} className="slogan"></span>{" "}
            </h1>
            <h2>
              We are different on the market, first E-commerce with it's own
              shiping company.
            </h2>
            <button className="shop__button">
              {" "}
              <Link to={"/categories"} onClick={() => window.scrollTo(0, 0)}>
                Shop now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
