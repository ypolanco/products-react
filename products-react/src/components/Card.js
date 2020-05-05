import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ product, input }) {
  const [products, updateProduct] = useState("");

  useEffect(() => {
    updateProduct(input);
  }, [input]);

  // console.log("FIND ME HERE MANNN",input);
  // console.log("FIND ME HERE SIRRRR", products);

  let searchResults = product.filter((name) => {
    return name.name.toLowerCase().includes(products.toLowerCase());
  });

  // console.log("FIND ME HERE SIRRRR", products);

  // console.log("boom Boom", searchResults);



  return (
    <div>
      {searchResults.map((data) => (
        <div className="card-container">
          <Link to={"/Product/" + data._id}>
            <div key={data._id} className="card-div">
              <img
                src={data.imgURL}
                alt="img"
                key={data.img}
                className="img-card"
              />
              <p key={data.name} className="card-name">
                {data.name}
              </p>
              <p key={data.price} className="card-price">
                ${data.price}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
