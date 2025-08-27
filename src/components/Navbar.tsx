import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../assets/images/logo/webisha_tech3.png';
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
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logo} alt="WebIshaTech" className="logo-image" />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-menu desktop-menu">
                    <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
                    <Link to="/signin" className="nav-item" onClick={closeMenu}>Sign In</Link>
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
                    <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
                    <Link to="/signin" className="nav-item" onClick={closeMenu}>Sign In</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 