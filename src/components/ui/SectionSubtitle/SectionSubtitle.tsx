import React from 'react';
import './SectionSubtitle.css';

export interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ children, className = '' }) => {
  return (
    <p className={`section-subtitle ${className}`}>
      {children}
    </p>
  );
};

export default SectionSubtitle;
