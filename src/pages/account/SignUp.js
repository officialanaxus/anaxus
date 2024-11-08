import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) console.error("Error signing up:", error.message);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Google signup
      },
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1 className="auth-title">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
        />
        <button onClick={handleSignUp} className="auth-button">Sign Up</button>
        <div className="auth-or">or</div>
        <button onClick={handleGoogleLogin} className="auth-button auth-google-button">Sign Up with Google</button>
      </div>
    </div>
  );
}