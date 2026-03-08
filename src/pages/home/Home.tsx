import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Services from '../../components/sections/Services/Services';
import ByTheNumbers from '../../components/sections/ByTheNumbers/ByTheNumbers';
import Portfolio from '../../components/sections/Portfolio/Portfolio';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
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
