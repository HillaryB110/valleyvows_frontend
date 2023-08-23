import React from 'react'
import { Link } from 'react-router-dom'
import "../HomePage/HomePage.css"

function HomePage() {
  return (
    <div className="home-page">
      <div className="box">
        <h2>Welcome to Valley Vows!</h2>
        <p>Get started on your journey for love in the valley by creating your user profile:</p>
        <Link to="/create-profile">
          <button>Create Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage