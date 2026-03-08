import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h2>Transform your digital journey</h2>
                <button className="get-in-touch">Get in touch</button>
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/what-we-do">What we do</Link></li>
                        <li><Link to="/partnerships">Partnerships</Link></li>
                        <li><Link to="/who-we-work-with">Who we work with</Link></li>
                        <li><Link to="/news">News</Link></li>
                        <li><Link to="/dei">Diversity, Equity and Inclusion</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/investors">Investors</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Insights</h3>
                    <ul>
                        <li><Link to="/preference-center">Preference center</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/books">Books</Link></li>
                        <li><Link to="/podcasts">Podcasts</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Site info</h3>
                    <ul>
                        <li><Link to="/privacy">Privacy policy</Link></li>
                        <li><Link to="/accessibility">Accessibility statement</Link></li>
                        <li><Link to="/modern-slavery">Modern slavery statement</Link></li>
                        <li><Link to="/csr">Corporate Social Responsibility Policy</Link></li>
                        <li><Link to="/workplace-policy">Policy of Equal Opportunity, Non-Discrimination and Anti-Harassment at the Workplace</Link></li>
                        <li><Link to="/code-of-conduct">Code of conduct</Link></li>
                        <li><Link to="/integrity">Integrity helpline</Link></li>
                        <li><Link to="/procurement">Sustainable procurement policy</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Connect with us</h3>
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://wechat.com" target="_blank" rel="noopener noreferrer" aria-label="WeChat">
                            <i className="fab fa-weixin"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} WebIsha Tech, Inc.</p>
            </div>
        </footer>
    );
};

export default Footer; 