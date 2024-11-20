import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeOutThreshold = 50; // Fade out completely within 120px of scrolling

      // Trigger visibility of "Our Services" after minimal scroll
      if (window.scrollY > 0) {
        setIsServicesVisible(true);
      }

      // Adjust opacity based on scroll position, disappear quickly
      if (window.scrollY < fadeOutThreshold) {
        setScrollOpacity(1 - window.scrollY / fadeOutThreshold);
      } else {
        setScrollOpacity(0); // Fully hide after threshold
      }
    };

    const optimizedHandleScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', optimizedHandleScroll);
    return () => window.removeEventListener('scroll', optimizedHandleScroll);
  }, []);

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Anaxus</h1>
        <p>Your Trusted Partner in Tech Support and Consulting Services</p>
        <div
          className="scroll-indicator"
          style={{ opacity: scrollOpacity }}
        >
          <p>More Info</p>
          <span className="arrow-down">↓</span>
        </div>
      </header>

      <section className={`services-section ${isServicesVisible ? 'visible' : ''}`}>
        <h2>Our Services</h2>

        <div className="service-card">
          <h3>Networking Setup & Support</h3>
          <p>From configuring routers to setting up in-wall cabling, we ensure your network operates seamlessly and securely.</p>
        </div>

        <div className="service-card">
          <h3>Computer Troubleshooting</h3>
          <p>Our experts diagnose and resolve hardware and software issues, keeping your systems up and running smoothly.</p>
        </div>

        <div className="service-card">
          <h3>Home Theater Installation & Cable Management</h3>
          <p>We specialize in complete home theater installations, including professional TV mounting and organized, concealed cable management to enhance your viewing experience with a clean, seamless setup.</p>
        </div>

        <div className="service-card">
          <h3>Technical Support for Businesses</h3>
          <p>Our team provides ongoing support to keep your office tech and systems optimized for productivity and efficiency.</p>
        </div>

        <div className="service-card">
          <h3>General Inquiries</h3>
          <p>We specialize in finding solutions for most tech-related challenges. Reach out, and we’ll help you figure it out!</p>
        </div>
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Ready to transform your tech experience? <a href="/book-now">Book Now</a> to schedule your appointment!</p>
      </section>
    </div>
  );
}

export default Home;