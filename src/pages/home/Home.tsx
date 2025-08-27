import React, { useState } from 'react';
import companyProfile from '../../assets/images/clients/client1.png';
import qtrHome from '../../assets/images/clients/qtr_home.png';
import qtrTasks  from '../../assets/images/clients/qtr_tasks.png';
import saiapp from '../../assets/images/clients/saiapp.png';

import './Home.css';

const Home: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "WebIsha Tech is a Visionary",
            subtitle: "Building modern AI-driven applications, from custom web platforms to enterprise-grade software, with full-cycle project delivery",
            ctaText: "Learn more",
        },
        {
            title: "Strategy. Design. Engineering.",
            subtitle: "We're a leading global technology consultancy that integrates strategy, design and software engineering.",
            ctaText: "Our services",
        },
        // Add more slides as needed
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>{slides[currentSlide].title}</h1>
                    <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>
                    <button className="cta-button">{slides[currentSlide].ctaText}</button>
                </div>
                <div className="hero-visual">
                    <div className="company-profile">
                        <img src={companyProfile} alt="Company Profile" />
                    </div>
                </div>

                {/* Slider Controls */}
                <div className="slider-controls">
                    {/* <div className="dots">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div> */}
                    <div className="navigation-buttons">
                        <button onClick={prevSlide} className="nav-button prev" aria-label="Previous slide">
                            <span>←</span>
                        </button>
                        <button onClick={() => setCurrentSlide(currentSlide)} className="nav-button pause" aria-label="Pause">
                            <span>‖</span>
                        </button>
                        <button onClick={nextSlide} className="nav-button next" aria-label="Next slide">
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-content">
                <div className="content-grid">
                    <div className="content-item">
                        <h2>Strategy. Design. Engineering.</h2>
                        <p>We're a leading global technology consultancy that integrates strategy, design and
                            software engineering to enable our clients to thrive.</p>
                    </div>
                    <div className="content-image">
                        <div className="image-gallery">
                          
                            <div className="gallery-item medium">
                                <img src={qtrTasks} alt="Project 2" />
                            </div>
                            <div className="gallery-item medium">
                                <img src={saiapp} alt="Project 3" />
                            </div>
                            <div className="gallery-item medium">
                                <img src={qtrHome} alt="Project 4" />
                            </div>
                          
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 