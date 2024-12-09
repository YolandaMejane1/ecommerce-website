import React from "react";
import bagIcon from "../assets/Button.png";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card m-3" style={{ width: "12rem", border: "1px solid white" }}>
      <img src={product.img} className="card-img-top" alt={product.name} style={{ width: '90%', height: '150px', objectFit: 'cover'}} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text">${product.price.toFixed(2)}</p>
          <button
            className="btn btn-light d-flex align-items-center"
            onClick={() => addToCart(product)}
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <img src={bagIcon} alt="Add to Cart" style={{ width: "24px", height: "24px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
