 import React, { useEffect, useState } from "react";
    import "./App.css";

    function App() {
      const [items, setItems] = useState([]);
      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch("http://localhost:5000/api/items")
          .then((response) => response.json())
          .then((data) => setItems(data));
      }, []);
      useEffect(() => {
        fetch("http://localhost:5000/api/products")
          .then((response) => response.json())
          .then((product) => setProducts(product));
      }, []);

      return (
        <div className="App">
          <header className="App-header">
            <h1>Items</h1>
            <ul>
              {items.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <h1>Menu</h1>
            <ul>
              {products.map((p) => (
                <li key={p.id}>{p.name}</li>
              ))}
            </ul>
          </header>
        </div>
      );
    }

    export default App;
     