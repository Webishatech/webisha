import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Us</h1>
                <p className="subtitle">Strategy. Design. Engineering.</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        We're a leading global technology consultancy that integrates strategy,
                        design and software engineering to enable enterprises and technology
                        disruptors to thrive as modern digital businesses.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Approach</h2>
                    <div className="approach-grid">
                        <div className="approach-item">
                            <h3>Strategy</h3>
                            <p>Building the right thing</p>
                        </div>
                        <div className="approach-item">
                            <h3>Design</h3>
                            <p>Building the thing right</p>
                        </div>
                        <div className="approach-item">
                            <h3>Engineering</h3>
                            <p>Building it reliably</p>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Our Values</h2>
                    <ul className="values-list">
                        <li>Global First</li>
                        <li>Innovation at Scale</li>
                        <li>Customer Success</li>
                        <li>Continuous Learning</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About; 