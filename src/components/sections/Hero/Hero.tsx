import React from 'react';
import Button from '../../ui/Button/Button';
import heroImage from '../../../assets/images/sections/hero-section.jpeg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Hero Background" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Innovative IT Solutions for Modern Businesses</h1>
          <p className="hero-description">
            We deliver cutting edge web, mobile, and AI solutions to help your business thrive in the digital age.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            <div className="graphic-tablet">
              <div className="tablet-screen">
                <div className="data-visualization">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-line"></div>
                  <div className="chart-dot dot-1"></div>
                  <div className="chart-dot dot-2"></div>
                </div>
              </div>
            </div>
            <div className="graphic-server server-1"></div>
            <div className="graphic-server server-2"></div>
            <div className="graphic-cloud"></div>
            <div className="graphic-platform"></div>
            <div className="floating-element float-1"></div>
            <div className="floating-element float-2"></div>
            <div className="floating-element float-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
