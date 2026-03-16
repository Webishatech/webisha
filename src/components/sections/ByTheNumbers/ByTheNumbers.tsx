import React, { useRef, useEffect } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionSubtitle from '../../ui/SectionSubtitle/SectionSubtitle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SpeedIcon from '@mui/icons-material/Speed';
import { statisticsData } from '../../../data/statisticsData';
import { byTheNumbersData, type ByTheNumbersIcon } from '../../../data/byTheNumbersData';
import { revealSection, ScrollTrigger } from '../../../utils/gsapAnimations';
import './ByTheNumbers.css';

const ByTheNumbersIconMap: Record<ByTheNumbersIcon, React.ComponentType<{ className?: string }>> = {
  scale: TrendingUpIcon,
  ai: SmartToyIcon,
  startup: RocketLaunchIcon,
  agile: SpeedIcon,
};

const ByTheNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    revealSection(sectionRef.current, '.by-the-numbers-header *', { stagger: 0.08 });
    revealSection(sectionRef.current, '.statistic-item, .by-the-numbers-card', { stagger: 0.12 });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="by-the-numbers-section" ref={sectionRef}>
      <div className="by-the-numbers-container section-container">
        <div className="by-the-numbers-top">
          <div className="by-the-numbers-header">
            <SectionTitle>By the Numbers</SectionTitle>
            <SectionSubtitle>A growing startup delivering impactful digital solutions. Every project we build strengthens our commitment to quality, innovation, and long-term client success.
            </SectionSubtitle>
          </div>
          {/* <div className="statistics-row">
            {statisticsData.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="statistic-separator" aria-hidden />}
                <div className="statistic-item">
                  <div className="statistic-number">{stat.number}</div>
                  <div className="statistic-label">{stat.label}</div>
                </div>
              </React.Fragment>
            ))}
          </div> */}
        </div>
        <div className="by-the-numbers-cards">
          {byTheNumbersData.map((item, index) => {
            const Icon = ByTheNumbersIconMap[item.icon];
            return (
              <div key={index} className="by-the-numbers-card">
                <div className="by-the-numbers-card-inner">
                  <div className="by-the-numbers-card-icon">
                    <Icon className="by-the-numbers-icon" />
                  </div>
                  <div className="by-the-numbers-title">{item.title}</div>
                  <div className="by-the-numbers-message">{item.message}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;
