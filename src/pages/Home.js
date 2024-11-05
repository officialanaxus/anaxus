import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Anaxus</h1>
        <p>Your Trusted Partner in Tech Support and Consulting Services</p>
      </header>

      <section className="services-section">
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
      </section>

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Ready to transform your tech experience? <a href="/book-now">Book Now</a> to schedule your appointment!</p>
      </section>
    </div>
  );
}

export default Home;