import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from '../../utils/gsapAnimations';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const stripRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!navRef.current) return;
        const ctx = gsap.context(() => {
            gsap.fromTo(logoRef.current, { opacity: 0, y: -12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
            const navItems = menuRef.current?.querySelectorAll('.nav-item');
            if (navItems?.length) gsap.fromTo(navItems, { opacity: 0, x: 12 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.06, delay: 0.15, ease: 'power2.out' });
            gsap.fromTo(stripRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.5, delay: 0.25, ease: 'power2.out', transformOrigin: 'left center' });
        }, navRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (!isMenuOpen || !mobileMenuRef.current) return;
        const items = mobileMenuRef.current.querySelectorAll('.nav-item');
        gsap.fromTo(items, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' });
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar" ref={navRef}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu} ref={logoRef}>
                        <div className="logo-text">
                            <span className="logo-webisha">WEBISHA</span>
                            <span className="logo-tech">TECH</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="nav-menu desktop-menu" ref={menuRef}>
                        <NavLink to="/" className="nav-item" onClick={closeMenu} end>Home</NavLink>
                        <NavLink to="/about" className="nav-item" onClick={closeMenu}>About</NavLink>
                        <NavLink to="/services" className="nav-item" onClick={closeMenu}>Services</NavLink>
                        <NavLink to="/portfolio" className="nav-item" onClick={closeMenu}>Portfolio</NavLink>
                        <NavLink to="/contact" className="nav-item" onClick={closeMenu}>Contact</NavLink>
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
                    <div className={`nav-menu mobile-menu ${isMenuOpen ? 'active' : ''}`} ref={mobileMenuRef}>
                        <NavLink to="/" className="nav-item" onClick={closeMenu} end>Home</NavLink>
                        <NavLink to="/about" className="nav-item" onClick={closeMenu}>About</NavLink>
                        <NavLink to="/services" className="nav-item" onClick={closeMenu}>Services</NavLink>
                        <NavLink to="/portfolio" className="nav-item" onClick={closeMenu}>Portfolio</NavLink>
                        <NavLink to="/contact" className="nav-item" onClick={closeMenu}>Contact</NavLink>
                    </div>
                    
                </div>
            </nav>
            <div className="navbar-bottom-strip" ref={stripRef}></div>
        </>
    );
};

export default Navbar; 