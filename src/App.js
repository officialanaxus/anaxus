import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Placeholder components for each page
function Home() {
  return <h1>Text1</h1>;
}

function Schedule() {
  return <h1>Text2</h1>;
}

function Contact() {
  return <h1>Text3</h1>;
}

function Navbar() {
  return (
    <nav className="App-header" style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <h2 style={{ margin: '0 20px' }}>Anaxus</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Schedule</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
