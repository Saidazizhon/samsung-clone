import React from "react";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import product5 from "../../images/product5.png";
import product6 from "../../images/product6.png";

const ShopAll = () => {
  let links = [
    "For You",
    " Mobile & Computing",
    " TV & Audio",
    " Home Appliances",
    " Samsung Live",
    " For Business",
  ];
  let items = links?.map((el, i) => (
    <li key={i}>
      <a href="">{el}</a>
    </li>
  ));
  let products = [
    {
      id: 1,
      url: product1,
      title:
        "Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera & Illuminated Precision Knobs",
      price: "Save $600",
      form: "$1499",
      btn: "Pre-order now",
    },
    {
      id: 2,
      url: product2,
      title: "Galaxy Buds2 Pro",
      price: "Save up to $40.",
      form: "$189.99 before eligible trade-in.",
      btn: "Buy now",
    },
    {
      id: 3,
      url: product3,
      title: "Q-series 11.1.4 ch. Wireless Dolby ATMOS Soundbar",
      price: "Save $500",
      form: "$1399.99",
      btn: "Buy now",
    },
    {
      id: 4,
      url: product4,
      title: "23 cu. ft. Bespoke 4-Door Flex Refrigerator with AI Family Hub",
      price: "Save $1200",
      form: "$3899",
      btn: "Pre-order now",
    },
    {
      id: 5,
      url: product5,
      title: "Galaxy S24 Ultra, 1TB (Unlocked)",
      price: "Save up to $150.",
      form: " From $1509.99 before eligible trade-in.",
      btn: "Buy now",
    },
    {
      id: 6,
      url: product6,
      title:
        "Bespoke 5.3 cu. ft. All-in-One AI Laundry Combo Ultra Capacity Washer and Ventless Heat Pump Dryer",
      price: "Save $1100",
      form: "$2199",
      btn: "Pre-order now",
    },
  ];
  console.log(products);
  let mappingProducts = products?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <h4 title={el.title}>{el.title}</h4>
      <h5>{el.price}</h5>
      <p>From {el.form}</p>
      <button>{el.btn}</button>
    </div>
  ));
  console.log(products);
  return (
    <div className="shop-all">
      <h1>Shop all latest offers and innovations</h1>
      <ul className="links">{items}</ul>
      <div className="cards">{mappingProducts}</div>
    </div>
  );
};

export default ShopAll;
