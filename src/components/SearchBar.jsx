import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div 
      style={{ width: "410px", marginLeft: "180px", display: "flex", justifyContent: "center", marginTop: "0rem", marginBottom: "0rem" }}
    >
      <input
        type="text"
        style={{
          padding: "24px 12px", 
          width: "100%", 
          height: "30px", 
          borderRadius: "10px", 
          boxShadow: "0 4px 8px rgba(169, 169, 169, 0.8)", 
          outline: "none", 
          border: "1px solid white"
        }}
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
