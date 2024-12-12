import React from "react";
import Sidebar from "../components/Sidebar";
import Bag from "../components/dashboardBag"; 
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartActions"; 
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import addToBagIcon from "../assets/Button (3).png";

const ItemView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === parseInt(id));

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    for (let i = 1; i <= fullStars; i++) {
      stars.push(<AiFillStar key={`full-${i}`} color="#1b805d" />);
    }
    if (halfStars) {
      stars.push(
        <AiFillStar key="half" color="#1b805d" style={{ clipPath: 'inset(0 50% 0 0)' }} />
      );
      stars.push(<AiOutlineStar key="half-outline" color="#1b805d" />);
    }
    for (let i = 1; i <= emptyStars; i++) {
      stars.push(<AiOutlineStar key={`empty-${i}`} color="#1b805d" />);
    }

    return stars.slice(0, 5);
  };

  const handleAddToBag = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 d-flex flex-column" style={{ gap: "5px" }}>
            <div className="max-w-screen-lg mx-auto px-1">
              <div className="d-flex align-items-center mb-3">
                <button
                  onClick={() => navigate("/")}
                  className="btn"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  {"< Back"}
                </button>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex flex-row align-items-start">
                  <div className="d-flex flex-column" style={{ gap: "10px" }}>
                    {Array(3).fill().map((_, index) => (
                      <img
                        key={index}
                        src={product.img}
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          width: "30%",
                          height: "auto",
                          objectFit: "cover",
                          cursor: "pointer"
                        }}
                      />
                    ))}
                  </div>
                  <div className="d-flex flex-column" style={{ marginLeft: "10px" }}>
                    <img
                      src={product.img}
                      alt={product.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        marginBottom: "10px"
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="d-flex flex-column">
                    <h2>{product.name}</h2>
                    <p className="card-text" style={{ color: "#60695c", fontWeight: '600' }}>{product.description}</p>
                    <div className="d-flex" style={{ marginTop: "10px" }}>
                      <div className="d-flex">
                        {renderStars(product.rating)}
                      </div>
                      <span style={{ marginLeft: "10px", color: 'green', fontSize: "0.8rem" }}>
                        {product.rating} / 5
                      </span>
                    </div>
                    <p><strong>${product.price.toFixed(2)}</strong></p>
                    <p>{product.information}</p>
                    <button
                      className="btn btn-light d-flex align-items-center"
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        marginTop: "20px",
                        alignSelf: "flex-end",
                      }}
                      onClick={handleAddToBag}
                    >
                      <img
                        src={addToBagIcon}
                        alt="Add to Bag"
                        style={{ width: "174px", height: "40px" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div>
                <h4>Description</h4>
                <p>{product.fullDescription}</p>
              </div>
            </div>
            <div className="d-none d-md-block" style={{ flexBasis: "5%" }}>
              <Bag />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemView;