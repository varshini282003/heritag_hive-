import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import axios from "../api"; // Assuming axios is set up in api.js
import "./HomePage.css";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 2) {
      // Updated endpoint to match the backend route
      axios.get(`/api/heritages?query=${searchQuery}`).then((response) => {
        setSuggestions(response.data); // Set search suggestions
      }).catch(error => {
        console.error("Error fetching suggestions:", error);
      });
    } else {
      setSuggestions([]); // Clear suggestions if the search query is too short
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/heritage/${searchQuery}`); // Navigate to heritage details page
    }
  };

  return (
    <div className="home-page">
      <Slideshow />
      <div className="overlay" />
      <div id="container">
        <h1>Heritage Hive</h1>
        <p className="tagline">Explore India's Rich Cultural Heritage</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Heritage Sites"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on change
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <ul className="suggestions">
          {suggestions.map((s) => (
            <li key={s.name} onClick={() => navigate(`/heritage/${s.name}`)}>
              {s.name}  {/* Display search suggestions */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
