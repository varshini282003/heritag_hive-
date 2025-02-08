import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPage.css"; // Ensure correct path for CSS

// Import icons (Corrected Paths)
import monumentIcon from "../images/monument.jpeg";
import fortIcon from "../images/fort.jpeg";
import palaceIcon from "../images/palace.jpeg";
import templeIcon from "../images/temple.jpeg";
import caveIcon from "../images/cave.jpeg";
import memorialIcon from "../images/memorial.webp";
import gateIcon from "../images/gate.jpg";

// Define icons for categories
const categoryIcons = {
  monument: L.icon({ iconUrl: monumentIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  fort: L.icon({ iconUrl: fortIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  palace: L.icon({ iconUrl: palaceIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  temple: L.icon({ iconUrl: templeIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  cave: L.icon({ iconUrl: caveIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  memorial: L.icon({ iconUrl: memorialIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
  gate: L.icon({ iconUrl: gateIcon, iconSize: [30, 30], iconAnchor: [15, 30] }),
};

// Heritage locations data
const markersData = [
  { name: "Taj Mahal", lat: 27.1751, lon: 78.0421, category: "monument" },
  { name: "Red Fort", lat: 28.6562, lon: 77.2410, category: "fort" },
  { name: "Qutub Minar", lat: 28.5245, lon: 77.1855, category: "monument" },
  { name: "Hawa Mahal", lat: 26.9239, lon: 75.8267, category: "palace" },
  { name: "Khajuraho Temples", lat: 24.8318, lon: 79.9192, category: "temple" },
  { name: "Sanchi Stupa", lat: 23.4851, lon: 77.7399, category: "monument" },
  { name: "Konark Temple", lat: 19.8876, lon: 86.0945, category: "temple" },
  { name: "Victoria Memorial", lat: 22.5448, lon: 88.3426, category: "memorial" },
  { name: "Gwalior Fort", lat: 26.2296, lon: 78.1734, category: "fort" },
  { name: "Golden Temple", lat: 31.6199, lon: 74.8765, category: "temple" },
  { name: "Mehrangarh Fort", lat: 26.2982, lon: 73.0186, category: "fort" },
  { name: "Amer Fort", lat: 26.9941, lon: 75.8513, category: "fort" },
  { name: "Kumbhalgarh Fort", lat: 25.1460, lon: 73.5790, category: "fort" },
  { name: "Mysore Palace", lat: 12.3052, lon: 76.6552, category: "palace" },
  { name: "Hampi", lat: 15.3350, lon: 76.4620, category: "monument" },
  { name: "Mahabalipuram", lat: 12.6213, lon: 80.1945, category: "monument" },
  { name: "Meenakshi Amman Temple", lat: 9.9195, lon: 78.1196, category: "temple" },
  { name: "Chittorgarh Fort", lat: 24.8887, lon: 74.6238, category: "fort" },
  { name: "Gateway of India", lat: 18.9219, lon: 72.8347, category: "gate" },
];

const MapPage = () => {
  const mapRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const map = L.map(mapRef.current, {
      center: [20.5937, 78.9629],
      zoom: 5,
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
        }),
      ],
    });

    markersData.forEach(({ name, lat, lon, category }) => {
      const icon = categoryIcons[category] || categoryIcons.monument;
      const marker = L.marker([lat, lon], { icon }).addTo(map);

      marker.bindTooltip(
        `<span class="tooltip-text">${name}</span>`,
        { permanent: false, direction: "top", opacity: 0.9 }
      );

      marker.on("click", () => navigate(`/heritage/${encodeURIComponent(name)}`));
    });

    return () => map.remove();
  }, [navigate]);

  return (
    <div className="map-page">
      <h1>Heritage Sites in India</h1>
      <div ref={mapRef} className="map-container"></div>
    </div>
  );
};

export default MapPage;
