import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) console.error("Error logging in:", error.message);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Google login
      },
    });
  };

  const handleMicrosoftLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Microsoft login
      },
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <Link to="/" className="back-button">← Back to Home</Link>
        <h1 className="auth-title">
          Login
          <span className="auth-subtitle">(You must login to book an appointment)</span>
        </h1>
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
        <button onClick={handleLogin} className="auth-button">Login</button>
        <div className="auth-create-account">
          <span>Don’t have an account?</span>
          <Link to="/account/signup" className="auth-link">Create an Account</Link>
        </div>
        <div className="auth-or">or</div>
        <div className="auth-social-buttons">
          {/* Google Button with Tooltip */}
          <div className="tooltip">
            <button onClick={handleGoogleLogin} className="social-button">
              <img
                src="https://raw.githubusercontent.com/officialanaxus/anaxus/refs/heads/main/Images/Google%20icon.svg"
                alt="Google"
                className="social-logo"
              />
            </button>
            <span className="tooltip-text">Login with Google</span>
          </div>

          {/* Microsoft Button with Tooltip */}
          <div className="tooltip">
            <button onClick={handleMicrosoftLogin} className="social-button">
              <img
                src="https://raw.githubusercontent.com/officialanaxus/anaxus/refs/heads/main/Images/Microsoft%20icon.svg"
                alt="Microsoft"
                className="social-logo"
              />
            </button>
            <span className="tooltip-text">Login with Microsoft</span>
          </div>
        </div>
      </div>
    </div>
  );
}