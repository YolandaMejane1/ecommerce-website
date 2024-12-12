import React from "react";
import { useNavigate } from "react-router-dom";
import bagIcon from "../assets/Button.png";

const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <div
      className="card m-2"
      style={{
        width: "12rem",
        border: "1px solid white",
        padding: "5px",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <img
        src={product.img}
        className="card-img-top"
        alt={product.name}
        style={{ width: "50%", height: "100px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title" style={{ fontSize: "18px", fontWeight: "500" }}>
          {product.name}
        </h6>
        <p className="card-text" style={{ fontSize: "12px" }}>
          {product.description}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text" style={{ fontSize: "16px", fontWeight: "500" }}>
            ${product.price.toFixed(2)}
          </p>
          <button
            className="btn btn-light d-flex align-items-center"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            style={{ border: "none", backgroundColor: "transparent" }}
          >
            <img
              src={bagIcon}
              alt="Add to Cart"
              style={{ width: "24px", height: "24px" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;