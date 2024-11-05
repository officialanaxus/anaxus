import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <h2 style={{ margin: '0 20px' }}>Anaxus</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;