import React from "react";
import { useParams } from "react-router-dom";

export default function Product({ product }) {
  const { id } = useParams();
  const products = product.find((products) => products._id === id);

  // console.log("HERE HERE 1", {id});

  if (products) {
    return (
      <div className="product-container">
        <img
          src={products.imgURL}
          alt=""
          key={products.imgURL}
          className="product-img"
        />
        <div className="info-contain">
          <h1>{products.name}</h1>
          <h4 className="info-price">
            ${products.price}
          </h4>
          <p className="info-des">
            {products.description}
          </p>
        </div>
      </div>
    );
  } else {
    return null
  }
}
