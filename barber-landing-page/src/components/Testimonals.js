import React from 'react'
import "./Testimonals.css";

const testimonials = [
    {
      text: "Elite Cuts truly exceeded my expectations. The precision and attention to detail were top-notch. I walked out feeling confident and refreshed!",
      name: "Ryan Mitchell",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "A classy experience from start to finish. The staff was professional, friendly, and incredibly skilled. Definitely my go-to place now.",
      name: "Carlos Gomez",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      text: "Super impressed by the service and vibe. The beard shaping and fade were perfect. Highly recommend for anyone looking for quality grooming!",
      name: "Daniel Lee",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

const Testimonals = () => {
 return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Client Testimonials</h2>
      <p className="testimonials-subtitle">
        Hear what our clients have to say about their Elite Cuts experience.
      </p>

      <div className="testimonial-cards">
        {testimonials.map((item, idx) => (
          <div className="testimonial-card" key={idx}>
            <span className="quote-mark">“</span>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-footer">
              <img src={item.image} alt={item.name} className="testimonial-img" />
              <div>
                <p className="testimonial-name">{item.name}</p>
                <p className="stars">★★★★★</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonals