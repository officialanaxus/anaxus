import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async () => {
    setIsSubmitting(true); // Disable the button to prevent duplicate submissions

    try {
      const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), 10000) // 10-second timeout
      );
      const signupRequest = supabase.auth.signUp({ email, password });
      const { error } = await Promise.race([signupRequest, timeout]);

      if (error) {
        if (error.message.includes('User already registered')) {
          alert('This email is already associated with an account. Please log in.');
        } else {
          console.error('Error signing up:', error.message);
          alert('An error occurred during signup. Please try again.');
        }
      } else {
        alert('Signup successful! Please check your email to confirm your account.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      alert(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false); // Re-enable the button
    }
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Google signup
      },
    });
  };

  const handleMicrosoftLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'azure',
      options: {
        redirectTo: `${window.location.origin}/book-now`, // Redirect to "Book Now" after Microsoft signup
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
        <button 
          onClick={handleSignUp} 
          className="auth-button" 
          disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Sign Up'}
        </button>
        <div className="auth-create-account">
          <span>Have an account?</span>
          <Link to="/account/login" className="auth-link">Login</Link>
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
            <span className="tooltip-text">Sign Up with Google</span>
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
            <span className="tooltip-text">Sign Up with Microsoft</span>
          </div>
        </div>
        <div className="auth-footer auth-text-centered">
        </div>
      </div>
    </div>
  );
}