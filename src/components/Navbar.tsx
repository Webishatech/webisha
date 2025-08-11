import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
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

                <div className="nav-menu">
                    <Link to="/" className="nav-item" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="nav-item" onClick={closeMenu}>About</Link>
                    <Link to="/signin" className="nav-item" onClick={closeMenu}>Sign In</Link>

                    <div onClick={toggleMenu}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 