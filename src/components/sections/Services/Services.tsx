import React, { useRef, useEffect } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import { ServiceCard } from '../../ui';
import { servicesData } from '../../../data/servicesData';
import { revealSection, ScrollTrigger } from '../../../utils/gsapAnimations';
import './Services.css';

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    revealSection(sectionRef.current, '.services-header *', { stagger: 0.08 });
    revealSection(sectionRef.current, '.service-card', { stagger: 0.1, start: 'top 78%' });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container section-container">
        <div className="services-header">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>Explore our range of innovative IT services designed to help businesses build powerful digital products and improve operational efficiency.</SectionSubtitle>
        </div>
        <div className="services-grid">
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
  );
};

export default Services;
