// GalleryPage.js
import React from 'react';
import './GalleryPage.css';

const GalleryPage = () => {
  const images = [
    { src: "/images/Orchha Fort 4.jpg", name: "Orchha Fort 4" },
    { src: "/images/photo-1496372412473-e8548ffd82bc.jpeg", name: "Traditional Potter's Kiln" },
    { src: "/images/qutub minar 1.jpg", name: "Qutub Minar 1" },
    { src: "/images/qutub minar 2.png", name: "Qutub Minar 2" },
    { src: "/images/ram_idol.avif", name: "Ram Idol" },
    { src: "/images/Rani ki Vav 1.jpeg", name: "Rani Ki Vav 1" },
    { src: "/images/Rani ki Vav 2.jpg", name: "Rani Ki Vav 2" },
    { src: "/images/Red fort 1.jpeg", name: "Red Fort 1" },
    { src: "/images/Red fort 2.jpg", name: "Red Fort 2" },
    { src: "/images/Sanchi Stupa 1.jpeg", name: "Sanchi Stupa 1" },
    { src: "/images/Sanchi Stupa 2.jpg", name: "Sanchi Stupa 2" },
    { src: "/images/taj mahal 1.jpg", name: "Taj Mahal 1" },
    { src: "/images/taj mahal 2.jpeg", name: "Taj Mahal 2" },
    { src: "/images/the-marvellous-orchha.jpg", name: "The Marvellous Orchha" },
    { src: "/images/travel_background.jpg.jpg", name: "Travel Background" },
    { src: "/images/Victoria Memorial 1.jpg", name: "Victoria Memorial 1" },
    { src: "/images/Victoria Memorial 2.jpg", name: "Victoria Memorial 2" },
    { src: "/images/Victoria Memorial 3.jpg", name: "Victoria Memorial 3" },
    { src: "/images/58365795d216bbd17e321d76e104d734.jpg", name: "58365795d216bbd17e321d76e104d734" },
    { src: "/images/Ajanta & Ellora_Caves 1.jpg", name: "Ajanta & Ellora Caves 1" },
    { src: "/images/Ajanta & Ellora_Caves 2.jpeg", name: "Ajanta & Ellora Caves 2" },
    { src: "/images/Ajanta & Ellora_Caves 3.jpg", name: "Ajanta & Ellora Caves 3" },
    { src: "/images/Ajanta & Ellora_Caves 4.jpg", name: "Ajanta & Ellora Caves 4" },
    { src: "/images/Amer_Fort 1.jpeg", name: "Amer Fort 1" },
    { src: "/images/Amer_Fort 2.jpg", name: "Amer Fort 2" },
    { src: "/images/Amer_Fort 3.jpg", name: "Amer Fort 3" },
    { src: "/images/birds.jpg", name: "Birds" },
    { src: "/images/Chittorgarh Fort.jpeg", name: "Chittorgarh Fort" },
    { src: "/images/Chittorgarh_Fort 1.jpeg", name: "Chittorgarh Fort 1" },
    { src: "/images/Chittorgarh_Fort 2.jpg", name: "Chittorgarh Fort 2" },
    { src: "/images/Chittorgarh_Fort 3.jpg", name: "Chittorgarh Fort 3" },
    { src: "/images/Chola Temples 1.jpeg", name: "Chola Temples 1" },
    { src: "/images/Chola Temples 2.jpeg", name: "Chola Temples 2" },
    { src: "/images/Chola Temples 3.jpg", name: "Chola Temples 3" },
    { src: "/images/download (1).jpeg", name: "Download 1" },
    { src: "/images/download (2).jpeg", name: "Download 2" },
    { src: "/images/download (3).jpeg", name: "Download 3" },
    { src: "/images/download (4).jpeg", name: "Download 4" },
    { src: "/images/download.jpeg", name: "Download" },
    { src: "/images/Elephanta Caves 1.jpg", name: "Elephanta Caves 1" },
    { src: "/images/Elephanta Caves 2.jpg", name: "Elephanta Caves 2" },
    { src: "/images/Elephanta Caves 3.jpg", name: "Elephanta Caves 3" },
    { src: "/images/Elephanta Caves 4.jpg", name: "Elephanta Caves 4" },
    { src: "/images/Gateway of India, Mumbai 1.jpeg", name: "Gateway of India, Mumbai 1" },
    { src: "/images/Gateway of India, Mumbai 2.jpg", name: "Gateway of India, Mumbai 2" },
    { src: "/images/Gateway of India, Mumbai 3.jpg", name: "Gateway of India, Mumbai 3" },
    { src: "/images/Golden Temple 1.jpg", name: "Golden Temple 1" },
    { src: "/images/Golden Temple 2.jpg", name: "Golden Temple 2" },
    { src: "/images/Golden Temple 3.jpg", name: "Golden Temple 3" },
    { src: "/images/Gwalior Fort 1.jpg", name: "Gwalior Fort 1" },
    { src: "/images/Gwalior Fort 2.jpg", name: "Gwalior Fort 2" },
    { src: "/images/Hampi 1.jpeg", name: "Hampi 1" },
    { src: "/images/Hampi 2.jpeg", name: "Hampi 2" },
    { src: "/images/Hampi 3.jpg", name: "Hampi 3" },
    { src: "/images/hawa mahal 1.jpg", name: "Hawa Mahal 1" },
    { src: "/images/hawa mahal 2.jpg", name: "Hawa Mahal 2" },
    { src: "/images/hawa mahal 3.jpeg", name: "Hawa Mahal 3" },
    { src: "/images/images.jpeg", name: "Images" },
    { src: "/images/img-20180921-184349-largejpg.jpg", name: "Image 20180921" },
    { src: "/images/India Gate 1.jpeg", name: "India Gate 1" },
    { src: "/images/India Gate 2.jpg", name: "India Gate 2" },
    { src: "/images/istockphoto-1195731546-612x612.jpg", name: "Istockphoto 1195731546" },
    { src: "/images/istockphoto-1307189136-612x612.jpg", name: "Istockphoto 1307189136" },
    { src: "/images/kathak.jpeg", name: "Kathak" },
    { src: "/images/Khajuraho Temple 1.jpg", name: "Khajuraho Temple 1" },
    { src: "/images/Khajuraho Temple 2.jpg", name: "Khajuraho Temple 2" },
    { src: "/images/Khajuraho Temple 3.jpg", name: "Khajuraho Temple 3" },
    { src: "/images/Konark Temple 1.jpg", name: "Konark Temple 1" },
    { src: "/images/Konark Temple 2.jpg", name: "Konark Temple 2" },
    { src: "/images/Konark Temple 3.jpg", name: "Konark Temple 3" },
    { src: "/images/Konark Temple 4.jpg", name: "Konark Temple 4" },
    { src: "/images/Kumbhalgarh Fort 1.jpg", name: "Kumbhalgarh Fort 1" },
    { src: "/images/Kumbhalgarh Fort 2.jpg", name: "Kumbhalgarh Fort 2" },
    { src: "/images/Kumbhalgarh Fort 3.jpg", name: "Kumbhalgarh Fort 3" },
    { src: "/images/Lakshmi Vilas Palace 1.jpg", name: "Lakshmi Vilas Palace 1" },
    { src: "/images/Lakshmi Vilas Palace 2.jpg", name: "Lakshmi Vilas Palace 2" },
    { src: "/images/Lakshmi Vilas Palace 3.jpg", name: "Lakshmi Vilas Palace 3" },
    { src: "/images/Mahabalipuram 1.jpeg", name: "Mahabalipuram 1" },
    { src: "/images/Mahabalipuram 2.jpg", name: "Mahabalipuram 2" },
    { src: "/images/Mahabalipuram 3.jpg", name: "Mahabalipuram 3" },
    { src: "/images/meenakshi amman temple 1.jpg", name: "Meenakshi Amman Temple 1" },
    { src: "/images/meenakshi amman temple 2.jpeg", name: "Meenakshi Amman Temple 2" },
    { src: "/images/meenakshi amman temple 3.jpeg", name: "Meenakshi Amman Temple 3" },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Heritage Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.name} />
            <div className="image-name">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;