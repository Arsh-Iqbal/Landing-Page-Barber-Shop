import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do I need to book an appointment or accept walk-ins?",
      answer: "Both options are available! Walk-ins are welcome, but booking an appointment guarantees a shorter wait time."
    },
    {
      question: "What should I expect for my first visit?",
      answer: "You’ll be welcomed by our friendly team. Your barber will discuss your style preferences before starting."
    },
    {
      question: "How far in advance can I pre-book my appointment?",
      answer: "You can schedule an appointment up to 30 days in advance using our website or by calling us."
    },
    {
      question: "How do you handle payment and tips?",
      answer: "We accept cash and all major credit cards. Tips can be given directly in cash or added to your card payment."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="show-more-wrapper">
          <button className="show-more-btn">Show more...</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
