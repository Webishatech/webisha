import React, { useRef, useEffect } from 'react';
import Button from '../../ui/Button/Button';
import heroImage from '../../../assets/images/sections/hero-section.jpeg';
import { heroEntrance, gsap } from '../../../utils/gsapAnimations';
import './Hero.css';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = heroEntrance(contentRef.current, { y: 56, stagger: 0.18 });
    const bg = bgRef.current?.querySelector('.hero-bg-image');
    if (bg) {
      gsap.fromTo(bg, { scale: 1.15 }, { scale: 1, duration: 1.4, ease: 'power2.out' });
    }
    return cleanup;
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background" ref={bgRef}>
        <img src={heroImage} alt="Hero Background" className="hero-bg-image" />
      </div>
      <div className="hero-container section-container">
        <div className="hero-content" ref={contentRef}>
          <h1 className="hero-title">Innovative IT Solutions for Modern Businesses</h1>
          <p className="hero-description">
            We help businesses transform digitally with reliable, scalable, and secure technology solutions. Our team specializes in web development, mobile applications, and cloud-based systems designed to streamline operations and accelerate growth.
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
