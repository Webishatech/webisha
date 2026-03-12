import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudIcon from '@mui/icons-material/Cloud';
import { servicesData, type Service } from '../../../data/servicesData';
import './Services.css';

const ServiceIcon: React.FC<{ type: Service['icon'] }> = ({ type }) => {
  const baseSx = { fontSize: 40 };
  if (type === 'web') return <ComputerIcon sx={baseSx} />;
  if (type === 'mobile') return <PhoneAndroidIcon sx={{ ...baseSx, color: 'var(--secondary-bg)' }} />;
  return <CloudIcon sx={baseSx} />;
};

const Services: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-container section-container">
        <div className="services-header">
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>Explore our range of innovative IT services designed to help businesses build powerful digital products and improve operational efficiency.</SectionSubtitle>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrap">
                <ServiceIcon type={service.icon} />
              </div>
              <div className="service-body">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button type="button" className="service-button">
                  View Case Study
                  <ArrowForwardIcon className="service-arrow" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
