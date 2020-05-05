import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import Card from "./components/Card";
import Product from "./components/Product";
import Sort from "./components/Sort"
import "./components/Product.css";
import Data from "./data.json";
import "./App.css";

function App() {
  const [products, productUpdate] = useState([]);
  const [input, inputSearch] = useState("");
  const [search, searchProduct] = useState("");
  // console.log("WAHAAA",products);
  console.log(search);

  const updateInput = (e) => {
    e.preventDefault();
    let target = e.target.value;
    inputSearch(target);
  };

  const searchItem = (e) => {
    e.preventDefault();
    searchProduct(input);
  };

  useEffect(() => {
    productUpdate(Data);
  }, [search]);

  return (
    <div>
      <nav className="navigation">
        <Link to="/">
          <h2>ProductApp</h2>
        </Link>
      </nav>
      <Route exact path="/">
      <div className="search">
        <form onChange={searchItem}>
          <input
            placeholder="Search"
            type="text"
            value={input}
            onChange={updateInput}
          />
        </form>
        </div>
      <div className="sorting">
          <Sort product={products}/>
        </div>
        </Route>
      <div className="cards">
        <Route exact path="/">
          <Card product={products} input={search} />
        </Route>
      </div>
      <div className="product-page">
        <Route path="/Product/:id">
          <Product product={products} />
        </Route>
      </div>
    </div>
  );
}

export default App;
