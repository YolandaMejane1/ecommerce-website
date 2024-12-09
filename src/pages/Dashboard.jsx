import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bag from "../components/dashboardBag";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProducts } from '../redux/products/productSlice';
import SearchBar from "../components/SearchBar";

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const filteredProducts = useSelector((state) => state.product.filteredItems); 
  const dispatch = useDispatch();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (query) => {
    if (!query) {
      dispatch(setFilteredProducts([]));
    } else {
      const results = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      dispatch(setFilteredProducts(results));
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid" style={{ marginLeft: "0px" }}>
        <Navbar />
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-8 d-flex flex-column" style={{ gap: "20px" }}>
            <div className="d-flex justify-content-center my-3" style={{ width: "60%" }}>
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="max-w-screen-lg mx-auto px-4">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredProducts.length === 0 ? (
                  <p>No products found</p>
                ) : (
                  filteredProducts.map((product) => (
                    <div className="col" key={product.id}>
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
