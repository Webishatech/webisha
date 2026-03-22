import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import heroImage from '../../assets/images/sections/hero-section.jpeg';
import { getServiceDetailByIndex, getServiceDetailByLink } from '../../data/servicesData';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
import Button from '../../components/ui/Button/Button';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './ServiceDetail.css';

const ServiceIcon: React.FC<{ type: 'web' | 'mobile' | 'ai' }> = ({ type }) => {
  const iconClass = 'service-detail-icon';
  if (type === 'web') return <ComputerIcon className={iconClass} />;
  if (type === 'mobile') return <PhoneAndroidIcon className={iconClass} />;
  return <SmartToyIcon className={iconClass} />;
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const serviceIndex = serviceId ? parseInt(serviceId, 10) : NaN;
  const serviceDetail = serviceId
    ? Number.isNaN(serviceIndex)
      ? getServiceDetailByLink(serviceId)
      : getServiceDetailByIndex(serviceIndex)
    : null;

  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const technologiesRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!serviceDetail) return;
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !overviewRef.current) return;
    revealSection(overviewRef.current, '.service-detail-section-heading, .service-detail-section-text', {
      stagger: 0.08,
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !featuresRef.current) return;
    revealSection(featuresRef.current, '.service-detail-section-heading', {});
    revealSection(featuresRef.current, '.service-detail-feature-item', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !processRef.current) return;
    revealSection(processRef.current, '.service-detail-section-heading', {});
    revealSection(processRef.current, '.service-detail-process-card', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !technologiesRef.current) return;
    revealSection(technologiesRef.current, '.service-detail-section-heading', {});
    revealSection(technologiesRef.current, '.service-detail-tech-item', { stagger: 0.06 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !benefitsRef.current) return;
    revealSection(benefitsRef.current, '.service-detail-section-heading', {});
    revealSection(benefitsRef.current, '.service-detail-benefit-item', { stagger: 0.08 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  useEffect(() => {
    if (!serviceDetail || !ctaRef.current) return;
    revealSection(ctaRef.current, '.service-detail-cta-title, .service-detail-cta-text', { stagger: 0.1 });
    revealSection(ctaRef.current, '.service-detail-cta-btn', { start: 'top 88%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [serviceDetail]);

  if (!serviceDetail) {
    return (
      <div className="service-detail-page service-detail-page--not-found">
        <div className="service-detail-not-found-inner section-container">
          <h1 className="service-detail-not-found-title">Service not found</h1>
          <p className="service-detail-not-found-text">
            The service you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/services" className="service-detail-back-link">
            <ArrowBackIcon className="service-detail-back-icon" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const { icon, title, description, overview, features, process, technologies, benefits } = serviceDetail;
  const featuredItems = features.slice(0, 4);
  const benefitItems = benefits.slice(0, 4);

  return (
    <div className="service-detail-page">
      {/* Hero */}
      <section className="service-detail-hero">
        <div className="service-detail-hero-bg">
          <img src={heroImage} alt="" className="service-detail-hero-image" aria-hidden />
          <div className="service-detail-hero-overlay" aria-hidden />
        </div>
        <div className="service-detail-hero-inner section-container">
          <div className="service-detail-hero-content" ref={heroRef}>
            {/* <div className="service-detail-hero-icon-wrap">
              <ServiceIcon type={icon} />
            </div> */}
            <h1 className="service-detail-hero-title">{title}</h1>
            <p className="service-detail-hero-desc">{description}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="service-detail-section service-detail-section--light" ref={overviewRef}>
        <div className="service-detail-section-inner section-container">
          <h2 className="service-detail-section-heading">Overview</h2>
          <div className="service-detail-overview-content">
            <p className="service-detail-section-text">{overview}</p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="service-detail-section service-detail-section--alt" ref={featuresRef}>
        <div className="service-detail-section-inner section-container">
          <h2 className="service-detail-section-heading">Key Features</h2>
          <ul className="service-detail-features-list">
            {featuredItems.map((item, index) => (
              <li key={index} className="service-detail-feature-item">
                <div className="service-detail-feature-item-top">
                  <span className="service-detail-feature-index">Feature {String(index + 1).padStart(2, '0')}</span>
                  <div className="service-detail-feature-icon" aria-hidden>
                    <CheckCircleIcon />
                  </div>
                </div>
                <span className="service-detail-feature-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="service-detail-section service-detail-section--light" ref={processRef}>
        <div className="service-detail-section-inner section-container">
          <h2 className="service-detail-section-heading">Our Process</h2>
          <div className="service-detail-process-wrapper">
            <div className="service-detail-process-grid">
              {process.map((step, index) => (
                <div key={index} className="service-detail-process-card">
                  <div className="service-detail-process-number">{index + 1}</div>
                  <div className="service-detail-process-content">
                    <h3 className="service-detail-process-title">{step.title}</h3>
                    <p className="service-detail-process-desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <section className="service-detail-section service-detail-section--alt" ref={technologiesRef}>
          <div className="service-detail-section-inner section-container">
            <h2 className="service-detail-section-heading">Technologies We Use</h2>
            <ul className="service-detail-tech-list">
              {technologies.map((tech, index) => (
                <li key={index} className="service-detail-tech-item">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="service-detail-section service-detail-section--light" ref={benefitsRef}>
        <div className="service-detail-section-inner section-container">
          <h2 className="service-detail-section-heading">Benefits</h2>
          <ul className="service-detail-benefits-list">
            {benefitItems.map((benefit, index) => (
              <li key={index} className="service-detail-benefit-item">
                <div className="service-detail-benefit-item-top">
                  <div className="service-detail-benefit-icon" aria-hidden>
                    <CheckCircleIcon />
                  </div>
                  <span className="service-detail-benefit-label">
                    Business Benefit {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="service-detail-benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="service-detail-cta" ref={ctaRef}>
        <div className="service-detail-cta-bg">
          <img src={heroImage} alt="" className="service-detail-cta-image" aria-hidden />
          <div className="service-detail-cta-overlay" aria-hidden />
        </div>
        <div className="service-detail-cta-inner section-container">
          <h2 className="service-detail-cta-title">Ready to Get Started?</h2>
          <p className="service-detail-cta-text">
            Contact us today to discuss your {title.toLowerCase()} needs and get a tailored solution for your business.
          </p>
          <Button
            variant="primary"
            size="large"
            onClick={() => (window.location.href = '/contact')}
            className="service-detail-cta-btn"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
