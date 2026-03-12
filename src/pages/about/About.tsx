import React from 'react';
import featuredImage from '../../assets/images/about/featured.png';
import heroSectionImage from '../../assets/images/sections/hero-section.jpeg';
import { statisticsData } from '../../data/statisticsData';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import CloudIcon from '@mui/icons-material/Cloud';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './About.css';

const missionCards = [
  {
    icon: SettingsIcon,
    title: 'Our Mission',
    description: 'To deliver reliable, scalable, and innovative digital solutions that empower businesses to thrive in the digital landscape.',
  },
  {
    icon: PhoneAndroidIcon,
    title: 'Vision',
    description: 'To be a trusted technology partner for organizations worldwide, driving growth through cutting-edge web and mobile solutions.',
  },
  {
    icon: LaptopIcon,
    title: 'Development',
    description: 'We build high-performance web and mobile applications with a focus on usability, security, and long-term scalability.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'We help businesses migrate and scale their infrastructure with reliable cloud technologies.',
  },
];

const whatWeDoItems = [
  'Experienced team of developers and technology experts',
  'Scalable and future-ready digital solutions',
  'Client-focused development approach',
  'High standards for performance and security',
  'Long-term technical support and maintenance',
];

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Featured section */}
      <section className="about-featured">
        <div className="about-featured-bg">
          <img src={featuredImage} alt="" className="about-featured-image" />
          <div className="about-featured-overlay" aria-hidden />
        </div>
        <div className="about-featured-inner section-container">
          <div className="about-featured-content">
            <h1 className="about-featured-title">
              Empowering Businesses<br />Through Innovative Technology
            </h1>
            <p className="about-featured-text">
              At Webisha Tech, we help businesses embrace digital transformation through scalable, secure, and innovative technology solutions.
            </p>
            <p className="about-featured-text">
              Our team of experienced developers, designers and strategists works closely with clients to create digital products that drive growth and efficiency. From web platforms to mobile applications and cloud solutions, we build systems designed for performance, reliability and future scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section about-section--light">
        <div className="about-section-inner section-container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <h2 className="about-section-heading">Our Story</h2>
              <h3 className="about-section-subheading">Building Technology That Drives Business Success</h3>
              <p className="about-section-text">
                Webisha Tech was founded with a simple goal: to help businesses leverage technology for growth. Over the years, we have partnered with organizations across industries to deliver web applications, mobile solutions, and cloud infrastructure that are secure, scalable, and built for the future.
              </p>
              <p className="about-section-text">
                Our approach combines deep technical expertise with a commitment to understanding each client's unique challenges. We believe in long-term partnerships and continuous improvement, ensuring that the solutions we deliver evolve with your business needs.
              </p>
              <p className="about-section-bullet">
                <CheckCircleIcon className="about-check-icon" aria-hidden />
                We believe that successful digital products come from collaboration, innovation, and continuous improvement.
              </p>
            </div>
            <div className="about-story-image-wrap">
              <img src={heroSectionImage} alt="Webisha Tech team collaborating" className="about-story-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="about-section about-section--light">
        <div className="about-section-inner section-container">
          <h2 className="about-section-heading about-section-heading--center">Our Mission & Vision</h2>
          <div className="about-mission-grid">
            {missionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="about-mission-card">
                  <div className="about-mission-icon-wrap">
                    <Icon className="about-mission-icon" />
                  </div>
                  <h3 className="about-mission-title">{card.title}</h3>
                  <p className="about-mission-desc">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-section about-section--light">
        <div className="about-section-inner section-container">
          <div className="about-what-grid">
            <div className="about-what-content">
              <h2 className="about-section-heading">What We Do</h2>
              <ul className="about-what-list">
                {whatWeDoItems.map((item, index) => (
                  <li key={index} className="about-what-item">
                    <CheckCircleIcon className="about-check-icon" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-what-stats">
              <div className="about-stats-row">
                {statisticsData.map((stat, index) => (
                  <div key={index} className="about-stat-block">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="about-stats-closing">
                Our team combines expertise with a commitment to quality, delivering solutions that help businesses grow and succeed in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
