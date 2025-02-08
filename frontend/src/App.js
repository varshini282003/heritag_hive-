import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Slideshow from "./components/Slideshow";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import HeritagePage from "./pages/HeritagePage";
import GalleryPage from "./pages/GalleryPage";
import QuizPage from "./pages/QuizPage";
import ReviewsPage from "./pages/ReviewsPage";
import TravelWithUsPage from "./pages/TravelWithUsPage";
import './App.css'; 
import './styles.css'; 
import './pages/MapPage.css'; 
import './pages/HeritagePage.css'; 

const App = () => {
  return (
    <Router>
      <NavBar />
      <Slideshow />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/heritage/:name" element={<HeritagePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/travelwithus" element={<TravelWithUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
