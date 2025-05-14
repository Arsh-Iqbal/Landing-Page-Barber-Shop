import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu

  const handleNavClick = (section) => {
    setActiveLink(section);
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <header className="navbar">
          <h1 className="logo">PREMIUM HAIR CUTS</h1>
          
          {/* Hamburger icon for mobile/tablet */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            role="button"
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          {/* Navigation menu */}
          <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
            <ul>
              {['home', 'services', 'about', 'gallery', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={activeLink === item ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        {/* Hero content */}
        <div className="hero-content">
          <h2>Fama Barber Shop & Beauty Salon</h2>
          <p>Premium grooming services in Denton, TX</p>
          <div className="rating">
            <span className="stars">⭐⭐⭐⭐⭐</span>
            <span>4.6 (116+ reviews)</span>
          </div>
          <a href="#contact" className="cta-button">Book Now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;