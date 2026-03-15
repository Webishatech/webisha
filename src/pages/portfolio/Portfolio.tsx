import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/sections/hero-section.jpeg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import { Testimonials } from '../../components/sections';
import {
  portfolioFilters,
  featuredProjectsData,
  whyPartnerData,
  portfolioTestimonialsData,
  type WhyPartnerCard,
} from '../../data/portfolioPageData';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
import './Portfolio.css';

const WhyPartnerIcon: React.FC<{ type: WhyPartnerCard['icon'] }> = ({ type }) => {
  const iconClass = 'portfolio-why-icon';
  if (type === 'results') return <EmojiEventsIcon className={iconClass} />;
  if (type === 'solutions') return <SettingsIcon className={iconClass} />;
  return <GroupsIcon className={iconClass} />;
};

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const heroRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, []);

  useEffect(() => {
    if (!filtersRef.current) return;
    revealSection(filtersRef.current, '.portfolio-filter-btn', { stagger: 0.06 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!projectsRef.current) return;
    revealSection(projectsRef.current, '.portfolio-heading', {});
    revealSection(projectsRef.current, '.portfolio-project-card', { stagger: 0.1 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!whyRef.current) return;
    revealSection(whyRef.current, '.portfolio-heading, .portfolio-subheading', { stagger: 0.08 });
    revealSection(whyRef.current, '.portfolio-why-card', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const filteredProjects =
    activeFilter === 'All'
      ? featuredProjectsData
      : featuredProjectsData.filter((p) => p.sector === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Hero */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-bg">
          <img src={heroImage} alt="" className="portfolio-hero-image" aria-hidden />
          <div className="portfolio-hero-overlay" aria-hidden />
        </div>
        <div className="portfolio-hero-inner section-container">
          <div className="portfolio-hero-content" ref={heroRef}>
            <h1 className="portfolio-hero-title">Our Portfolio</h1>
            <p className="portfolio-hero-text">
              Innovative digital solutions delivered for businesses across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="portfolio-filters-wrap" ref={filtersRef}>
        <div className="portfolio-filters-inner section-container">
          <nav className="portfolio-filters" aria-label="Project categories">
            {portfolioFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`portfolio-filter-btn ${activeFilter === filter ? 'portfolio-filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="portfolio-section portfolio-section--light" ref={projectsRef}>
        <div className="portfolio-section-inner section-container">
          <h2 className="portfolio-heading portfolio-heading--left">Featured Projects</h2>
          <div className="portfolio-projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="portfolio-project-card">
                <div className="portfolio-project-image-wrap">
                  <img
                    src={project.image}
                    alt=""
                    className="portfolio-project-image"
                  />
                </div>
                <div className="portfolio-project-body">
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <p className="portfolio-project-desc">{project.description}</p>
                  <Link to={`/portfolio/case-study/${project.id}`} className="portfolio-project-link">
                    View Case Study <ArrowForwardIcon className="portfolio-project-arrow" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="portfolio-section portfolio-section--light" ref={whyRef}>
        <div className="portfolio-section-inner section-container">
          <h2 className="portfolio-heading">Why Partner with Us?</h2>
          <p className="portfolio-subheading">
            Track record of delivering successful projects that drive business growth.
          </p>
          <div className="portfolio-why-grid">
            {whyPartnerData.map((card, index) => (
              <div key={index} className="portfolio-why-card">
                <div className="portfolio-why-icon-wrap">
                  <WhyPartnerIcon type={card.icon} />
                </div>
                <h3 className="portfolio-why-title">{card.title}</h3>
                <p className="portfolio-why-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say — global Testimonials component (same as home: prev/next icons, cards, dots) */}
      <Testimonials
        title="What Our Clients Say"
        testimonials={portfolioTestimonialsData}
      />
    </div>
  );
};

export default PortfolioPage;
