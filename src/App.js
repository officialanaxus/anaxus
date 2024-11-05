import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import Support from './pages/Support';  // Updated to Support

function Navbar() {
  return (
    <nav>
      <h2>Anaxus</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/book-now">Book Now</Link>
        <Link to="/support">Support</Link> {/* Updated to "Support" */}
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
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/support" element={<Support />} />  {/* Updated route to "/support" */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;