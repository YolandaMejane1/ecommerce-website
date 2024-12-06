import React from "react";

const Bag = ({ items }) => {
  return (
    <div className="bg-light p-3 position-fixed top-0 end-0" style={{ width: "345px", height: "100vh", overflowY: "auto", boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.2)", zIndex: 1000 }}>
      <h4>Bag</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button className="btn btn-dark">View Bag</button>
    </div>
  );
};

export default Bag;