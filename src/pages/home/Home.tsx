import React from 'react';
import { Hero, Services, ByTheNumbers, Portfolio, Testimonials } from '../../components/sections';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Services />
      <ByTheNumbers />
      <Portfolio />
      <Testimonials />
    </div>
  );
};

export default Home;
