import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../../utils/gsapAnimations';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/**
 * Main layout wrapper: header, page content (Outlet), and footer.
 * Used by all pages that share the same header/footer (e.g. Home).
 * Add routes as children of the layout route in App.
 */
const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 150);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
