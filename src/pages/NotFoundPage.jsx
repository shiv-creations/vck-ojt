// src/pages/NotFoundPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-content page-content">
      <div className="info-card">
        <h1>404 - Page Not Found!</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="college-button">Go to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;