import React from "react";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-light p-3" style={{ height: "100vh", width: "50px" }}>
      <a href="#dashboard" className="mb-4">Dashboard</a>
      <a href="#orders">Orders</a>
      <a href="#products">Products</a>
    </div>
  );
};

export default Sidebar;