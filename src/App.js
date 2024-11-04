import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Home</h1>;
}

function Schedule() {
  return <h1>Schedule</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Navbar() {
  return (
    <nav>
      <h2>Anaxus</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
