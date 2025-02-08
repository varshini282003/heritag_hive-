import React, { useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import "./ReviewsPage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const ReviewsPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");
  const [userReviews, setUserReviews] = useState([]); // Stores submitted reviews
  const [message, setMessage] = useState("");

  // Manually added featured reviews
  const featuredReviews = [
    {
      name: "Amit Sharma",
      place: "Taj Mahal",
      rating: 5,
      review: "Absolutely breathtaking! A timeless wonder that showcases India’s rich history and craftsmanship.",
      image: "/images/tajmahal.jpg",
    },
    {
      name: "Sara Khan",
      place: "Qutub Minar",
      rating: 4,
      review: "The carvings on the minar are exquisite. A great place to experience Delhi’s history.",
      image: "/images/qutubminar.jpg",
    },
    {
      name: "Raj Patel",
      place: "Hawa Mahal",
      rating: 5,
      review: "A mesmerizing sight in Jaipur! The pink sandstone architecture is simply stunning.",
      image: "/images/hawamahal.jpg",
    },
    {
      name: "Priya Mehta",
      place: "Mysore Palace",
      rating: 5,
      review: "A must-visit! The grandeur and lights at night make it even more special.",
      image: "/images/mysorepalace.jpg",
    },
    {
      name: "Anil Kapoor",
      place: "Gateway of India",
      rating: 4,
      review: "A great place to experience Mumbai’s colonial history and amazing sea views.",
      image: "/images/gateway.jpg",
    },
  ];

  const submitReview = async (e) => {
    e.preventDefault();
    if (!name || !email || !place || !review) {
      setMessage("Please fill all fields before submitting.");
      return;
    }

    const newReview = { name, place, rating, review };

    try {
      await axios.post("http://localhost:5000/api/reviews", newReview);
      setUserReviews([...userReviews, newReview]); // Add new review to the displayed list
      setMessage("Review successfully submitted!");
      setName("");
      setEmail("");
      setPlace("");
      setRating(5);
      setReview("");
    } catch (error) {
      console.error("Error submitting review:", error);
      setMessage("Error submitting review. Please try again.");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="review-page">
      <Slideshow />

      <div className="content-container">
        <h1 className="title">Heritage Hive</h1>
        <h2 className="subtitle">Share Your Experience</h2>

        {/* Review Form */}
        <div className="review-container">
          <form onSubmit={submitReview} className="review-form">
            <div className="form-group">
              <label>Your Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Your Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Place Name:</label>
              <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Rating (1-5):</label>
              <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
            </div>
            <div className="form-group">
              <label>Your Review:</label>
              <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
            </div>
            <button type="submit" className="submit-btn">Submit Review</button>
          </form>
          {message && <p className="message">{message}</p>}
        </div>

        {/* Featured Reviews */}
        <h2 className="reviews-heading">Top Featured Reviews</h2>
        <div className="manual-reviews">
          <Slider {...sliderSettings}>
            {featuredReviews.map((review, index) => (
              <div key={index} className="review-card">
                <img src={review.image} alt={review.place} className="review-image" />
                <h3>{review.place}</h3>
                <p><strong>{review.name}</strong></p>
                <p className="star-rating">
                  {Array(review.rating).fill().map((_, i) => <FaStar key={i} />)} ({review.rating}/5)
                </p>
                <p>{review.review}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* User Reviews */}
        {userReviews.length > 0 && (
          <>
            <h2 className="reviews-heading">User Reviews</h2>
            <div className="user-reviews">
              {userReviews.map((userReview, index) => (
                <div key={index} className="user-review-card">
                  <h3>{userReview.place}</h3>
                  <p><strong>{userReview.name}</strong></p>
                  <p className="star-rating">
                    {Array(userReview.rating).fill().map((_, i) => <FaStar key={i} />)} ({userReview.rating}/5)
                  </p>
                  <p>{userReview.review}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <NavBar />
    </div>
  );
};

export default ReviewsPage;
