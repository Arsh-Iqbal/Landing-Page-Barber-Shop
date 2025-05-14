import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <p className="gallery-subtitle">Our Work & Shop</p>
        <h2 className="gallery-title">
          <span>Our Barbershop Gallery</span>
        </h2>
        <p className="gallery-description">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>
      </div>

      <div className="gallery-grid">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
          alt="Haircut"
          className="gallery-img"
        />
        <img
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQH_mFx05WDX9HN1LWYzx7pL3krPQhidc0bHUsN0Bfb07Q-EhD9"
          alt="Shop Front"
          className="gallery-img"
        />
        <img
          src="https://ext.same-assets.com/336778205/1645779418.webp"
          alt="Awards"
          className="gallery-img"
        />
      </div>
    </section>
  );
};

export default Gallery;
