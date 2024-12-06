import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
      <div className="d-flex flex-column align-items-start" style={{ marginLeft: "300px" }}>
        <h6 className="text-muted mb-2 fs-6">Search Item</h6>
      </div>
    </nav>
  );
};

export default Navbar;