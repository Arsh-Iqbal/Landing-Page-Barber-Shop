import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">
        Ready for a fresh look? Book your appointment today or contact us for any questions.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>500 N Bell Ave #109, Denton, TX 76209, United States</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+1 940-612-9127</p>
            </div>
          </div>
          <div className="info-item">
            <FaClock className="icon" />
            <div>
              <h4>Business Hours</h4>
              <p>
                Mon-Fri: 9:00 AM – 7:00 PM<br />
                Sat: 9:00 AM – 5:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>

          <div className="map-container">
    <iframe
      title="Our Location"
      src="https://www.google.com/maps?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209&output=embed"
      width="100%"
      height="250"
      style={{ border: 0, borderRadius: '10px', marginTop: '1rem' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>

  <a
    href="https://www.google.com/maps/dir/?api=1&destination=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
    target="_blank"
    rel="noopener noreferrer"
    className="get-directions-link"
  >
    Get Directions
  </a>
        </div>

        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your full name" required/>

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Service Interested In</label>
          <select >
            <option >Select an option</option>
            <option>Haircut</option>
            <option>Beard Trim</option>
            <option>Shave</option>
            <option>Full Package</option>
          </select>

          <label>Preferred Date</label>
          <input type="date" required/>

          <label>Message</label>
          <textarea placeholder="Tell us about your style preferences or any questions you have"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
