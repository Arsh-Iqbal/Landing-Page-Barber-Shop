import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://t4.ftcdn.net/jpg/04/69/68/17/360_F_469681744_FZWt6LKXLoCU4XVv8Cjx6ZFmwNlNLm7x.jpg"
            alt="Barber Cutting Hair"
          />
        </div>
        <div className="about-content">
          <h2>Our Journey</h2>
          <p>
            Since opening our doors in 2012, Urban Grooming has become a go-to spot for men who value style, precision, and personalized service. Our talented team of barbers is passionate about crafting looks that enhance confidence and individual style.
          </p>
          <p>
            We’re dedicated to blending classic barbering techniques with contemporary trends, ensuring every client leaves feeling sharp and refreshed. At Urban Grooming, every haircut is tailored to your unique personality and lifestyle.
          </p>
          <div className="about-stats">
            <div>
              <h3>11 Yrs</h3>
              <p>Expertise</p>
            </div>
            <div>
              <h3>20,000+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>12</h3>
              <p>Skilled Barbers</p>
            </div>
            <div>
              <h3>30+</h3>
              <p> Services</p>
            </div>
          </div>
          <button className="about-btn">Join Our Community</button>
        </div>
      </div>
    </section>
  );
};

export default About;