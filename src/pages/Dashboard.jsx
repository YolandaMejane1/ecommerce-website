import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Bag from "../components/dashboardBag";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProducts } from '../redux/products/productSlice';
import { addToCart } from '../redux/cart/cartSlice';
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const filteredProducts = useSelector((state) => state.product.filteredItems);
  const cart = useSelector((state) => state.cart.cart); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const addToCartHandler = (product) => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-8 d-flex flex-column" style={{ gap: "5px" }}>
            <div className="col-12 col-md-8 col-lg-6">
              <SearchBar onSearch={handleSearch} />
            </div>
            <div className="max-w-screen-lg mx-auto px-1">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
                {filteredProducts.length === 0 ? (
                  <p>No products found</p>
                ) : (
                  filteredProducts.map((product) => (
                    <div className="col" key={product.id}>
                      <ProductCard product={product} addToCart={addToCartHandler} />
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="d-none d-md-block" style={{ flexBasis: "5%" }}>
              <Bag items={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;