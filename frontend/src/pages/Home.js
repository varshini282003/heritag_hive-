import React from 'react';
import Slideshow from '../components/Slideshow';
import SearchBar from '../components/SearchBar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Slideshow />
      <div className="content-overlay">
        <h1>Heritage Hive</h1>
        <p>Discover India's Rich Heritage</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomePage;
