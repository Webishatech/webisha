import React from 'react';
import Button from '../../ui/Button/Button';
import heroImage from '../../../assets/images/sections/hero-section.jpeg';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img src={heroImage} alt="Hero Background" className="hero-bg-image" />
      </div>
      <div className="hero-container section-container">
        <div className="hero-content">
          <h1 className="hero-title">Innovative IT Solutions for Modern Businesses</h1>
          <p className="hero-description">
            We deliver cutting edge web, mobile, and AI solutions to help your business thrive in the digital age.
          </p>
          <Button variant="primary" size="large" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
