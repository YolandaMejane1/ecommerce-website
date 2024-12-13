import React from "react"; //small navbar code

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-3 d-flex justify-content-between">
      <div className="d-flex flex-column align-items-start" style={{ marginLeft: "170px", marginBottom: "-10px" }}>
      <h6 className="text-muted mb-1" style={{ fontSize: "13px" }}>Search Item</h6>
      </div>
    </nav>
  );
};

export default Navbar;