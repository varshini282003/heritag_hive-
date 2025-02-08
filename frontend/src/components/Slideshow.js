import React, { useState, useEffect } from "react";
import "./Slideshow.css"; 

const images = [
  "/images/kathak.jpeg",
  "/images/india_vectortemplate.webp",
  "/images/redbuilding.jpg"
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // ✅ Fixed dependency issue

  return (
    <div className="slideshow-container">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Background ${index + 1}`}
          className={`slideshow-image ${index === activeIndex ? "active" : ""}`}
        />
      ))}
      <div className="overlay"></div>
    </div>
  );
};

export default Slideshow;
