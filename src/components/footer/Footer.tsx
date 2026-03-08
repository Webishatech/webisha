import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button/Button';
import footerBg from '../../assets/images/sections/footer-bg.jpeg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import mailIcon from '../../assets/icons/mail.svg';
import phoneIcon from '../../assets/icons/phone.svg';
import mapPinIcon from '../../assets/icons/map-pin.svg';
import './Footer.css';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={footerBg} alt="Footer Background" className="footer-bg-image" />
        <div className="footer-overlay"></div>
      </div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <Link to="/" className="footer-logo">
              <div className="logo-graphic">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 5L35 15L30 25L20 35L10 25L5 15L20 5Z" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M15 15L25 15L20 25L15 15Z" fill="white"/>
                  <path d="M20 10L30 20L25 30L20 30L10 20L20 10Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-webisha">WEBISHA</span>
                <span className="logo-tech">TECH</span>
              </div>
            </Link>
            <p className="footer-tagline">Cutting Edge IT Solutions for your success.</p>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-contact">
            <div className="contact-item">
              <img src={mailIcon} alt="Email" className="contact-icon" />
              <a href="mailto:info@webisha.com">info@webisha.com</a>
            </div>
            <div className="contact-item">
              <img src={phoneIcon} alt="Phone" className="contact-icon" />
              <a href="tel:+1234567890">+123.456.7890</a>
            </div>
            <div className="contact-item">
              <img src={mapPinIcon} alt="Location" className="contact-icon" />
              <span>123 Torn Reves, CA.</span>
            </div>
            <div className="contact-item">
              <img src={mapPinIcon} alt="Location" className="contact-icon" />
              <span>130 Taas Press, San Francisco CA.</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">©2021. WebIsha Tech. All rights reserved.</p>
          <form className="footer-newsletter" onSubmit={handleSubscribe}>
            <span className="newsletter-label">Subscribe to our newsletter</span>
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <Button type="submit" variant="primary" size="small">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
