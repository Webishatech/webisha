import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import { statisticsData } from '../../../data/statisticsData';
import './ByTheNumbers.css';

const ByTheNumbers: React.FC = () => {
  return (
    <section className="by-the-numbers-section">
      <div className="by-the-numbers-container section-container">
        <div className="by-the-numbers-header">
          <SectionTitle>By the Numbers</SectionTitle>
          <SectionSubtitle>Delivering reliable results for clients worldwide.</SectionSubtitle>
        </div>
        <div className="statistics-row">
          {statisticsData.map((stat, index) => (
            <React.Fragment key={index}>
              {index > 0 && <div className="statistic-separator" aria-hidden />}
              <div className="statistic-item">
                <div className="statistic-number">{stat.number}</div>
                <div className="statistic-label">{stat.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
