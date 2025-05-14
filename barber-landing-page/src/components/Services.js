// src/components/Services.jsx
import React from 'react';
import './Service.css';

const services = [
  { title: 'Premium Classic Cut', price: '$40', desc: 'Experience a refined traditional haircut with meticulous attention to detail.', icon: '✂️' },
  { title: 'Luxury Shave & Trim', price: '$35', desc: 'Enjoy a relaxing hot towel shave combined with a precise beard trim.', icon: '🪒' },
  { title: 'Color & Styling', price: '$65+', desc: 'Transform your look with professional styling and vibrant color treatments.', icon: '✨' },
  { title: 'Kids & Teens Cut', price: '$30', desc: 'Gentle, fun, and stylish haircuts tailored for younger clients.', icon: '😊' },
  { title: 'Grooming Package', price: '$100', desc: 'Complete grooming including haircut, shave, facial, and beverage service.', icon: '🛎️' },
  { title: 'Beard Mastery', price: '$30', desc: 'Expert beard shaping, trimming, and grooming to suit your style.', icon: '🧔' }
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div class="section-underline"></div>
      <p>Discover our range of professional barbering services designed to keep you looking your best.</p>
      <div className="cards">
        {services.map((item, idx) => (
          <div className="card" key={idx}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
