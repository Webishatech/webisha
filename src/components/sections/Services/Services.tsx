import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Services.css';

export interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies to drive your business forward.',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for your business needs.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>Explore our range of IT services tailored to your business needs.</SectionSubtitle>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">
                View Case Study
                <KeyboardArrowDownIcon className="service-arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
