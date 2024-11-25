import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, onSignOut }) {
  return (
    <nav>
      <div className="nav-left">
        {/* Add a wrapper for the logo and text */}
        <div className="nav-logo">
          <img
            src="https://raw.githubusercontent.com/officialanaxus/anaxus/refs/heads/main/Images/Anaxus-logo-transparent.svg"
            alt="Anaxus Logo"
          />
          <h2>ANAXUS</h2>
        </div>
        <div className="nav-divider"></div>
        <Link to="/">Home</Link>
        <Link to="/booknowtemp">Book Now</Link>
        <Link to="/support">Support</Link>
      </div>

      {/* <div className="nav-right">
        {user ? (
          <button onClick={onSignOut}>Sign Out</button>
        ) : (
          <>
            <Link to="/account/login">Login</Link>
            <Link to="/account/signup">Sign Up</Link>
          </>
        )}
      </div> */}
    </nav>
  );
}