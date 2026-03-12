import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

/**
 * Main layout wrapper: header, page content (Outlet), and footer.
 * Used by all pages that share the same header/footer (e.g. Home).
 * Add routes as children of the layout route in App.
 */
const MainLayout: React.FC = () => {
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
