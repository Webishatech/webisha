import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import './ByTheNumbers.css';

export interface Statistic {
  number: string;
  label: string;
}

const statistics: Statistic[] = [
  {
    number: '250+',
    label: 'Projects Delivered',
  },
  {
    number: '10+',
    label: 'Years in Business',
  },
  {
    number: '60+',
    label: 'Skilled Developers',
  },
  {
    number: '100+',
    label: 'Satisfied Clients',
  },
];

const ByTheNumbers: React.FC = () => {
  return (
    <section className="by-the-numbers-section">
      <div className="by-the-numbers-container">
        <div className="by-the-numbers-header">
          <SectionTitle>By the Numbers</SectionTitle>
          <SectionSubtitle>Check out some of our recent projects.</SectionSubtitle>
        </div>
        <div className="statistics-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="statistic-item">
              <div className="statistic-number">{stat.number}</div>
              <div className="statistic-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
