import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Paradise Nursery</h1>
      <div className="about-content">
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>At Paradise Nursery, we believe that every home deserves a touch of green. Our mission is to bring nature closer to you by providing high-quality, healthy houseplants that transform your living spaces into peaceful sanctuaries.</p>
        </section>
        
        <section className="story-section">
          <h2>Our Story</h2>
          <p>Founded in 2020, Paradise Nursery started as a small family-owned business with a passion for plants. What began as a backyard greenhouse has grown into a thriving online nursery, serving plant lovers across the country. We carefully curate our collection to ensure that every plant we sell is healthy, sustainable, and ready to thrive in its new home.</p>
        </section>
        
        <section className="values-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li>🌱 Expertly curated plant collection</li>
            <li>🌿 Sustainable growing practices</li>
            <li>🌸 Free plant care guides with every purchase</li>
            <li>🌺 30-day healthy plant guarantee</li>
            <li>🍃 Eco-friendly packaging</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
