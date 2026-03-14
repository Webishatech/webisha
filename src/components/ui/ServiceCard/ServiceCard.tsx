import React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ComputerIcon from '@mui/icons-material/Computer';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudIcon from '@mui/icons-material/Cloud';
import { type Service } from '../../../data/servicesData';
import './ServiceCard.css';

const ServiceIcon: React.FC<{ type: Service['icon'] }> = ({ type }) => {
  const iconClass = 'service-card-icon';
  if (type === 'web') return <ComputerIcon className={iconClass} />;
  if (type === 'mobile') return <PhoneAndroidIcon className={iconClass} />;
  return <CloudIcon className={iconClass} />;
};

export interface ServiceCardProps {
  service: Service;
  linkHref?: string;
  linkText?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  linkHref = '/contact',
  linkText = 'Learn More',
}) => {
  const cta = linkHref ? (
    <Link to={linkHref} className="service-card-link">
      {linkText} <ArrowForwardIcon className="service-card-arrow" />
    </Link>
  ) : (
    <button type="button" className="service-card-link service-card-link--button">
      {linkText} <ArrowForwardIcon className="service-card-arrow" />
    </button>
  );

  return (
    <article className="service-card">
      <div className="service-card-icon-wrap">
        <ServiceIcon type={service.icon} />
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description">{service.description}</p>
        {cta}
      </div>
    </article>
  );
};

export default ServiceCard;
