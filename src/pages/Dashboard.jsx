import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bag from "../components/dashboardBag";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(products); 
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results); 
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ marginLeft: "80px" }}>
        <Navbar />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8 d-flex" style={{ gap: "20px" }}>
            <div className="flex-grow-1">
              <SearchBar onSearch={handleSearch} />
              <div className="d-flex flex-wrap">
                {filteredProducts.length === 0 ? (
                  <p>No products found</p>
                ) : (
                  filteredProducts.map((product) => (
                    <div className="col-md-6" key={product.id}>
                      <ProductCard product={product} addToCart={addToCart} />
                    </div>
                  ))
                )}
              </div>
            </div>
            
            <div style={{ flexBasis: "5%" }}>
              <Bag items={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;