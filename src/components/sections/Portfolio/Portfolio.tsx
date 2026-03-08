import React, { useState } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import portfolioBg from '../../../assets/images/sections/portfolio-bg.jpeg';
import qtrHome from '../../../assets/images/clients/qtr_home.png';
import qtrTasks from '../../../assets/images/clients/qtr_tasks.png';
import saiapp from '../../../assets/images/clients/saiapp.png';
import './Portfolio.css';

export interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: qtrHome,
    title: 'E-Commerce Platform',
    category: 'Web Development',
  },
  {
    id: 2,
    image: qtrTasks,
    title: 'Task Management App',
    category: 'Mobile Apps',
  },
  {
    id: 3,
    image: saiapp,
    title: 'AI-Powered Solution',
    category: 'Cloud Solutions',
  },
];

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="portfolio-section">
      <div className="portfolio-background">
        <img src={portfolioBg} alt="Portfolio Background" className="portfolio-bg-image" />
        <div className="portfolio-overlay"></div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-header">
          <SectionTitle className="portfolio-title">Our Portfolio</SectionTitle>
          <SectionSubtitle className="portfolio-subtitle">Check out some of our recent projects.</SectionSubtitle>
        </div>
        <div className="portfolio-carousel">
          <button className="carousel-button carousel-button-left" onClick={prevSlide} aria-label="Previous">
            <ChevronLeftIcon />
          </button>
          <div className="portfolio-items">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-item ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="portfolio-image-wrapper">
                  <img src={item.image} alt={item.title} className="portfolio-image" />
                </div>
                <div className="portfolio-info">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-item-category">{item.category}</p>
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
