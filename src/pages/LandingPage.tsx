import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your go-to place for beautiful houseplants!</p>
      <Link to="/products">
        <button className="get-started-button">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
