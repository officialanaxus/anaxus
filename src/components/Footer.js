import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/PrivacyPolicy" className="footer-link">Privacy Policy</Link>
        <Link to="/Support" className="footer-link">Support</Link>
        <Link to="/Terms" className="footer-link">Terms of Service</Link> {/* Updated Link */}
      </div>
      <div className="footer-text">
        &copy; {new Date().getFullYear()} Anaxus. All Rights Reserved.
      </div>
    </footer>
  );
}