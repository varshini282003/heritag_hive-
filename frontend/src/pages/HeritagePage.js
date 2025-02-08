// frontend/src/pages/HeritagePage.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HeritagePage = () => {
  const { name } = useParams();
  const [heritage, setHeritage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        console.log(`🔍 Fetching: http://localhost:5000/api/heritages/${name}`);
        const response = await axios.get(`http://localhost:5000/api/heritages/${name}`);

        console.log("✅ Response received:", response.data);
        setHeritage(response.data);
      } catch (err) {
        console.error("❌ Error fetching heritage data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!heritage) return <p>No data found</p>;

  return (
    <div>
      <h1>{heritage.name}</h1>
      <p>{heritage.description}</p>
      <p>📍 {heritage.location?.city}, {heritage.location?.state}</p>
      
      <h2>Images</h2>
      {heritage.images?.length > 0 ? (
        heritage.images.map((img, index) => (
          <img key={index} src={`http://localhost:5000/images/${img}`} alt={heritage.name} width="300px" />
        ))
      ) : (
        <p>No images available</p>
      )}

      <h2>Listen to Audio</h2>
      {heritage.audio ? (
        <audio controls>
          <source src={`http://localhost:5000/audio/${heritage.audio}`} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>No audio available</p>
      )}
    </div>
  );
};

export default HeritagePage;
