import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your One-Stop-Shop for 
            <span className="highlight"> Visual Discovery</span>
          </h1>
          <p className="hero-subtitle">
            Explore thousands of curated images organized by Collections, Streaming Services, 
            Genres, and Users. Find exactly what you're looking for in seconds.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Collections</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Genres</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Streaming Services</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Active Users</span>
            </div>
          </div>
          <div className="hero-cta">
            <button className="cta-primary">Start Exploring</button>
            <button className="cta-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;