import React from "react";
import "../home-styles/home.scss";
import Hero from "../home-comps/Hero";
import Overview from "../home-comps/Overview";
import Best from "../home-comps/Best";
import Trend from "../home-comps/Trend";
import Banner from "../home-comps/Banner";

const Home = ({ toggleFavorite, productsList }) => {
  return (
    <div className="Home">
      <Hero />
      <Overview />
      <Best toggleFavorite={toggleFavorite} productsList={productsList} />
      <Banner
        title={"Create your perfect environment"}
        description={
          "You deserve the best, and we're here to provide it. Don't waste your time searching online for the perfect match for your room and create your dream setup right here."
        }
        image={
          "https://images.unsplash.com/photo-1529336953128-a85760f58cb5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        reverse={false}
      />
      <Trend toggleFavorite={toggleFavorite} productsList={productsList} />
      <Banner
        title={"Be more stylish with us"}
        description={
          "We can assist you in accentuating your unique personality through our extensive selection of clothing. Choose from a wide array of garments that resonate with your style, and experience the swiftness of our delivery."
        }
        image={
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        reverse={false}
      />
    </div>
  );
};

export default Home;
