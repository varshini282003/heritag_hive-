import React, { useState } from "react";
import { Link } from "react-router-dom";
import './TravelWithUsPage.css';  // Import the correct CSS file

const TravelWithUsPage = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [mapUrl, setMapUrl] = useState("");

  // List of nearby places
  const nearbyPlaces = [
    { name: "Place 1", description: "Description of Place 1" },
    { name: "Place 2", description: "Description of Place 2" },
    { name: "Place 3", description: "Description of Place 3" },
  ];

  const handleRouteSubmit = () => {
    // Construct Google Maps URL for the route
    setMapUrl(
      `https://www.google.com/maps/dir/${encodeURIComponent(source)}/${encodeURIComponent(destination)}`
    );
  };

  return (
    <div className="travel-with-us">
      <h1>Travel with Us</h1>
      <p>Find the best route between your source and destination, and explore nearby places!</p>

      {/* Input fields for source and destination */}
      <div className="route-input">
        <input
          type="text"
          placeholder="Enter Source Location"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Destination Location"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleRouteSubmit}>Get Route</button>
      </div>

      {/* Map Container */}
      {mapUrl && (
        <div className="map-container">
          <h2>Route on Google Maps</h2>
          {/* Display Google Maps route link */}
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="btn">
            Open Route on Google Maps
          </a>
        </div>
      )}

      {/* Nearby places */}
      <div className="near-places">
        <h2>Nearby Places</h2>
        <ul>
          {nearbyPlaces.map((place, index) => (
            <li key={index}>
              <Link to={`/place${index + 1}`}>{place.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelWithUsPage;
