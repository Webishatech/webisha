import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <div className="logo-graphic">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 5L35 15L30 25L20 35L10 25L5 15L20 5Z" stroke="white" strokeWidth="2" fill="none"/>
                                <path d="M15 15L25 15L20 25L15 15Z" fill="white"/>
                                <path d="M20 10L30 20L25 30L20 30L10 20L20 10Z" stroke="white" strokeWidth="1.5" fill="none" opacity="0.7"/>
                            </svg>
                        </div>
                        <div className="logo-text">
                            <span className="logo-webisha">WEBISHA</span>
                            <span className="logo-tech">TECH</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-menu desktop-menu">
                        <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
                        <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
                        <Link to="/portfolio" className="nav-item" onClick={closeMenu}>Portfolio</Link>
                        <Link to="/about" className="nav-item" onClick={closeMenu}>About Us</Link>
                        <Link to="/contact" className="nav-item nav-button" onClick={closeMenu}>Contact</Link>
                        <div className="nav-arrows">
                            <ChevronLeftIcon className="nav-arrow" />
                            <ChevronRightIcon className="nav-arrow" />
                        </div>
                    </div>

                    {/* Hamburger Menu Button */}
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <CloseIcon className="hamburger-icon close-icon" />
                        ) : (
                            <MenuIcon className="hamburger-icon" />
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <div className={`nav-menu mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
                        <Link to="/services" className="nav-item" onClick={closeMenu}>Services</Link>
                        <Link to="/portfolio" className="nav-item" onClick={closeMenu}>Portfolio</Link>
                        <Link to="/about" className="nav-item" onClick={closeMenu}>About Us</Link>
                        <Link to="/contact" className="nav-item nav-button" onClick={closeMenu}>Contact</Link>
                    </div>
                </div>
            </nav>
            <div className="navbar-bottom-strip"></div>
        </>
    );
};

export default Navbar; 