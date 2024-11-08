import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './App.css';
import Home from './pages/Home';
import BookNow from './pages/BookNow';
import Support from './pages/Support';
import Login from './pages/account/Login';
import SignUp from './pages/account/SignUp';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state
  const location = useLocation();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false); // Set loading to false after session check
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

  // Conditionally apply overflow style based on the current page
  useEffect(() => {
    if (['/account/login', '/account/signup'].includes(location.pathname)) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [location.pathname]);

  // Show loading indicator while checking session
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {showNavbar && <Navbar user={user} onSignOut={handleSignOut} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />

        {/* Protect Book Now route with PrivateRoute */}
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
      </Routes>
    </div>
  );
}

export default App;