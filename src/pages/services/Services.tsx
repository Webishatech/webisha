import React, { useRef, useEffect } from 'react';
import Button from '../../components/ui/Button/Button';
import heroImage from '../../assets/images/sections/hero-section.jpeg';
import { servicesData } from '../../data/servicesData';
import { statisticsData } from '../../data/statisticsData';
import { howWeWorkData, type HowWeWorkStep } from '../../data/howWeWorkData';
import { ServiceCard } from '../../components/ui';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
import SearchIcon from '@mui/icons-material/Search';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import './Services.css';

const HowWeWorkIcon: React.FC<{ type: HowWeWorkStep['icon'] }> = ({ type }) => {
  const iconClass = 'services-process-icon';
  if (type === 'discovery') return <SearchIcon className={iconClass} />;
  if (type === 'design') return <LightbulbIcon className={iconClass} />;
  if (type === 'development') return <CodeIcon className={iconClass} />;
  return <RocketLaunchIcon className={iconClass} />;
};

const ServicesPage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const howRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, []);

  useEffect(() => {
    if (!servicesRef.current) return;
    revealSection(servicesRef.current, '.services-heading, .services-subheading', { stagger: 0.08 });
    revealSection(servicesRef.current, '.service-card', { stagger: 0.1 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!whyRef.current) return;
    revealSection(whyRef.current, '.services-heading, .services-subheading', { stagger: 0.08 });
    revealSection(whyRef.current, '.services-stat', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!howRef.current) return;
    revealSection(howRef.current, '.services-heading, .services-subheading', { stagger: 0.08 });
    revealSection(howRef.current, '.services-process-card', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!ctaRef.current) return;
    revealSection(ctaRef.current, '.services-cta-title, .services-cta-text', { stagger: 0.1 });
    revealSection(ctaRef.current, '.services-cta-btn', { start: 'top 88%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-bg">
          <img src={heroImage} alt="" className="services-hero-image" aria-hidden />
          <div className="services-hero-overlay" aria-hidden />
        </div>
        <div className="services-hero-inner section-container">
          <div className="services-hero-content" ref={heroRef}>
            <h1 className="services-hero-title">
              Empowering Your Business Through Innovative IT Services
            </h1>
            <p className="services-hero-text">
              A comprehensive suite of IT services to enhance your operations with scalable, secure solutions.
            </p>
            <Button
              variant="primary"
              size="large"
              onClick={() => window.location.href = '/contact'}
            >
              Get in Touch
            </Button>
          </div>
          {/* <div className="services-hero-visual" aria-hidden>
            <div className="services-hero-visual-placeholder" />
          </div> */}
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section services-section--light" ref={servicesRef}>
        <div className="services-section-inner section-container">
          <h2 className="services-heading">Our Services</h2>
          <p className="services-subheading">
            Explore the range of innovative IT services we offer to help your business thrive in the digital era.
          </p>
          <div className="services-cards-grid">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                linkHref="/contact"
                linkText="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Webisha Tech */}
      <section className="services-section services-section--light" ref={whyRef}>
        <div className="services-section-inner section-container">
          <h2 className="services-heading">Why Choose Webisha Tech?</h2>
          <p className="services-subheading">
            We follow a structured and agile development process to ensure project success.
          </p>
          <div className="services-stats-row">
            {statisticsData.map((stat, index) => (
              <div key={index} className="services-stat">
                <span className="services-stat-number">{stat.number}</span>
                <span className="services-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="services-section services-section--light" ref={howRef}>
        <div className="services-section-inner section-container">
          <h2 className="services-heading">How We Work</h2>
          <p className="services-subheading">
            Our proven process ensures transparency, quality, and timely delivery from discovery to deployment.
          </p>
          <div className="services-process-grid">
            {howWeWorkData.map((step, index) => (
              <div key={index} className="services-process-card">
                <div className="services-process-icon-wrap">
                  <HowWeWorkIcon type={step.icon} />
                </div>
                <h3 className="services-process-title">{step.title}</h3>
                <p className="services-process-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="services-cta" ref={ctaRef}>
        <div className="services-cta-bg">
          <img src={heroImage} alt="" className="services-cta-image" aria-hidden />
          <div className="services-cta-overlay" aria-hidden />
        </div>
        <div className="services-cta-inner section-container">
          <h2 className="services-cta-title">Ready to Transform Your Business?</h2>
          <p className="services-cta-text">
            Contact us today to discuss your technology needs and see how we can help your business grow.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={() => window.location.href = '/contact'}
            className="services-cta-btn"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
