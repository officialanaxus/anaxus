import React from 'react';
import './Support.css';

function Support() {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <p>We’re here to help! If you have questions about booking or need assistance with a service, feel free to reach out to our support team.</p>
      
      <section className="contact-info">
        <h2>Contact Support</h2>
        <p>Email us at: <a href="mailto:support@anaxus.tech">support@anaxus.tech</a></p>
        <p>Our team is available to assist you with:</p>
        <ul>
          <li>Resolving issues related to your services</li>
          <li>Service-related questions</li>
          <li>General inquiries and additional support</li>
        </ul>
      </section>

      <section className="support-tips">
        <h3>Support Hours</h3>
        <p>Monday - Friday: 9 AM - 5 PM EST</p>
        <p>We aim to respond to all inquiries within 24 hours during business days.</p>
      </section>
    </div>
  );
}

export default Support;