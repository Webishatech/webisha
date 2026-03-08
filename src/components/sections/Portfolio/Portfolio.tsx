import React, { useState, useRef } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import portfolioBg from '../../../assets/images/sections/portfolio-bg.jpeg';
import { portfolioData } from '../../../data/portfolioData';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    const next = (currentIndex + 1) % portfolioData.length;
    const el = scrollRef.current?.querySelector(`[data-index="${next}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(next);
  };

  const prevSlide = () => {
    const prev = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    const el = scrollRef.current?.querySelector(`[data-index="${prev}"]`);
    (el as HTMLElement)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    setCurrentIndex(prev);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-background">
        <img src={portfolioBg} alt="Portfolio Background" className="portfolio-bg-image" />
        <div className="portfolio-overlay"></div>
      </div>
      <div className="portfolio-container section-container">
        <div className="portfolio-header">
          <SectionTitle className="portfolio-title">Our Portfolio</SectionTitle>
          <SectionSubtitle className="portfolio-subtitle">Check out some of our recent projects.</SectionSubtitle>
        </div>
        <div className="portfolio-carousel">
          <button className="carousel-button carousel-button-left" onClick={prevSlide} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <div className="portfolio-items" ref={scrollRef}>
            {portfolioData.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item ${index === currentIndex ? 'active' : ''}`}
                data-index={index}
              >
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                  <div className="portfolio-info-overlay">
                    <div className="portfolio-info-text">
                      <h3 className="portfolio-item-title">{item.title}</h3>
                      <p className="portfolio-item-category">{item.category}</p>
                    </div>
                    <span className="portfolio-item-arrow" aria-hidden>
                      <ArrowForwardIcon />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-button carousel-button-right" onClick={nextSlide} aria-label="Next">
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
