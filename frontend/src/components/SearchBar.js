import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css"; // Importing SearchBar styles

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to the heritage page using the entered place name
      navigate(`/heritage/${searchTerm}`);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Heritage Site"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
