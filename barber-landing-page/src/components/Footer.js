import React from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      {/* Fama Barber Shop Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Fama Barber Shop</h3>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Quick Links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Gallery</p>
        <p>Testimonials</p>
        <p>Contact</p>
      </div>

      {/* Contact Us Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Contact Us</h3>
        <p>500 N Bell Ave #109</p>
        <p>Denton, TX 76209</p>
        <p>+1 940-612-9127</p>
      </div>

      {/* Newsletter Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Newsletter</h3>
        <div className="newsletter">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="footer-bottom">
        © 2025 Fama Barber Shop and Beauty Salon. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;