import React, { useState } from 'react';
import './hero.css';

const HeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="hero-container">
            <header className="hero-header">
                <div className="header-inner">
                    <div className="logo-container">
                        <a href="#" title="">
                            <img className="logo" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="Logo" />
                        </a>
                    </div>
                    <button type="button" className="menu-button" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                            </svg>
                        )}
                    </button>

                    <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <a href="#" className="nav-link">Features</a>
                        <a href="#" className="nav-link">Solutions</a>
                        <a href="#" className="nav-link">Resources</a>
                        <a href="#" className="nav-link">Pricing</a>
                    </div>

                    <a href="#" className="join-now">Join Now</a>
                </div>
            </header>

            <section className="hero-section">
                <div className="hero-content">
                    <div className="text-content">
                        <p className="tagline">A social media for learners</p>
                        <h1 className="main-heading">Connect & learn from the experts</h1>
                        <p className="subheading">Grow your career fast with right mentor.</p>
                        <a href="#" className="cta-button">
                            Join for free
                            <svg className="cta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                        <p className="login-prompt">
                            Already joined us? <a href="#" className="login-link">Log in</a>
                        </p>
                    </div>
                    <div className="image-container">
                        <img className="hero-image" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="Hero" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
