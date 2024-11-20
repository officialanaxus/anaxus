import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './App.css';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import Support from './pages/Support';
import Login from './pages/account/Login';
import SignUp from './pages/account/SignUp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms'; // Import Terms
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // Import ScrollToTop

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const showNavbar = !['/account/login', '/account/signup'].includes(location.pathname);

  useEffect(() => {
    if (['/account/login', '/account/signup'].includes(location.pathname)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  if (loading) {
    return <div className="loading-indicator">Loading...</div>;
  }

  return (
    <div className="App">
      <ScrollToTop /> {/* Add ScrollToTop here */}
      {showNavbar && <Navbar user={user} onSignOut={handleSignOut} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        <Route 
          path="/book-now" 
          element={
            <PrivateRoute user={user}>
              <BookNow />
            </PrivateRoute>
          } 
        />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} /> {/* Add Terms Route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;