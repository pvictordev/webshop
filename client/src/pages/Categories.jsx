import React, {useState, useEffect} from "react";
import "../styles/categories.scss";
import { SlArrowLeft } from "react-icons/sl";
import HomeRoute from "../components/HomeRoute";
import axios from "axios";

const Categories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getProducts")
      .then(products => setProducts(products.data))
      .catch((err) => console.log(err));
  }, []);  

  const productsMap = products.map((product) => {
    <div className="grid__card">
      <div className="Categories__image">
        <img src={product.image} alt="" />
      </div>
      <div className="Categories__info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>;
  }
  );

  return (
    <div className="Categories">
      <div className="Categories__container">
        <HomeRoute />
        <div className="Categories__content">
          <div className="Categories__header">
            <h1>All</h1>
          </div>
          <ul className="Categories__list">
            <li>All</li>
            <li>Clothes</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Household</li>
            <li>Skin care</li>
            <li>Toys</li>
          </ul>
          <div className="Categories__grid">
            <div className="grid__card">
              <div className="card__image">
                <img src="./src/assets/webshop.png" alt="" />
              </div>
              <div className="card__text">
                <h2>Product name</h2>
                <p>Product description</p>
                <p>100$</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
