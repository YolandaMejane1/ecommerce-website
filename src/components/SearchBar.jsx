import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="mb-3 w-[50%] flex justify-center">
      <input
        type="text"
        className="form-control rounded-xl py-3 px-4 mb-5 w-[75px] h-[30px]"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
