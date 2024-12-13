import React, { useState, useEffect } from "react"; //searchbar component stores the functions that handle searching items 
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch, resetDashboard }) => {
  const [query, setQuery] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); //changes input field according to screen size
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      if (resetDashboard) resetDashboard();
      navigate("/");
    } else if (onSearch) {
      onSearch(value.trim()); //enables more robust search using trim function to navigate back to dashboard when search is empty
    }
  };

  const inputWidth =
    width < 576 ? "70%" : width < 768 ? "80%" : width < 1024 ? "100%" : "400px";
  const marginLeft =
    width < 576 ? "10px" : width < 768 ? "50px" : width < 1024 ? "100px" : "180px";

  return (
    <div
      style={{
        width: "100%",
        marginLeft: marginLeft,
        display: "flex",
        justifyContent: "center",
        marginTop: "0rem",
        marginBottom: "0rem",
      }}
    >
      <input
        type="text"
        style={{
          padding: "24px 12px",
          width: inputWidth,
          height: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(169, 169, 169, 0.8)",
          outline: "none",
          border: "1px solid white",
        }}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;