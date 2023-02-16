import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon_prime_image"
      />

      <div className="home__row">
        <Product
          id="12345"
          title="Amazon Basics in-Ear Bluetooth 5.0 Neckband with Up to 30 Hours Playtime, Magnetic Earbuds, Voice Assistant, Dual Pairing and IPX6 Rated, with Mic (Black)"
          price={649}
          rating={3}
          image="https://m.media-amazon.com/images/I/51YFVQl8lsL._SX522_.jpg"
        />

        <Product
          id="45678"
          title="Amazon Brand - Symbol Men's Regular Polo Shirt"
          price={369}
          rating={4}
          image="https://m.media-amazon.com/images/I/713n+TxyfCL._UY879_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3698"
          title="Fire TV Stick with Alexa Voice Remote (includes TV and app controls) | HD streaming device"
          price={3999}
          rating={4}
          image="https://m.media-amazon.com/images/I/51lX5oZbtQL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Product
          id="1478"
          title="Amazon Basics - Laptop Backpack/Travel Backpack/College Bag for 15.6-inch Laptop, Water-Resistant, Stylish Design"
          price={1859}
          rating={5}
          image="https://m.media-amazon.com/images/I/9181IVjwkwL._AC_UL480_FMwebp_QL65_.jpg"
        />

        <Product
          id="2589"
          title="Amazon Brand - Symactive Mens Walking Shoe"
          price={513}
          rating={4}
          image="https://m.media-amazon.com/images/I/81XvQv6BesL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="2147"
          title="AmazonBasics 81cm (32 inches) Fire TV Edition HD Ready Smart LED TV AB32E10SS (Black)"
          price={12299}
          rating={4}
          image="https://m.media-amazon.com/images/I/61YUFFFYRSL._SX679_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
