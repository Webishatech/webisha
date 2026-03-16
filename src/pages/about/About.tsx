import React, { useRef, useEffect } from 'react';
import featuredImage from '../../assets/images/about/featured.png';
import heroSectionImage from '../../assets/images/about/story.png';
import { statisticsData } from '../../data/statisticsData';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { heroEntrance, revealSection, ScrollTrigger } from '../../utils/gsapAnimations';
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
    icon: SmartToyIcon,
    title: 'AI-Powered Solutions',
    description: 'We design and build AI-powered systems that automate operations, enhance decision-making, and enable smarter digital products.',
  },
];

const whatWeDoItems = [
  'Experienced team of developers and technology experts',
  'Scalable and future-ready digital solutions',
  'Client-focused development approach',
  'High standards for performance and security',
  'Long-term technical support and maintenance',
];

const valuesCards = [
  {
    icon: VerifiedUserIcon,
    title: 'Integrity',
    description: 'We deliver on our promises and maintain transparency in every project. Trust is the foundation of our client relationships.',
  },
  {
    icon: LightbulbIcon,
    title: 'Innovation',
    description: 'We stay ahead of technology trends and continuously improve our processes to bring fresh, effective solutions to the table.',
  },
  {
    icon: GroupsIcon,
    title: 'Collaboration',
    description: 'We work as an extension of your team, aligning our goals with yours and communicating clearly at every step.',
  },
  {
    icon: HandshakeIcon,
    title: 'Customer Success',
    description: 'Your growth is our success. We focus on outcomes that matter to your business and long-term partnership.',
  },
];

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const whatRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    heroEntrance(heroRef.current, { y: 48, stagger: 0.14 });
  }, []);

  useEffect(() => {
    if (!storyRef.current) return;
    revealSection(storyRef.current, '.about-section-heading, .about-section-subheading', { stagger: 0.1 });
    revealSection(storyRef.current, '.about-section-text', { stagger: 0.08 });
    revealSection(storyRef.current, '.about-story-image-wrap', { start: 'top 80%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!missionRef.current) return;
    revealSection(missionRef.current, '.about-mission-heading', {});
    revealSection(missionRef.current, '.about-mission-card', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!whatRef.current) return;
    revealSection(whatRef.current, '.about-what-content .about-section-heading', {});
    revealSection(whatRef.current, '.about-what-item', { stagger: 0.08 });
    revealSection(whatRef.current, '.about-stat-block', { stagger: 0.1 });
    revealSection(whatRef.current, '.about-stats-closing', { start: 'top 85%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (!valuesRef.current) return;
    revealSection(valuesRef.current, '.about-values-heading, .about-values-intro', { stagger: 0.08 });
    revealSection(valuesRef.current, '.about-values-card', { stagger: 0.1 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="about-page">
      {/* Featured section */}
      <section className="about-featured">
        <div className="about-featured-bg">
          <img src={featuredImage} alt="" className="about-featured-image" />
          <div className="about-featured-overlay" aria-hidden />
        </div>
        <div className="about-featured-inner section-container">
          <div className="about-featured-content" ref={heroRef}>
            <h1 className="about-featured-title">
              Empowering Businesses<br />Through Innovative Technology
            </h1>
            <p className="about-featured-text">
              We help businesses embrace digital transformation through scalable, secure, and innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section about-section--light" ref={storyRef}>
        <div className="about-section-inner section-container">
          <div className="about-story-grid">
            <div className="about-story-content">
              <h2 className="about-section-heading">Our Story</h2>
              <h3 className="about-section-subheading">Building Technology That Drives Business Success</h3>
              <p className="about-section-text">
                Webisha Tech was founded with a mission to help organizations leverage modern technology to solve real-world challenges. We partner with startups, enterprises, and growing businesses to design and build digital products that improve efficiency and create competitive advantage.
              </p>
              <p className="about-section-text">
                Our approach focuses on understanding business needs first and then delivering technology solutions tailored to those goals. By combining strategic thinking with technical expertise, we help transform ideas into scalable digital solutions.
              </p>
              <p className="about-section-text">
                We also actively integrate AI-driven technologies and intelligent automation to help businesses build smarter products, streamline operations, and unlock new opportunities.
              </p>
              <p className="about-section-text">
                As a startup-focused consulting partner, we work closely with teams to rapidly prototype ideas, validate products, and bring innovative solutions to market faster.
              </p>
            </div>
            <div className="about-story-image-wrap">
              <img src={heroSectionImage} alt="Webisha Tech team collaborating" className="about-story-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="about-section about-section--light" ref={missionRef}>
        <div className="about-section-inner section-container">
          <h2 className="about-section-heading about-mission-heading">Our Mission & Vision</h2>
          <div className="about-mission-grid">
            {missionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="about-mission-card">
                  <div className="about-mission-icon-wrap">
                    <Icon className="about-mission-icon" />
                  </div>
                  <div className="about-mission-text">
                    <h3 className="about-mission-title">{card.title}</h3>
                    <p className="about-mission-desc">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-section about-section--light about-section--what" ref={whatRef}>
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
              {/* <div className="about-stats-row">
                {statisticsData.map((stat, index) => (
                  <div key={index} className="about-stat-block">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div> */}
              <div className="about-stats-closing">
                <span className="about-stats-closing-label">Our commitment</span>
                <p className="about-stats-closing-text">
                  Our team combines expertise with a commitment to quality, delivering solutions that help businesses grow and succeed in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-section about-section--light about-section--values" ref={valuesRef}>
        <div className="about-section-inner section-container">
          <h2 className="about-section-heading about-values-heading">Our Values</h2>
          <p className="about-values-intro">
            The principles that guide how we work with clients and build technology.
          </p>
          <div className="about-values-grid">
            {valuesCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="about-values-card">
                  <div className="about-values-icon-wrap">
                    <Icon className="about-values-icon" />
                  </div>
                  <h3 className="about-values-title">{card.title}</h3>
                  <p className="about-values-desc">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
